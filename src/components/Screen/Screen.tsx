import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {useAppSafeArea, useAppTheme} from '@hooks';

import {Box, BoxProps} from '../Box/Box';
import {IconProps} from '../Icon/Icon';

import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';
import {ScreenHeader} from './components/ScreenHeader';

export interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  title?: string;
  iconName?: IconProps['name'];
  scrollable?: boolean;
}

export function Screen({
  children,
  style,
  canGoBack,
  scrollable,
  title,
  iconName,
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  const {colors} = useAppTheme();
  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box px="s24" style={[{paddingTop: top, paddingBottom: bottom}, style]}>
          <ScreenHeader
            canGoBack={canGoBack}
            title={title}
            iconName={iconName}
          />
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
