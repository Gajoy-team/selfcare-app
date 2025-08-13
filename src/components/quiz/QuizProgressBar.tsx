import colors from '@/src/styles/colors';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface QuizProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function QuizProgressBar({ currentStep, totalSteps }: QuizProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <View style={styles.progressBg}>
      <View style={[styles.progressFill, { width: `${progress}%` }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  progressBg: { 
    height: 6, 
    backgroundColor: '#FFE4EB', 
    borderRadius: 6, 
    marginTop: 8 
  },
  progressFill: { 
    height: '100%', 
    backgroundColor: colors.primary, 
    borderRadius: 6 
  },
});
