import React, {useState} from 'react';
import {Navigation} from './routes';
import {ThemeProvider} from 'styled-components/native';
import {lightTheme, darkTheme} from '../themes';
import {Appearance, ColorSchemeName} from 'react-native';

export default function App() {
  const scheme = Appearance.getColorScheme();
  const [colorSheme, setColorScheme] = useState<ColorSchemeName>(scheme);

  Appearance.addChangeListener(scheme => setColorScheme(scheme.colorScheme));

  return (
    <ThemeProvider theme={colorSheme === 'dark' ? darkTheme : lightTheme}>
      <Navigation />
    </ThemeProvider>
  );
}
