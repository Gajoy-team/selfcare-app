import GreetingCard from '@/src/components/GreetingCard';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <GreetingCard
        title="Oi Ju!"
        subtitle="Seu bem-estar é prioridade, não luxo."
        style={styles.card}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingHorizontal: 16,
    paddingBottom: 120,
    gap: 16,
  },
  card: { borderRadius: 16 },
  content: { alignItems: 'center', paddingTop: 16 },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});