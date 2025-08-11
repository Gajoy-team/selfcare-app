import colors from '@/src/styles/colors';
import React, { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const OPTIONS = [
  { id: '1', label: '1A, 1B, 1C', image: require('@/assets/images/quiz/step-01-image.png') },
  { id: '2', label: '2A, 2B, 2C', image: require('@/assets/images/quiz/step-02-image.png') },
  { id: '3', label: '3A, 3B, 3C', image: require('@/assets/images/quiz/step-03-image.png') },
  { id: '4', label: '4A, 4B, 4C', image: require('@/assets/images/quiz/step-04-image.png') },
];

export default function HairQuizStep1() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>Entendendo Seu Fio</Text>
        <Text style={styles.headerStep}>1/5</Text>
      </View>
      <View style={styles.progressBg}>
        <View style={[styles.progressFill, { width: '20%' }]} />
      </View>

      <View style={styles.questionBox}>
        <Text style={styles.questionText}>Qual é a curvatura do seu fio?</Text>
      </View>

      <View style={styles.grid}>
        {OPTIONS.map((o) => (
          <Pressable key={o.id} style={[styles.card, selected === o.id && styles.cardSelected]} onPress={() => setSelected(o.id)}>
            <Image source={o.image} style={styles.cardImage} resizeMode="cover" />
            <Text style={[styles.cardLabel, selected === o.id && styles.cardLabelSelected]}>{o.label}</Text>
          </Pressable>
        ))}
      </View>

      <Pressable style={[styles.cta, !selected && { opacity: 0.4 }]} disabled={!selected}>
        <Text style={styles.ctaText}>Próximo</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, paddingBottom: 32 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  headerTitle: { color: colors.primary, fontWeight: '700' },
  headerStep: { color: colors.primary },
  progressBg: { height: 6, backgroundColor: '#FFE4EB', borderRadius: 6, marginTop: 8 },
  progressFill: { height: '100%', backgroundColor: colors.primary, borderRadius: 6 },
  questionBox: { marginTop: 16, padding: 40, backgroundColor: '#FF9BB0', borderRadius: 12 },
  questionText: { color: 'white', textAlign: 'center', fontWeight: '700', fontSize: 16, fontFamily: "Poppins_400Regular" },
  grid: { marginTop: 16, flexDirection: 'row', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between' },
  card: { width: '48%', backgroundColor: 'white', borderRadius: 14, borderWidth: 1.5, borderColor: '#FFB3C1', overflow: 'hidden', alignItems: 'center' },
  cardSelected: { borderColor: colors.primary, borderWidth: 2 },
  cardImage: { width: '100%', height: 220 },
  cardLabel: { marginVertical: 10, paddingHorizontal: 10, paddingVertical: 6, borderRadius: 16, borderWidth: 1, borderColor: '#FFB3C1', color: '#9a5171', fontWeight: '600' },
  cardLabelSelected: { borderColor: colors.primary, color: colors.primary },
  cta: { marginTop: 24, backgroundColor: colors.primary, borderRadius: 24, paddingVertical: 16, alignItems: 'center' },
  ctaText: { color: 'white', fontWeight: '700' },
});
