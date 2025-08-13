import colors from '@/src/styles/colors';
import { fonts } from '@/src/styles/fonts';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HairQuizResult() {
  const router = useRouter();

  const handleFinish = () => {
    router.push('/(tabs)/hair-care');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Pronto!</Text>
        
        <View style={styles.illustrationBox}>
          <Text style={styles.illustrationText}>👩‍🦱</Text>
        </View>
        
        <Text style={styles.subtitle}>
          Agora você já pode ver uma rotina capilar personalizada!
        </Text>
        
        <View style={styles.resultCard}>
          <Text style={styles.resultTitle}>Sua Rotina Personalizada</Text>
          <Text style={styles.resultDescription}>
            Com base nas suas respostas, criamos uma rotina capilar especial para você. 
            Confira suas recomendações personalizadas na tela de Rotina Capilar.
          </Text>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <Pressable style={styles.cta} onPress={handleFinish}>
          <Text style={styles.ctaText}>Ver Minha Rotina</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  title: { 
    fontSize: 28, 
    fontWeight: '700', 
    color: colors.primary,
    marginBottom: 32,
    fontFamily: fonts.bold,
  },
  illustrationBox: {
    width: 120,
    height: 120,
    backgroundColor: '#FFE4EB',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  illustrationText: {
    fontSize: 48,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
    marginBottom: 32,
    paddingHorizontal: 20,
    lineHeight: 24,
    fontFamily: fonts.semiBold,
  },
  resultCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 12,
    textAlign: 'center',
    fontFamily: fonts.bold,
  },
  resultDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
    fontFamily: fonts.regular,
  },
  bottomContainer: {
    paddingTop: 32,
    paddingBottom: 16,
  },
  cta: { 
    backgroundColor: colors.primary, 
    borderRadius: 24, 
    paddingVertical: 16, 
    alignItems: 'center',
    marginHorizontal: 16,
  },
  ctaText: { 
    color: 'white', 
    fontWeight: '700',
    fontSize: 16,
    fontFamily: fonts.bold,
  },
});
