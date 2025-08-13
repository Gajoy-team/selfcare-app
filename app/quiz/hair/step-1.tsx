import OptionCard from '@/src/components/quiz/OptionCard';
import QuestionBox from '@/src/components/quiz/QuestionBox';
import QuizHeader from '@/src/components/quiz/QuizHeader';
import QuizProgressBar from '@/src/components/quiz/QuizProgressBar';
import colors from '@/src/styles/colors';
import { fonts } from '@/src/styles/fonts';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const OPTIONS = [
  { id: '1', label: '1A, 1B, 1C', image: require('@/assets/images/quiz/step-01-image.png') },
  { id: '2', label: '2A, 2B, 2C', image: require('@/assets/images/quiz/step-02-image.png') },
  { id: '3', label: '3A, 3B, 3C', image: require('@/assets/images/quiz/step-03-image.png') },
  { id: '4', label: '4A, 4B, 4C', image: require('@/assets/images/quiz/step-04-image.png') },
];

export default function HairQuizStep1() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);

    const handleNext = () => {
    if (selected) {
      router.push('./step-2');
    }
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <QuizHeader title="Entendendo Seu Fio" currentStep={1} totalSteps={5} />
        <QuizProgressBar currentStep={1} totalSteps={5} />

        <QuestionBox text="Qual é a curvatura do seu fio?" />

        <View style={styles.grid}>
          {OPTIONS.map((option) => (
            <OptionCard
              key={option.id}
              id={option.id}
              label={option.label}
              image={option.image}
              isSelected={selected === option.id}
              onPress={setSelected}
            />
          ))}
        </View>

        <View style={styles.buttonContainer}>
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
  grid: { 
    marginTop: 16, 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    gap: 16, 
    justifyContent: 'space-between', 
    marginBottom: 32 
  },
  buttonContainer: { paddingHorizontal: 16 },
  cta: { 
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
