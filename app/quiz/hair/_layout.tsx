import colors from '@/src/styles/colors';
import { Stack } from 'expo-router';
import React from 'react';

export default function HairQuizLayout() {
  return (
    <Stack screenOptions={{
      headerShown: false,
      contentStyle: { backgroundColor: colors.background },
      presentation: 'card',
    }} />
  );
}
