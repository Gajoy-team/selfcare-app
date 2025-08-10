import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, ViewStyle } from 'react-native';

export type GreetingCardProps = {
  title: string;
  subtitle?: string;
  style?: ViewStyle;
};

export default function GreetingCard({ title, subtitle, style }: GreetingCardProps) {
  return (
    <LinearGradient
      colors={["#FF5F86", "#FF92A9"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.card, style]}
    >
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 20,
    shadowColor: '#FF92A9',
    shadowOpacity: 0.35,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 18,
    fontWeight: '500',
  },
});
