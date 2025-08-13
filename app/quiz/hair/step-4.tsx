import OptionCard from '@/src/components/quiz/OptionCard';
import QuestionBox from '@/src/components/quiz/QuestionBox';
import QuizHeader from '@/src/components/quiz/QuizHeader';
import QuizProgressBar from '@/src/components/quiz/QuizProgressBar';
import colors from '@/src/styles/colors';
import { fonts } from '@/src/styles/fonts';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const SCALP_OPTIONS = [
  { id: 'oleoso', label: 'Oleoso', description: 'Fica com aspecto sujo em 1-2 dias' },
  { id: 'seco', label: 'Seco', description: 'Repuxa, coça, descama' },
  { id: 'normal', label: 'Normal', description: 'Equilibrado' },
  { id: 'sensivel', label: 'Sensível', description: 'Fica vermelho ou irritado com facilidade' },
  { id: 'caspa', label: 'Com Caspa', description: 'Costuma ter caspas' },
];

export default function HairQuizStep4() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);

  const handleNext = () => {
    if (selected) router.push('./step-5');
  };
  const handleBack = () => router.back();

  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <QuizHeader title="Condição do Couro Cabeludo" currentStep={4} totalSteps={5} />
        <QuizProgressBar currentStep={4} totalSteps={5} />
        <QuestionBox text="Como você descreveria seu couro cabeludo?" />
        <View style={styles.optionsList}>
          {SCALP_OPTIONS.map(o => (
            <OptionCard
              key={o.id}
              id={o.id}
              label={o.label}
              description={o.description}
              isSelected={selected === o.id}
              onPress={setSelected}
              variant="text"
            />
          ))}
        </View>
        <View style={styles.buttonRow}>
          <Pressable style={styles.backButton} onPress={handleBack}>
            <Text style={styles.backButtonText}>Voltar</Text>
          </Pressable>
          <Pressable
            style={[styles.cta, !selected && { opacity: 0.4 }]} disabled={!selected} onPress={handleNext}
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
  optionsList: { gap: 12, marginBottom: 32 },
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
