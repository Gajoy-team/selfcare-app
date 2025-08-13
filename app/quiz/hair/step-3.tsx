import colors from '@/src/styles/colors';
import { fonts } from '@/src/styles/fonts';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const OPTIONS = [
  { id: 'diario', label: 'Diariamente' },
  { id: 'dia-sim-nao', label: 'Dia sim, dia não' },
  { id: 'duas-vezes', label: '2x por semana' },
  { id: 'uma-vez', label: '1x por semana' },
  { id: 'menos', label: 'Menos de 1x por semana' },
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
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerRow}>
          <Text style={styles.headerTitle}>Rotina de Lavagem</Text>
          <Text style={styles.headerStep}>3/5</Text>
        </View>
        <View style={styles.progressBg}>
          <View style={[styles.progressFill, { width: '60%' }]} />
        </View>

        <View style={styles.questionBox}>
          <Text style={styles.questionText}>Com que frequência você lava o cabelo?</Text>
        </View>

        <View style={styles.optionsList}>
          {OPTIONS.map((option) => (
            <Pressable
              key={option.id}
              style={[styles.optionCard, selected === option.id && styles.optionCardSelected]}
              onPress={() => setSelected(option.id)}
            >
              <Text style={[styles.optionText, selected === option.id && styles.optionTextSelected]}>
                {option.label}
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
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  headerTitle: { color: colors.primary, fontWeight: '700', fontFamily: fonts.bold },
  headerStep: { color: colors.primary, fontFamily: fonts.regular },
  progressBg: { height: 6, backgroundColor: '#FFE4EB', borderRadius: 6, marginTop: 8 },
  progressFill: { height: '100%', backgroundColor: colors.primary, borderRadius: 6 },
  questionBox: { marginTop: 16, padding: 20, backgroundColor: '#FF9BB0', borderRadius: 12 },
  questionText: { color: 'white', textAlign: 'center', fontWeight: '700', fontSize: 16, fontFamily: fonts.bold },
  optionsList: { marginTop: 20, gap: 12, marginBottom: 32 },
  optionCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#FFB3C1',
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  optionCardSelected: { borderColor: colors.primary, borderWidth: 2 },
  optionText: { fontSize: 16, fontWeight: '600', color: '#9a5171', fontFamily: fonts.semiBold },
  optionTextSelected: { color: colors.primary },
  buttonRow: { flexDirection: 'row', gap: 12, paddingHorizontal: 16 },
  backButton: { 
    flex: 1,
    backgroundColor: '#f8f9fa', 
    borderRadius: 24, 
    paddingVertical: 16, 
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  backButtonText: { 
    color: '#6c757d', 
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
