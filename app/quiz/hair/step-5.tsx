import OptionCard from '@/src/components/quiz/OptionCard';
import QuestionBox from '@/src/components/quiz/QuestionBox';
import QuizHeader from '@/src/components/quiz/QuizHeader';
import QuizProgressBar from '@/src/components/quiz/QuizProgressBar';
import colors from '@/src/styles/colors';
import { fonts } from '@/src/styles/fonts';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const GOALS = [
  { id: 'crescimento', label: 'Crescimento' },
  { id: 'frizz', label: 'Controle de Frizz' },
  { id: 'queda', label: 'Redução de Queda' },
  { id: 'reparacao', label: 'Reparação de Danos\n(química, calor)' },
  { id: 'definicao', label: 'Definição de Cachos/\nOndas' },
  { id: 'volume', label: 'Aumento de Volume' },
  { id: 'oleosidade', label: 'Controle de Oleosidade' },
  { id: 'cor', label: 'Proteção da Cor' },
];

const MAX_SELECTION = 3;

export default function HairQuizStep5() {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) => {
    setSelected(prev => {
      if (prev.includes(id)) return prev.filter(x => x !== id);
      if (prev.length >= MAX_SELECTION) return prev;
      return [...prev, id];
    });
  };

  const handleNext = () => {
    if (selected.length > 0) router.push('./result');
  };
  const handleBack = () => router.back();

  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <QuizHeader title="Objetivos e Danos" currentStep={5} totalSteps={5} />
        <QuizProgressBar currentStep={5} totalSteps={5} />
        <QuestionBox text="Quais são seus principais objetivos? (Escolha até 3)" />
        <View style={styles.pillGrid}>
          {GOALS.map(g => (
            <OptionCard
              key={g.id}
              id={g.id}
              label={g.label}
              isSelected={selected.includes(g.id)}
              onPress={toggle}
              variant="pill"
              disabled={!selected.includes(g.id) && selected.length >= MAX_SELECTION}
            />
          ))}
        </View>
        <View style={styles.buttonRow}>
          <Pressable style={styles.backButton} onPress={handleBack}>
            <Text style={styles.backButtonText}>Voltar</Text>
          </Pressable>
          <Pressable
            style={[styles.cta, selected.length === 0 && { opacity: 0.4 }]} disabled={selected.length === 0} onPress={handleNext}
          >
            <Text style={styles.ctaText}>Próximo</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
  container: { padding: 16, paddingBottom: 24 },
  pillGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 32,
  },
  buttonRow: { flexDirection: 'row', gap: 12, paddingHorizontal: 0 },
  backButton: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 24,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: colors.primary,
  },
  backButtonText: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: 16,
    fontFamily: fonts.semiBold,
  },
  cta: {
    flex: 1,
    backgroundColor: colors.primary,
    borderRadius: 24,
    paddingVertical: 16,
    alignItems: 'center',
  },
  ctaText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    fontFamily: fonts.bold,
  },
});
