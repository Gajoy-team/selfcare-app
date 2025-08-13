import { fonts } from '@/src/styles/fonts';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface QuestionBoxProps {
  text: string;
}

export default function QuestionBox({ text }: QuestionBoxProps) {
  return (
    <View style={styles.questionBox}>
      <Text style={styles.questionText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  questionBox: {
    marginTop: 24,
    backgroundColor: '#FF9BB0',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
  },
  questionText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18,
    fontFamily: fonts.bold,
  },
});
