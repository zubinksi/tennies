import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
  Animated,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { useHealthKit } from '../hooks/useHealthKit';
import { colors, spacing } from '../theme';

interface RecordingMeta {
  id: string;
  uri: string;
  filename: string;
  durationMs: number;
  createdAt: number;
  stepCount: number | null;
  walkSpeedMph: number | null;
}

const RECORDINGS_KEY = 'think_recordings';
const NUM_BARS = 30;
const METERING_INTERVAL_MS = 80;

const formatDuration = (ms: number): string => {
  const totalSec = Math.floor(ms / 1000);
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
};

const formatDate = (timestamp: number): string => {
  const d = new Date(timestamp);
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
};

const meteringToHeight = (db: number | undefined): number => {
  if (db == null || db === -160) return 0.05;
  // db ranges from -160 (silent) to 0 (max)
  const normalized = Math.max(0, Math.min(1, (db + 60) / 60));
  return Math.max(0.05, normalized);
};

export const ThinkScreen: React.FC = () => {
  const { todaySteps, walkingSpeed, isAuthorized } = useHealthKit();

  const [isRecording, setIsRecording] = useState(false);
  const [recordingMs, setRecordingMs] = useState(0);
  const [barHeights] = useState<Animated.Value[]>(() =>
    Array.from({ length: NUM_BARS }, () => new Animated.Value(0.05)),
  );
  const [savedRecordings, setSavedRecordings] = useState<RecordingMeta[]>([]);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [playbackMs, setPlaybackMs] = useState(0);

  const recordingRef = useRef<Audio.Recording | null>(null);
  const soundRef = useRef<Audio.Sound | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const meteringRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const barQueueRef = useRef<number[]>(Array(NUM_BARS).fill(0.05));

  // Load saved recordings
  useEffect(() => {
    AsyncStorage.getItem(RECORDINGS_KEY).then((raw) => {
      if (raw) {
        try {
          setSavedRecordings(JSON.parse(raw));
        } catch (_) {}
      }
    });
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearTimers();
      if (recordingRef.current) {
        recordingRef.current.stopAndUnloadAsync().catch(() => {});
      }
      if (soundRef.current) {
        soundRef.current.unloadAsync().catch(() => {});
      }
    };
  }, []);

  const clearTimers = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (meteringRef.current) clearInterval(meteringRef.current);
    timerRef.current = null;
    meteringRef.current = null;
  };

  const pushBar = useCallback(
    (height: number) => {
      barQueueRef.current = [...barQueueRef.current.slice(1), height];
      barQueueRef.current.forEach((h, i) => {
        Animated.spring(barHeights[i], {
          toValue: h,
          useNativeDriver: false,
          speed: 40,
          bounciness: 0,
        }).start();
      });
    },
    [barHeights],
  );

  const resetBars = useCallback(() => {
    barQueueRef.current = Array(NUM_BARS).fill(0.05);
    barHeights.forEach((bar) => {
      Animated.spring(bar, {
        toValue: 0.05,
        useNativeDriver: false,
        speed: 40,
        bounciness: 0,
      }).start();
    });
  }, [barHeights]);

  const startRecording = async () => {
    try {
      const perm = await Audio.requestPermissionsAsync();
      if (!perm.granted) {
        Alert.alert(
          'Microphone Access',
          'Tennies needs microphone access to record voice memos. Please enable it in Settings.',
        );
        return;
      }

      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
        staysActiveInBackground: false,
      });

      const rec = new Audio.Recording();
      await rec.prepareToRecordAsync({
        android: {
          extension: '.m4a',
          outputFormat: 2, // MPEG_4
          audioEncoder: 3, // AAC
          sampleRate: 44100,
          numberOfChannels: 2,
          bitRate: 128000,
        },
        ios: {
          extension: '.m4a',
          outputFormat: 'aac ',
          audioQuality: 127, // MAX
          sampleRate: 44100,
          numberOfChannels: 2,
          bitRate: 128000,
          linearPCMBitDepth: 16,
          linearPCMIsBigEndian: false,
          linearPCMIsFloat: false,
        },
        web: { mimeType: 'audio/webm', bitsPerSecond: 128000 },
        isMeteringEnabled: true,
      });

      await rec.startAsync();
      recordingRef.current = rec;
      setIsRecording(true);
      setRecordingMs(0);
      resetBars();

      // Duration timer
      const start = Date.now();
      timerRef.current = setInterval(() => {
        setRecordingMs(Date.now() - start);
      }, 200);

      // Metering polling
      meteringRef.current = setInterval(async () => {
        if (!recordingRef.current) return;
        try {
          const status = await recordingRef.current.getStatusAsync();
          if (status.isRecording) {
            pushBar(meteringToHeight(status.metering));
          }
        } catch (_) {}
      }, METERING_INTERVAL_MS);
    } catch (err) {
      Alert.alert('Recording Error', 'Could not start recording. Please try again.');
      console.log('[ThinkScreen] startRecording error:', err);
    }
  };

  const stopRecording = async () => {
    if (!recordingRef.current) return;
    clearTimers();
    setIsRecording(false);

    try {
      await recordingRef.current.stopAndUnloadAsync();
      const uri = recordingRef.current.getURI();
      recordingRef.current = null;

      await Audio.setAudioModeAsync({ allowsRecordingIOS: false });

      if (!uri) return;

      // Copy to Documents directory
      const docsDir = FileSystem.documentDirectory;
      const filename = `think_${Date.now()}.m4a`;
      const destUri = docsDir + filename;
      await FileSystem.moveAsync({ from: uri, to: destUri });

      const speedMph =
        walkingSpeed != null ? Math.round(walkingSpeed * 2.23694 * 10) / 10 : null;

      const meta: RecordingMeta = {
        id: String(Date.now()),
        uri: destUri,
        filename,
        durationMs: recordingMs,
        createdAt: Date.now(),
        stepCount: isAuthorized ? todaySteps : null,
        walkSpeedMph: speedMph,
      };

      const updated = [meta, ...savedRecordings];
      setSavedRecordings(updated);
      await AsyncStorage.setItem(RECORDINGS_KEY, JSON.stringify(updated));

      resetBars();
    } catch (err) {
      Alert.alert('Save Error', 'Could not save the recording.');
      console.log('[ThinkScreen] stopRecording error:', err);
    }
  };

  const playRecording = async (meta: RecordingMeta) => {
    // Stop any current playback
    if (soundRef.current) {
      await soundRef.current.stopAsync().catch(() => {});
      await soundRef.current.unloadAsync().catch(() => {});
      soundRef.current = null;
    }

    if (playingId === meta.id) {
      setPlayingId(null);
      setPlaybackMs(0);
      return;
    }

    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        playsInSilentModeIOS: true,
      });

      const { sound } = await Audio.Sound.createAsync(
        { uri: meta.uri },
        { shouldPlay: true },
        (status) => {
          if (status.isLoaded) {
            setPlaybackMs(status.positionMillis ?? 0);
            if (status.didJustFinish) {
              setPlayingId(null);
              setPlaybackMs(0);
            }
          }
        },
      );
      soundRef.current = sound;
      setPlayingId(meta.id);
    } catch (err) {
      Alert.alert('Playback Error', 'Could not play this recording.');
      console.log('[ThinkScreen] playback error:', err);
    }
  };

  const deleteRecording = (meta: RecordingMeta) => {
    Alert.alert('Delete Recording', 'Delete this voice memo?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          if (playingId === meta.id && soundRef.current) {
            await soundRef.current.stopAsync().catch(() => {});
            await soundRef.current.unloadAsync().catch(() => {});
            soundRef.current = null;
            setPlayingId(null);
          }
          try {
            await FileSystem.deleteAsync(meta.uri, { idempotent: true });
          } catch (_) {}
          const updated = savedRecordings.filter((r) => r.id !== meta.id);
          setSavedRecordings(updated);
          await AsyncStorage.setItem(RECORDINGS_KEY, JSON.stringify(updated));
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Quotes */}
        <Text style={styles.quote}>
          {'"If you are seeking creative ideas, go out walking. Angels whisper to a man when he goes for a walk."'}
          {'  ~ Raymond Carver'}
        </Text>
        <Text style={styles.quote}>
          {'"All truly great thoughts are conceived by walking"'}
          {'  ~ Friedrich Nietzsche'}
        </Text>

        {/* Recorder card */}
        <View style={styles.recorderCard}>
          {/* Waveform */}
          <View style={styles.waveform}>
            {barHeights.map((anim, i) => (
              <Animated.View
                key={i}
                style={[
                  styles.bar,
                  {
                    height: anim.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['4%', '100%'],
                    }),
                    backgroundColor: isRecording
                      ? colors.text
                      : colors.textMuted,
                    opacity: isRecording ? 1 : 0.3,
                  },
                ]}
              />
            ))}
          </View>

          {/* Timer */}
          <Text style={styles.timer}>
            {formatDuration(isRecording ? recordingMs : 0)}
          </Text>

          {/* Record / Stop button */}
          <TouchableOpacity
            style={[styles.recordButton, isRecording && styles.recordButtonActive]}
            onPress={isRecording ? stopRecording : startRecording}
            activeOpacity={0.75}
          >
            {isRecording ? (
              <View style={styles.stopIcon} />
            ) : (
              <View style={styles.micIcon}>
                <Ionicons name="mic" size={28} color="#FFFFFF" />
              </View>
            )}
          </TouchableOpacity>

          <Text style={styles.recordLabel}>
            {isRecording ? 'Tap to stop' : 'Tap to record'}
          </Text>
        </View>

        {/* Saved recordings */}
        {savedRecordings.length > 0 && (
          <View style={styles.savedSection}>
            <Text style={styles.savedTitle}>Saved Memos</Text>
            {savedRecordings.map((meta) => {
              const isPlaying = playingId === meta.id;
              const progress = isPlaying ? playbackMs / meta.durationMs : 0;
              return (
                <View key={meta.id} style={styles.memoCard}>
                  <View style={styles.memoHeader}>
                    <Text style={styles.memoDate}>{formatDate(meta.createdAt)}</Text>
                    <TouchableOpacity
                      onPress={() => deleteRecording(meta)}
                      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                    >
                      <Ionicons name="trash-outline" size={16} color={colors.textMuted} />
                    </TouchableOpacity>
                  </View>

                  <View style={styles.memoMeta}>
                    {meta.stepCount != null && (
                      <Text style={styles.memoTag}>
                        {meta.stepCount.toLocaleString()} steps
                      </Text>
                    )}
                    {meta.walkSpeedMph != null && (
                      <Text style={styles.memoTag}>{meta.walkSpeedMph} mph</Text>
                    )}
                    <Text style={styles.memoTag}>
                      {formatDuration(meta.durationMs)}
                    </Text>
                  </View>

                  {/* Progress bar */}
                  {isPlaying && (
                    <View style={styles.progressTrack}>
                      <View
                        style={[
                          styles.progressFill,
                          { width: `${Math.min(100, progress * 100)}%` },
                        ]}
                      />
                    </View>
                  )}

                  <TouchableOpacity
                    style={styles.playButton}
                    onPress={() => playRecording(meta)}
                    activeOpacity={0.7}
                  >
                    <Ionicons
                      name={isPlaying ? 'stop' : 'play'}
                      size={16}
                      color={colors.text}
                    />
                    <Text style={styles.playLabel}>
                      {isPlaying ? 'Stop' : 'Play'}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
  container: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
    gap: spacing.md,
  },

  // Quotes
  quote: {
    fontSize: 14,
    fontStyle: 'italic',
    color: colors.textMuted,
    lineHeight: 21,
  },

  // Recorder card
  recorderCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: spacing.lg,
    alignItems: 'center',
    gap: spacing.md,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    marginTop: spacing.sm,
  },
  waveform: {
    width: '100%',
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  bar: {
    flex: 1,
    borderRadius: 2,
    minHeight: 3,
  },
  timer: {
    fontSize: 36,
    fontWeight: '300',
    color: colors.text,
    fontVariant: ['tabular-nums'],
    letterSpacing: 2,
  },
  recordButton: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.text,
    alignItems: 'center',
    justifyContent: 'center',
  },
  recordButtonActive: {
    backgroundColor: '#FF3B30',
  },
  micIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  stopIcon: {
    width: 22,
    height: 22,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
  },
  recordLabel: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.textMuted,
  },

  // Saved recordings
  savedSection: {
    gap: spacing.sm,
    marginTop: spacing.sm,
  },
  savedTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textMuted,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  memoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: spacing.md,
    gap: spacing.xs,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 1,
  },
  memoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  memoDate: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.text,
  },
  memoMeta: {
    flexDirection: 'row',
    gap: spacing.sm,
    flexWrap: 'wrap',
  },
  memoTag: {
    fontSize: 11,
    fontWeight: '400',
    color: colors.textMuted,
    backgroundColor: '#F2F2F2',
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 999,
    overflow: 'hidden',
  },
  progressTrack: {
    height: 2,
    backgroundColor: '#EBEBEB',
    borderRadius: 1,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.text,
    borderRadius: 1,
  },
  playButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    marginTop: 2,
  },
  playLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.text,
  },
});
