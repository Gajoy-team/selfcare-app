import colors from '@/src/styles/colors';
import { fonts } from '@/src/styles/fonts';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const CONCERNS = [
  { id: 'caspa', label: 'Caspa' },
  { id: 'oleosidade', label: 'Oleosidade excessiva' },
  { id: 'ressecamento', label: 'Ressecamento' },
  { id: 'queda', label: 'Queda de cabelo' },
  { id: 'falta-volume', label: 'Falta de volume' },
  { id: 'frizz', label: 'Frizz' },
  { id: 'crescimento', label: 'Crescimento lento' },
  { id: 'nenhuma', label: 'Nenhuma preocupação específica' },
];

export default function HairQuizStep5() {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>([]);

  const toggleConcern = (concernId: string) => {
    setSelected(prev => 
      prev.includes(concernId) 
        ? prev.filter(id => id !== concernId)
        : [...prev, concernId]
    );
  };

  const handleFinish = () => {
    router.push('./result');
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerRow}>
          <Text style={styles.headerTitle}>Preocupações</Text>
          <Text style={styles.headerStep}>5/5</Text>
        </View>
        <View style={styles.progressBg}>
          <View style={[styles.progressFill, { width: '100%' }]} />
        </View>

        <View style={styles.questionBox}>
          <Text style={styles.questionText}>Quais são suas principais preocupações capilares? (múltipla escolha)</Text>
        </View>

        <View style={styles.optionsList}>
          {CONCERNS.map((concern) => (
            <Pressable
              key={concern.id}
              style={[styles.optionCard, selected.includes(concern.id) && styles.optionCardSelected]}
              onPress={() => toggleConcern(concern.id)}
            >
              <Text style={[styles.optionText, selected.includes(concern.id) && styles.optionTextSelected]}>
                {concern.label}
              </Text>
              {selected.includes(concern.id) && <Text style={styles.checkmark}>✓</Text>}
            </Pressable>
          ))}
        </View>

        <View style={styles.buttonRow}>
          <Pressable style={styles.backButton} onPress={handleBack}>
            <Text style={styles.backButtonText}>Voltar</Text>
          </Pressable>
          
          <Pressable 
            style={[styles.cta, selected.length === 0 && { opacity: 0.4 }]} 
            disabled={selected.length === 0} 
            onPress={handleFinish}
          >
            <Text style={styles.ctaText}>Finalizar Quiz</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionCardSelected: { borderColor: colors.primary, borderWidth: 2 },
  optionText: { fontSize: 16, fontWeight: '600', color: '#9a5171', fontFamily: fonts.semiBold },
  optionTextSelected: { color: colors.primary },
  checkmark: { color: colors.primary, fontSize: 18, fontWeight: 'bold', fontFamily: fonts.bold },
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
