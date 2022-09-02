import {RFPercentage} from 'react-native-responsive-fontsize';

const sizing = {
  XXXS: RFPercentage(1),
  LXXS: RFPercentage(1.4),
  XXS: RFPercentage(1.5),
  XS: RFPercentage(1.8),
  SM: RFPercentage(2),
  XMD: RFPercentage(2.2),
  MMD: RFPercentage(2.5),
  MD: RFPercentage(3),
  LG: RFPercentage(3.3),
  XLG: RFPercentage(4.6),
  XL: RFPercentage(4),
  BORDER_RADIUS: RFPercentage(1),
};

const lightColors = {
  primary: '#BB86FC',
  secondary: '#03DAC6',
  background: '#F4F4F4',
  foreground: '#FFFFFF',
  secondaryForeground: '#F2F2F2',
  text: '#000000',
  secondaryText: '#898484',
  defaultColor: '#E0E0E0',
  success: '#28A745',
  danger: '#DC3545',
  warning: '#FFC107',
  borderColor: '#00000020',
};

export const lightTheme = {
  colors: lightColors,
  sizing,
};

const darkColors: typeof lightColors = {
  primary: '#BB86FC',
  secondary: '#03DAC6',
  background: '#121212',
  foreground: '#000000',
  secondaryForeground: '#1E1E1E',
  text: '#DBDBDB',
  secondaryText: '#BABABA',
  defaultColor: '#1E1E1E',
  success: '#28A745',
  danger: '#DC3545',
  warning: '#FFC107',
  borderColor: '#FFFFFF20',
};

export const darkTheme: typeof lightTheme = {
  colors: darkColors,
  sizing,
};

export type ColorsThemeType = typeof lightColors;

export type ThemeType = typeof lightTheme;
