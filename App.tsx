if (__DEV__) {
  require('./ReactotronConfig');
}

import React from 'react';

import {ToastProvider} from '@services';
import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';
import {Routes} from '@routes';
import {theme} from '@theme';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <ToastProvider>
            <Routes />
            <Toast />
          </ToastProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

export default App;
