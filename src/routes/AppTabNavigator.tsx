import React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {FavoritesScreen, HomeScreen, SearchScreen} from '@screens';

import {AppTabBar} from './AppTabBar';

export type AppTabBottomTabParamList = {
  HomeScreen: undefined;
  SearchScreen: undefined;
  FavoritesScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabBottomTabParamList>();

export function AppTabNavigator() {
  function tabBar(props: BottomTabBarProps) {
    return <AppTabBar {...props} />;
  }

  return (
    <Tab.Navigator screenOptions={{headerShown: false}} tabBar={tabBar}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="FavoritesScreen" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}
