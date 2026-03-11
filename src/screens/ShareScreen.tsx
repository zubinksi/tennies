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
  Share,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import { colors, spacing } from '../theme';

// Defensive import — react-native-view-shot uses TurboModuleRegistry.getEnforcing
// which throws at module init if the native module isn't linked. Wrapping in try/catch
// prevents a blank screen crash and gracefully degrades image capture.
let ViewShot: any = null;
try {
  const mod = require('react-native-view-shot');
  ViewShot = mod?.default ?? mod;
} catch (_e) {
  // Native module not available; image capture will be disabled.
}

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

const formatShareDate = (): string => {
  const d = new Date();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  const yyyy = d.getFullYear();
  return `${mm}/${dd}/${yyyy}`;
};

const capitalize = (s: string): string => s.charAt(0).toUpperCase() + s.slice(1);

export const ShareScreen: React.FC<ShareScreenProps> = ({ narrativeParts, onBack }) => {
  const captureRef = useRef<any>(null);
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [sharing, setSharing] = useState(false);

  const { steps, strideStyle, balanceStyle } = narrativeParts;

  const shareDate = formatShareDate();
  const capitalizedStride = capitalize(strideStyle);
  const capitalizedBalance = capitalize(balanceStyle);
  const summaryLine = `${steps} Steps. ${capitalizedStride} Stride. ${capitalizedBalance} Balance.`;

  const shareTextOnly = async () => {
    try {
      await Share.share({
        message: `${shareDate}\n\n${summaryLine}\n\nPowered by Tennies`,
      });
    } catch (e) {
      Alert.alert('Error', 'Could not share.');
    }
  };

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

  const handleShare = async () => {
    if (!captureRef.current) return;
    setSharing(true);
    try {
      const uri = await (captureRef.current as any).capture();
      await Share.share({ url: uri });
    } catch (e) {
      Alert.alert('Error', 'Could not share the image.');
    } finally {
      setSharing(false);
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
            <TouchableOpacity style={[styles.pickButton, styles.pickButtonSecondary]} onPress={shareTextOnly}>
              <Text style={[styles.pickButtonText, styles.pickButtonTextSecondary]}>Share without Photo</Text>
            </TouchableOpacity>
          </View>
        ) : ViewShot ? (
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
            {/* Stats overlay */}
            <View style={styles.narrativeOverlay}>
              <Text style={styles.overlayLine}>{shareDate}</Text>
              <Text style={styles.overlayLine}>{summaryLine}</Text>
              <Text style={styles.overlayPowered}>Powered by Tennies</Text>
            </View>
          </ViewShot>
        ) : (
          /* Fallback when ViewShot native module is not available */
          <View style={[styles.captureArea, { alignItems: 'center', justifyContent: 'center' }]}>
            <Image
              source={{ uri: imageUri }}
              style={StyleSheet.absoluteFill}
              resizeMode="cover"
            />
            <View style={styles.narrativeOverlay}>
              <Text style={styles.overlayLine}>{shareDate}</Text>
              <Text style={styles.overlayLine}>{summaryLine}</Text>
              <Text style={styles.overlayPowered}>Powered by Tennies</Text>
            </View>
          </View>
        )}
      </View>

      {/* Bottom actions */}
      {imageUri && (
        <View style={styles.bottomBar}>
          <TouchableOpacity style={styles.changeButton} onPress={() => setImageUri(null)}>
            <Text style={styles.changeButtonText}>Change Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.shareButton, sharing && styles.shareButtonDisabled]}
            onPress={handleShare}
            disabled={sharing}
          >
            {sharing ? (
              <ActivityIndicator color="#FFFFFF" size="small" />
            ) : (
              <Text style={styles.shareButtonText}>Share Image</Text>
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
    overflow: 'hidden',
    backgroundColor: '#000',
  },

  // Stats overlay on image
  narrativeOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    gap: 4,
  },
  overlayLine: {
    color: '#FF5900',
    fontSize: 18,
    lineHeight: 26,
    fontFamily: 'Menlo',
  },
  overlayLabel: {
    fontWeight: '400',
    color: '#FF5900',
    fontFamily: 'Menlo',
  },
  overlayValue: {
    fontWeight: '700',
    color: '#FF5900',
    fontFamily: 'Menlo',
  },
  overlayPowered: {
    marginTop: 8,
    fontSize: 11,
    color: '#FF5900',
    fontWeight: '500',
    letterSpacing: 0.5,
    fontFamily: 'Menlo',
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
  shareButton: {
    flex: 2,
    paddingVertical: spacing.md,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: colors.text,
  },
  shareButtonDisabled: {
    opacity: 0.6,
  },
  shareButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
