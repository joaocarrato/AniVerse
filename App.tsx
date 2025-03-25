import React from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Button, Screen, Text} from '@components';
import {theme} from '@theme';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Screen canGoBack title="Top Hits anime">
          <Text>Olá</Text>

          <Button title="Continuar" />
        </Screen>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
