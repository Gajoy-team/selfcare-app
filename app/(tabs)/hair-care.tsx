import IntroQuizCard from '@/src/components/IntroQuizCard';
import colors from '@/src/styles/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HairCareScreen() {
  const [showIntro, setShowIntro] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const flag = await AsyncStorage.getItem('haircare_intro_done');
      setShowIntro(flag ? false : true);
    })();
  }, []);

  const handleStartQuiz = async () => {
    await AsyncStorage.setItem('haircare_intro_done', '1');
    setShowIntro(false);
    router.push('/quiz/hair');
  };

  if (showIntro === null) {
    return null; // or a loading placeholder
  }

  if (showIntro) {
    return <IntroQuizCard onStart={handleStartQuiz} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rotina Capilar</Text>
      <Text style={styles.subtitle}>Configure sua rotina diária de cuidados.</Text>
  <Pressable style={styles.cta} onPress={() => router.push('/quiz/hair')}>
        <Text style={styles.ctaText}>Responder Quiz</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 24 },
  title: { fontSize: 22, fontWeight: '700' },
  subtitle: { marginTop: 6, color: '#666' },
  cta: {
    marginTop: 20,
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
  },
  ctaText: { color: '#fff', fontWeight: '700' },
});
