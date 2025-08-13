import QuizHeader from '@/src/components/quiz/QuizHeader';
import QuizProgressBar from '@/src/components/quiz/QuizProgressBar';
import colors from '@/src/styles/colors';
import { fonts } from '@/src/styles/fonts';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const OPTIONS = [
  { 
    id: 'baixa', 
    label: 'Baixa Porosidade',
    description: "Baixa Porosidade: O fio boia. (Dificuldade de absorver umidade)"
  },
  { 
    id: 'media', 
    label: 'Média Porosidade',
    description: 'O fio fica no meio do copo. (Absorção ideal)'
  },
  { 
    id: 'alta', 
    label: 'Alta Porosidade',
    description: 'O fio afunda rapidamente. (Absorve e perde umidade muito fácil, tende a ter frizz)'
  },
];

export default function HairQuizStep3() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);

  const handleNext = () => {
    if (selected) {
      router.push('./step-4');
    }
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <QuizHeader title="Porosidade" currentStep={3} totalSteps={5} />
        <QuizProgressBar currentStep={3} totalSteps={5} />

        <View style={styles.questionBox}>
          <Text style={styles.questionText}>Seu cabelo absorve água e produtos facilmente?</Text>
        </View>

        <Text style={styles.description}>
          Faça o teste do copo d'água: pegue um fio limpo e seco e coloque em um copo com água. O que acontece?
        </Text>

        <View style={styles.optionsList}>
          {OPTIONS.map((option) => (
            <Pressable
              key={option.id}
              style={[styles.optionCard, selected === option.id && styles.optionCardSelected]}
              onPress={() => setSelected(option.id)}
            >
              <Text style={[styles.optionLabel, selected === option.id && styles.optionLabelSelected]}>
                {option.label}
              </Text>
              <Text style={[styles.optionDescription, selected === option.id && styles.optionDescriptionSelected]}>
                {option.description}
              </Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.buttonRow}>
          <Pressable style={styles.backButton} onPress={handleBack}>
            <Text style={styles.backButtonText}>Voltar</Text>
          </Pressable>
          
          <Pressable style={[styles.cta, !selected && { opacity: 0.4 }]} disabled={!selected} onPress={handleNext}>
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
  questionBox: { 
    marginTop: 24, 
    backgroundColor: '#FF9BB0', 
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
  },
  questionText: { 
    color: 'white', 
    textAlign: 'center', 
    fontWeight: '700', 
    fontSize: 18, 
    fontFamily: fonts.bold 
  },
  description: { 
    fontSize: 14, 
    color: '#666', 
    textAlign: 'center',
    fontFamily: fonts.regular,
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  optionsList: { gap: 12, marginBottom: 32 },
  optionCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#FFB3C1',
    padding: 16,
  },
  optionCardSelected: { borderColor: colors.primary, borderWidth: 2, backgroundColor: '#FFF0F3' },
  optionLabel: { 
    fontSize: 16, 
    fontWeight: '600', 
    color: '#9a5171', 
    fontFamily: fonts.semiBold,
    textAlign: 'center',
    marginBottom: 4,
  },
  optionLabelSelected: { color: colors.primary },
  optionDescription: { 
    fontSize: 14, 
    color: '#666', 
    fontFamily: fonts.regular,
    textAlign: 'center',
  },
  optionDescriptionSelected: { color: colors.primary },
  buttonRow: { flexDirection: 'row', gap: 12, paddingHorizontal: 16 },
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
