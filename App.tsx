import React from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {
  Button,
  Icon,
  PasswordInput,
  Screen,
  Text,
  TextInput,
} from '@components';
import {theme} from '@theme';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Screen canGoBack title="Top Hits anime">
          <Text>Olá</Text>

          <Button title="Continuar" mb="s24" />

          <TextInput
            label="E-mail"
            placeholder="Digite seu e-mail"
            rightComponent={<Icon name="eyeOff" color="disabledContrast" />}
            boxProps={{mb: 's24'}}
          />

          <PasswordInput label="Senha" />
        </Screen>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
