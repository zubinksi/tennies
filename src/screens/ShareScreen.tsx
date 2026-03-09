import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Dimensions,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import ViewShot from 'react-native-view-shot';
import { colors, spacing } from '../theme';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const IMAGE_HEIGHT = SCREEN_HEIGHT * 0.72;

export interface NarrativeParts {
  steps: string;
  strideStyle: string;
  balanceStyle: string;
  aboveAvgSteps: string | null;
  nearAvg: boolean;
}

interface ShareScreenProps {
  narrativeParts: NarrativeParts;
  onBack: () => void;
}

export const ShareScreen: React.FC<ShareScreenProps> = ({ narrativeParts, onBack }) => {
  const captureRef = useRef<ViewShot>(null);
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const { steps, strideStyle, balanceStyle, aboveAvgSteps, nearAvg } = narrativeParts;

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission needed', 'Allow photo library access to choose a photo.');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });
    if (!result.canceled) setImageUri(result.assets[0].uri);
  };

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission needed', 'Allow camera access to take a photo.');
      return;
    }
    const result = await ImagePicker.launchCameraAsync({ quality: 1 });
    if (!result.canceled) setImageUri(result.assets[0].uri);
  };

  const handleSave = async () => {
    if (!captureRef.current) return;
    setSaving(true);
    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission needed', 'Allow photo library access to save.');
        return;
      }
      const uri = await (captureRef.current as any).capture();
      await MediaLibrary.saveToLibraryAsync(uri);
      Alert.alert('Saved', 'Image saved to your photo library.');
    } catch (e) {
      Alert.alert('Error', 'Could not save the image.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton} hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {!imageUri ? (
          /* Placeholder picker UI */
          <View style={styles.placeholder}>
            <Text style={styles.placeholderHeading}>Add a photo</Text>
            <Text style={styles.placeholderSub}>Your walk summary will be overlaid on the image.</Text>
            <TouchableOpacity style={styles.pickButton} onPress={takePhoto}>
              <Text style={styles.pickButtonText}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.pickButton, styles.pickButtonSecondary]} onPress={pickImage}>
              <Text style={[styles.pickButtonText, styles.pickButtonTextSecondary]}>Choose from Library</Text>
            </TouchableOpacity>
          </View>
        ) : (
          /* Image + overlay inside ViewShot */
          <ViewShot
            ref={captureRef}
            options={{ format: 'jpg', quality: 0.95 }}
            style={styles.captureArea}
          >
            <Image
              source={{ uri: imageUri }}
              style={StyleSheet.absoluteFill}
              resizeMode="cover"
            />
            {/* Narrative overlay */}
            <View style={styles.narrativeOverlay}>
              <Text style={styles.narrativeText}>
                {'You\'ve taken '}
                <Text style={styles.narrativeBold}>{steps}</Text>
                {' steps today with a '}
                <Text style={styles.narrativeItalic}>{strideStyle}</Text>
                {' stride and '}
                <Text style={styles.narrativeItalic}>{balanceStyle}</Text>
                {' balance.'}
                {aboveAvgSteps
                  ? ` You are ${aboveAvgSteps} steps above your average for the month.`
                  : nearAvg
                  ? ' You are right around your average for the month.'
                  : null}
              </Text>
            </View>
          </ViewShot>
        )}
      </View>

      {/* Bottom actions */}
      {imageUri && (
        <View style={styles.bottomBar}>
          <TouchableOpacity style={styles.changeButton} onPress={() => setImageUri(null)}>
            <Text style={styles.changeButtonText}>Change Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.saveButton, saving && styles.saveButtonDisabled]}
            onPress={handleSave}
            disabled={saving}
          >
            {saving ? (
              <ActivityIndicator color="#FFFFFF" size="small" />
            ) : (
              <Text style={styles.saveButtonText}>Save Image</Text>
            )}
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },

  // Header
  header: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.sm,
    justifyContent: 'center',
  },
  backButton: {
    alignSelf: 'flex-start',
  },
  backArrow: {
    fontSize: 22,
    color: colors.text,
    fontWeight: '400',
  },

  // Main content area
  content: {
    flex: 1,
    paddingHorizontal: spacing.lg,
  },

  // Placeholder (no image selected)
  placeholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.md,
  },
  placeholderHeading: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  placeholderSub: {
    fontSize: 14,
    color: colors.textMuted,
    textAlign: 'center',
    marginBottom: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  pickButton: {
    width: '100%',
    paddingVertical: spacing.md,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: colors.text,
  },
  pickButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  pickButtonSecondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.text,
  },
  pickButtonTextSecondary: {
    color: colors.text,
  },

  // ViewShot / captured area
  captureArea: {
    flex: 1,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#000',
  },

  // Narrative overlay on image
  narrativeOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
  },
  narrativeText: {
    fontSize: 16,
    color: '#FFFFFF',
    lineHeight: 24,
  },
  narrativeBold: {
    fontWeight: '700',
    color: '#FFFFFF',
  },
  narrativeItalic: {
    fontStyle: 'italic',
    color: '#FFFFFF',
  },

  // Bottom bar
  bottomBar: {
    flexDirection: 'row',
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
  },
  changeButton: {
    flex: 1,
    paddingVertical: spacing.md,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.text,
  },
  changeButtonText: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.text,
  },
  saveButton: {
    flex: 2,
    paddingVertical: spacing.md,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: colors.text,
  },
  saveButtonDisabled: {
    opacity: 0.6,
  },
  saveButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
