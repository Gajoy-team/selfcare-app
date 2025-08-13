import colors from '@/src/styles/colors';
import { fonts } from '@/src/styles/fonts';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text } from 'react-native';

export default function HairQuizResult() {
  const router = useRouter();

  const handleFinish = () => {
    router.push('/(tabs)/hair-care');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Pronto!</Text>
      <Text style={styles.subtitle}>Agora você já pode acessar a sua rotina capilar!</Text>
      <Image source={require('@/assets/images/quiz/end-quiz.png')} style={styles.image} resizeMode="contain" />
      <Pressable style={styles.cta} onPress={handleFinish}>
        <Text style={styles.ctaText}>Acessar minha rotina</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 24, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 26, fontWeight: '700', color: colors.primary, fontFamily: fonts.bold, marginBottom: 12 },
  subtitle: { fontSize: 14, color: '#666', fontFamily: fonts.regular, textAlign: 'center', marginBottom: 32, lineHeight: 20 },
  image: { width: '100%', height: 360, marginBottom: 48 },
  cta: { backgroundColor: colors.primary, borderRadius: 28, paddingVertical: 16, paddingHorizontal: 32, alignSelf: 'stretch', alignItems: 'center' },
  ctaText: { color: 'white', fontWeight: '700', fontSize: 16, fontFamily: fonts.bold },
});
