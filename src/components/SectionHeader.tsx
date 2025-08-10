import colors from '@/src/styles/colors';
import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';

export default function SectionHeader({ title, subtitle, actionLabel, onPress, style }: {
  title: string;
  subtitle?: string;
  actionLabel?: string;
  onPress?: () => void;
  style?: ViewStyle;
}) {
  return (
    <View style={[styles.container, style]}>
      <View>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      {actionLabel ? (
        <Text onPress={onPress} style={styles.action} accessibilityRole="button">
          {actionLabel}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 16, fontWeight: '700', color: colors.text },
  subtitle: { fontSize: 12, color: colors.textMuted, marginTop: 2 },
  action: { fontSize: 12, color: colors.primary, fontWeight: '600' },
});
