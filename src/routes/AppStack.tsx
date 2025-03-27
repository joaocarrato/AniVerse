import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {DetailsScreen, HomeScreen} from '@screens';

export type AppStackParamList = {
  HomeScreen: undefined;
  DetailsScreen: {
    id: number;
  };
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, fullScreenGestureEnabled: true}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
