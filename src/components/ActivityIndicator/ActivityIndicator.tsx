import React from 'react';
import {
  ActivityIndicatorProps,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native';

import {useAppTheme} from '@hooks';
import {ThemeColors} from '@theme';

interface Props extends ActivityIndicatorProps {
  color?: ThemeColors;
  size?: number;
}

export function ActivityIndicator({
  color = 'primary',
  size = 20,
  ...rest
}: Props) {
  const {colors} = useAppTheme();
  return <RNActivityIndicator size={size} color={colors[color]} {...rest} />;
}
