import colors from '@/src/styles/colors';
import { fonts } from '@/src/styles/fonts';
import React from 'react';
import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';

interface OptionCardProps {
  id: string;
  label: string;
  description?: string;
  image?: ImageSourcePropType;
  isSelected: boolean;
  onPress: (id: string) => void;
  variant?: 'auto' | 'text' | 'image' | 'pill';
  disabled?: boolean;
}

export default function OptionCard({
  id,
  label,
  description,
  image,
  isSelected,
  onPress,
  variant = 'auto',
  disabled,
}: OptionCardProps) {
  const effectiveVariant = variant === 'auto' ? (image ? 'image' : 'text') : variant;
  const baseStyles: ViewStyle[] = [styles.card as ViewStyle];
  if (effectiveVariant === 'image') baseStyles.push(styles.imageCard);
  if (effectiveVariant === 'text') baseStyles.push(styles.textCard);
  if (effectiveVariant === 'pill') baseStyles.push(styles.pillCard);
  if (isSelected) {
    if (effectiveVariant === 'image') baseStyles.push(styles.imageCardSelected);
    if (effectiveVariant === 'text') baseStyles.push(styles.textCardSelected);
    if (effectiveVariant === 'pill') baseStyles.push(styles.pillCardSelected);
  }

  return (
    <Pressable
      style={baseStyles}
      onPress={() => !disabled && onPress(id)}
      disabled={disabled}
    >
      {effectiveVariant === 'image' && image && (
        <Image source={image} style={styles.cardImage} resizeMode="cover" />
      )}
      <View
        style={
          effectiveVariant === 'image'
            ? styles.imageLabelContainer
            : effectiveVariant === 'pill'
            ? styles.pillLabelContainer
            : styles.textLabelContainer
        }
      >
        <Text
          style={[
            effectiveVariant === 'image'
              ? styles.imageCardLabel
              : effectiveVariant === 'pill'
              ? styles.pillCardLabel
              : styles.textCardLabel,
            isSelected &&
              (effectiveVariant === 'image'
                ? styles.imageCardLabelSelected
                : effectiveVariant === 'pill'
                ? styles.pillCardLabelSelected
                : styles.textCardLabelSelected),
            disabled && styles.disabledText,
          ]}
        >
          {label}
        </Text>
        {description && effectiveVariant !== 'pill' && (
          <Text
            style={[
              styles.textCardDescription,
              isSelected && styles.textCardDescriptionSelected,
              disabled && styles.disabledText,
            ]}
          >
            {description}
          </Text>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 14,
    borderWidth: 1.5,
    backgroundColor: 'white',
    alignItems: 'center',
    overflow: 'hidden',
    height: 100
  },
  imageCard: {
    width: '48%',
    borderColor: '#FFB3C1',
  },
  imageCardSelected: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
  cardImage: {
    width: '100%',
    height: 220,
  },
  imageLabelContainer: {
    paddingVertical: 10,
  },
  imageCardLabel: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#FFB3C1',
    color: '#9a5171',
    fontWeight: '600',
    fontFamily: fonts.semiBold,
  },
  imageCardLabelSelected: {
    borderColor: colors.primary,
    color: colors.primary,
  },
  textCard: {
    width: '100%',
    borderColor: '#FFB3C1',
    padding: 16,
  },
  textCardSelected: {
    borderColor: colors.primary,
    borderWidth: 2,
    backgroundColor: '#FFF0F3',
  },
  textLabelContainer: {
    alignItems: 'center',
  },
  textCardLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#9a5171',
    fontFamily: fonts.semiBold,
    textAlign: 'center',
    marginBottom: 4,
  },
  textCardLabelSelected: {
    color: colors.primary,
  },
  textCardDescription: {
    fontSize: 14,
    color: '#666',
    fontFamily: fonts.regular,
    textAlign: 'center',
  },
  textCardDescriptionSelected: {
    color: colors.primary,
  },
  pillCard: {
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderColor: '#FFB3C1',
    borderWidth: 1.5,
    borderRadius: 16,
    backgroundColor: 'white',
    flexBasis: '48%',
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pillCardSelected: {
    borderColor: colors.primary,
    borderWidth: 2,
    backgroundColor: '#FFE4EB',
  },
  pillLabelContainer: { alignItems: 'center' },
  pillCardLabel: {
    fontSize: 14,
    fontFamily: fonts.semiBold,
    color: '#9a5171',
    textAlign: 'center',
    lineHeight: 18,
  },
  pillCardLabelSelected: { color: colors.primary },
  disabledText: { opacity: 0.4 },
});
