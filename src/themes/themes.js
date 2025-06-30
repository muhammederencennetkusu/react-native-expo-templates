import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#007aff',
    background: '#fff',
    text: '#000',
  },
};

export const DarkModeTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#00ccff',
    background: '#000',
    text: '#fff',
  },
};
