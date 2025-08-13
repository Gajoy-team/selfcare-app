import colors from '@/src/styles/colors';
import { fonts } from '@/src/styles/fonts';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const PRODUCTS = [
  { id: 'shampoo', label: 'Shampoo' },
  { id: 'condicionador', label: 'Condicionador' },
  { id: 'mascara', label: 'Máscara de hidratação' },
  { id: 'leave-in', label: 'Leave-in' },
  { id: 'oleo', label: 'Óleo capilar' },
  { id: 'finalizador', label: 'Finalizador (mousse, gel)' },
  { id: 'protetor', label: 'Protetor térmico' },
  { id: 'outros', label: 'Outros' },
];

export default function HairQuizStep4() {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>([]);

  const toggleProduct = (productId: string) => {
    setSelected(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleNext = () => {
    if (selected.length > 0) {
      router.push('./step-5');
    }
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerRow}>
          <Text style={styles.headerTitle}>Produtos Utilizados</Text>
          <Text style={styles.headerStep}>4/5</Text>
        </View>
        <View style={styles.progressBg}>
          <View style={[styles.progressFill, { width: '80%' }]} />
        </View>

        <View style={styles.questionBox}>
          <Text style={styles.questionText}>Quais produtos você usa atualmente? (múltipla escolha)</Text>
        </View>

        <View style={styles.optionsList}>
          {PRODUCTS.map((product) => (
            <Pressable
              key={product.id}
              style={[styles.optionCard, selected.includes(product.id) && styles.optionCardSelected]}
              onPress={() => toggleProduct(product.id)}
            >
              <Text style={[styles.optionText, selected.includes(product.id) && styles.optionTextSelected]}>
                {product.label}
              </Text>
              {selected.includes(product.id) && <Text style={styles.checkmark}>✓</Text>}
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
            onPress={handleNext}
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
