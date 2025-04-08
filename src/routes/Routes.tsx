import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {settingsService} from '@services';

import {AppStack} from './AppStack';

export function Routes() {
  useEffect(() => {
    settingsService.hideSplashScreen();
  }, []);

  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
