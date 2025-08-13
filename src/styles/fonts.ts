import { StyleSheet } from 'react-native';

// Estilos globais com fonte padrão
export const globalStyles = StyleSheet.create({
  defaultText: {
    fontFamily: 'Poppins_400Regular',
  },
  semiBoldText: {
    fontFamily: 'Poppins_600SemiBold',
  },
  boldText: {
    fontFamily: 'Poppins_700Bold',
  },
});

// Função para criar estilos com fonte padrão
export const createTextStyle = (style: any) => ({
  fontFamily: 'Poppins_400Regular',
  ...style,
});

// Constantes de fontes para uso consistente
export const fonts = {
  regular: 'Poppins_400Regular',
  semiBold: 'Poppins_600SemiBold',
  bold: 'Poppins_700Bold',
} as const;
