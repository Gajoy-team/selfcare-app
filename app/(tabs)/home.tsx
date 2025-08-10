import ActionButton from '@/src/components/ActionButton';
import GreetingCard from '@/src/components/GreetingCard';
import SectionCard from '@/src/components/SectionCard';
import SectionHeader from '@/src/components/SectionHeader';
import TaskItem from '@/src/components/TaskItem';
import colors from '@/src/styles/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Smile } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container} style={{ backgroundColor: colors.background }}>
      <GreetingCard
        title="Oi Ju!"
        subtitle="Seu bem-estar é prioridade, não luxo."
        style={styles.card}
      />

      <SectionCard>
        <SectionHeader title="Tarefas de Hoje" subtitle="Pequenos passos para um grande progresso" actionLabel="ver mais" />
        <View style={{ height: 12 }} />
        <TaskItem label="Passar protetor solar" />
        <View style={{ height: 10 }} />
        <TaskItem label="Lavar rosto (manhã)" />
        <View style={{ height: 10 }} />
        <TaskItem label="Hidratação nas pontas" />
      </SectionCard>

      <View style={styles.actionsRow}>
        <ActionButton
          icon={<MaterialCommunityIcons name="hair-dryer-outline" color={colors.primary} size={24} />}
          label="Rotina Capilar"
        />
        <View style={{ width: 12 }} />
        <ActionButton icon={<Smile color={colors.primary} size={24} />} label="Registrar Humor" />
      </View>

      <SectionCard>
        <SectionHeader title="Progresso da Semana" subtitle="Veja como você está indo" />
        <View style={{ height: 16 }} />
        <View style={styles.progressRow}>
          <Text style={styles.progressLabel}>Humor Bom</Text>
          <Text style={styles.progressValue}>3.8/5</Text>
        </View>
        <View style={styles.progressBarBg}>
          <View style={[styles.progressBarFill, { width: '76%' }]} />
        </View>

        <View style={{ height: 12 }} />
        <View style={styles.progressRow}>
          <Text style={styles.progressLabel}>Tarefas Cumpridas</Text>
          <Text style={styles.progressValue}>3.8/5</Text>
        </View>
        <View style={styles.progressBarBg}>
          <View style={[styles.progressBarFill, { width: '76%' }]} />
        </View>
      </SectionCard>
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
  actionsRow: { flexDirection: 'row' },
  progressRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  progressLabel: { fontSize: 14, color: colors.text },
  progressValue: { fontSize: 12, color: colors.primary, fontWeight: '700' },
  progressBarBg: { height: 6, borderRadius: 6, backgroundColor: '#FFE4EB', overflow: 'hidden' },
  progressBarFill: { height: '100%', backgroundColor: colors.primary, borderRadius: 6 },
});