import React, {useState} from 'react';
import {Navigation} from './routes';
import {ThemeProvider} from 'styled-components/native';
import {lightTheme, darkTheme} from '../themes';
import {Appearance, ColorSchemeName} from 'react-native';
import {ApplicationContextProvider} from '../context';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnMount: true,
    },
  },
});

export default function App() {
  const scheme = Appearance.getColorScheme();
  const [colorSheme, setColorScheme] = useState<ColorSchemeName>(scheme);

  Appearance.addChangeListener(scheme => setColorScheme(scheme.colorScheme));

  return (
    <QueryClientProvider client={queryClient}>
      <ApplicationContextProvider>
        <ThemeProvider theme={colorSheme === 'dark' ? darkTheme : lightTheme}>
          <Navigation />
        </ThemeProvider>
      </ApplicationContextProvider>
    </QueryClientProvider>
  );
}
