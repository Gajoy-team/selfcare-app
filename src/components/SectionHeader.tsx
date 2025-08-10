import colors from '@/src/styles/colors';
import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';

export default function SectionHeader({ title, subtitle, actionLabel, onPress, style, leftIcon, bottomAction = false }: {
  title: string;
  subtitle?: string;
  actionLabel?: string;
  onPress?: () => void;
  style?: ViewStyle;
  leftIcon?: React.ReactNode;
  bottomAction?: boolean;
}) {
  if (bottomAction) {
    return (
      <View style={[style]}> 
        <View style={styles.rowLeft}>
          {leftIcon ? <View style={{ marginRight: 10 }}>{leftIcon}</View> : null}
          <View>
            <Text style={styles.title}>{title}</Text>
            {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
          </View>
        </View>
        {actionLabel ? (
          <Text onPress={onPress} style={[styles.action, { alignSelf: 'flex-end', marginTop: 12 }]} accessibilityRole="button">
            {actionLabel}
          </Text>
        ) : null}
      </View>
    );
  }

  return (
    <View style={[styles.container, style]}>
      <View style={styles.rowLeft}>
        {leftIcon ? <View style={{ marginRight: 10 }}>{leftIcon}</View> : null}
        <View>
          <Text style={styles.title}>{title}</Text>
          {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        </View>
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
  rowLeft: { flexDirection: 'row', alignItems: 'center' },
  title: { fontSize: 16, color: colors.text, fontFamily: "Poppins_600SemiBold" },
  subtitle: { fontSize: 12, color: colors.textMuted, marginTop: 2, fontFamily: "Poppins_400Regular" },
  action: { fontSize: 12, color: colors.primary, fontWeight: '600' },
});
