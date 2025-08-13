import colors from '@/src/styles/colors';
import { fonts } from '@/src/styles/fonts';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface QuizHeaderProps {
  title: string;
  currentStep: number;
  totalSteps: number;
}

export default function QuizHeader({ title, currentStep, totalSteps }: QuizHeaderProps) {
  return (
    <View style={styles.headerRow}>
      <Text style={styles.headerTitle}>{title}</Text>
      <Text style={styles.headerStep}>{`${currentStep}/${totalSteps}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  headerTitle: { 
    fontSize: 18, 
    fontWeight: '700', 
    color: colors.primary, 
    fontFamily: fonts.bold 
  },
  headerStep: { 
    color: colors.primary, 
    fontFamily: fonts.regular 
  },
});
