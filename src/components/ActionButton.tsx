import colors from '@/src/styles/colors';
import React from 'react';
import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native';

export default function ActionButton({ icon, label, onPress, style }: {
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
  style?: ViewStyle;
}) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.button, style, pressed && { opacity: 0.8 }]}>
      {icon}
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.card,
    borderRadius: 12,
    paddingVertical: 16,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
  label: { marginTop: 8, color: colors.text, fontWeight: '600', fontSize: 16, fontFamily: "Poppins_400Regular"},
});
