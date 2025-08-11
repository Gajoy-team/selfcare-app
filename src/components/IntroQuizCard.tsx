import colors from '@/src/styles/colors';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';

export default function IntroQuizCard({
  onStart,
  style,
}: {
  onStart?: () => void;
  style?: ViewStyle;
}) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>Vamos criar a rotina
capilar perfeita para você!</Text>
      <Text style={styles.subtitle}>
        Para começar, precisamos conhecer mais
        sobre seu cabelo.
      </Text>
      <Image source={require('@/assets/images/quiz/cover.png')} style={styles.image} resizeMode="contain" />
      <Pressable onPress={onStart} style={({ pressed }) => [styles.cta, pressed && { opacity: 0.9 }] }>
        <Text style={styles.ctaText}>Vamos lá</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: '#FFF7F9',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    color: '#4A4A4A',
    fontWeight: '800',
  },
  subtitle: {
    marginTop: 10,
    textAlign: 'center',
    color: '#8A8A8A',
  },
  image: {
    width: '90%',
    height: 500,
    marginTop: 24,
  },
  cta: {
    marginTop: 24,
    alignSelf: 'stretch',
    backgroundColor: colors.primary,
    borderRadius: 22,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.primary,
    shadowOpacity: 0.3,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
  ctaText: {
    color: 'white',
    fontWeight: '700',
  },
});
