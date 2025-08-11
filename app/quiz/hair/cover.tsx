import colors from '@/src/styles/colors';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function HairQuizCover() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vamos criar a rotina{"\n"}capilar perfeita para você!</Text>
      <Text style={styles.subtitle}>Para começar, precisamos conhecer mais sobre seu cabelo.</Text>
      <Image source={require('@/assets/images/quiz/cover.png')} style={styles.image} resizeMode="contain" />
      <Pressable style={styles.cta} onPress={() => router.replace('/quiz/hair/step-1')}>
        <Text style={styles.ctaText}>Iniciar Quiz</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 24, backgroundColor: '#FFF7F9' },
  title: { fontSize: 22, textAlign: 'center', color: '#4A4A4A', fontWeight: '800' },
  subtitle: { marginTop: 10, textAlign: 'center', color: '#8A8A8A' },
  image: { width: '90%', height: 500, marginTop: 24 },
  cta: { marginTop: 24, alignSelf: 'stretch', backgroundColor: colors.primary, borderRadius: 22, paddingVertical: 14, alignItems: 'center' },
  ctaText: { color: 'white', fontWeight: '700' },
});
