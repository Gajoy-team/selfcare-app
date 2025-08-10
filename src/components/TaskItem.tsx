import colors from '@/src/styles/colors';
import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';

export default function TaskItem({ label, done = false, style }: { label: string; done?: boolean; style?: ViewStyle }) {
  return (
    <View style={[styles.row, style]}>
      <View style={[styles.checkbox, done && styles.checkboxDone]} />
      <Text style={[styles.label, done && styles.labelDone]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: colors.border,
    backgroundColor: 'transparent',
  },
  checkboxDone: {
    borderColor: colors.primary,
    backgroundColor: '#ffe4eb',
  },
  label: { color: colors.text, fontSize: 14 },
  labelDone: { color: colors.textMuted, textDecorationLine: 'line-through' },
});
