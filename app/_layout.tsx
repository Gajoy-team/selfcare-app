import { Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';
import * as NavigationBar from 'expo-navigation-bar';
import { Slot, SplashScreen } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Platform } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Ensure Android navigation bar buttons are always visible
  useEffect(() => {
    if (Platform.OS !== 'android') return;
    (async () => {
      try {
        await NavigationBar.setBackgroundColorAsync('#FFE8EE'); // soft pink, not white
        await NavigationBar.setButtonStyleAsync('dark'); // dark icons for good contrast
        await NavigationBar.setVisibilityAsync('visible');
        // Keep content inset so the bar doesn't overlap
        await NavigationBar.setBehaviorAsync('inset-swipe');
      } catch {}
    })();
  }, []);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" translucent={false} backgroundColor="transparent" />
      <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
        <Slot />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}