import React from 'react';
import {ScrollView, View} from 'react-native';

interface Props {
  backgroundColor: string;
  children: React.ReactNode;
}

export function ScrollViewContainer({backgroundColor, children}: Props) {
  return (
    <ScrollView
      style={{flex: 1, backgroundColor}}
      keyboardShouldPersistTaps="handled">
      {children}
    </ScrollView>
  );
}

export function ViewContainer({backgroundColor, children}: Props) {
  return <View style={{flex: 1, backgroundColor}}>{children}</View>;
}
