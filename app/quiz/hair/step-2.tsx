import colors from '@/src/styles/colors';
import { fonts } from '@/src/styles/fonts';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const OPTIONS = [
  { 
    id: 'fino', 
    label: 'Fino',
    description: 'Leve, sem muito volume, embaraça fácil'
  },
  { 
    id: 'medio', 
    label: 'Médio',
    description: 'Equilibrado, bom volume'
  },
  { 
    id: 'grosso', 
    label: 'Grosso',
    description: 'Pesado, resistente e volumoso'
  },
];

export default function HairQuizStep2() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);

  const handleNext = () => {
    if (selected) {
      router.push('./step-3');
    }
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerRow}>
          <Text style={styles.headerTitle}>Entendendo a espessura</Text>
          <Text style={styles.headerStep}>2/5 </Text>
        </View>
        <View style={styles.progressBg}>
          <View style={[styles.progressFill, { width: '40%' }]} />
        </View>

        <View style={styles.questionBox}>
          <Text style={styles.questionText}>Qual a espessura do seu cabelo?</Text>
        </View>

        <View style={styles.optionsList}>
          {OPTIONS.map((option) => (
            <Pressable
              key={option.id}
              style={[styles.optionCard, selected === option.id && styles.optionCardSelected]}
              onPress={() => setSelected(option.id)}
            >
              <View style={styles.optionContent}>
                <Text style={[styles.optionLabel, selected === option.id && styles.optionLabelSelected]}>
                  {option.label}
                </Text>
                <Text style={[styles.optionDescription, selected === option.id && styles.optionDescriptionSelected]}>
                  {option.description}
                </Text>
              </View>
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
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  headerTitle: { color: colors.primary, fontWeight: '700', fontSize: 18, fontFamily: fonts.bold },
  headerStep: { color: colors.primary, fontSize: 16, fontFamily: fonts.regular },
  progressBg: { height: 6, backgroundColor: '#FFE4EB', borderRadius: 6, marginTop: 8 },
  progressFill: { height: '100%', backgroundColor: colors.primary, borderRadius: 6 },
  questionBox: { marginTop: 24, padding: 24, backgroundColor: colors.primary, borderRadius: 16 },
  questionText: { color: 'white', textAlign: 'center', fontWeight: '700', fontSize: 18, fontFamily: fonts.bold },
  optionsList: { marginTop: 32, gap: 16, marginBottom: 40 },
  optionCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#FFB3C1',
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  optionCardSelected: { 
    backgroundColor: '#FFE4EB', 
    borderColor: colors.primary,
  },
  optionContent: {
    alignItems: 'center',
  },
  optionLabel: { 
    fontSize: 18, 
    fontWeight: '700', 
    color: '#333',
    marginBottom: 4,
    textAlign: 'center',
    fontFamily: fonts.bold,
  },
  optionLabelSelected: { 
    color: colors.primary,
  },
  optionDescription: { 
    fontSize: 14, 
    color: '#666',
    lineHeight: 18,
    textAlign: 'center',
    fontFamily: fonts.regular,
  },
  optionDescriptionSelected: { 
    color: '#8B4F6B',
  },
  buttonRow: { flexDirection: 'row', gap: 12, paddingHorizontal: 0 },
  backButton: { 
    flex: 1,
    backgroundColor: 'transparent', 
    borderRadius: 24, 
    paddingVertical: 16, 
    alignItems: 'center',
    borderWidth: 2,
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
