import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {
  backgroundColor,
  BackgroundColorProps,
  backgroundColorShorthand,
  BackgroundColorShorthandProps,
  border,
  BorderProps,
  createBox,
  createRestyleComponent,
  layout,
  LayoutProps,
  spacing,
  SpacingProps,
  spacingShorthand,
  SpacingShorthandProps,
} from '@shopify/restyle';

import {Theme} from '@theme';

export const Box = createBox<Theme>();
export type BoxProps = React.ComponentProps<typeof Box>;

type RestyleProps = BackgroundColorProps<Theme> &
  BackgroundColorShorthandProps<Theme> &
  BorderProps<Theme> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  LayoutProps<Theme>;

export type TouchableBoxProps = TouchableOpacityProps & RestyleProps;

export const TouchableBox = createRestyleComponent<TouchableBoxProps, Theme>(
  [
    backgroundColor,
    backgroundColorShorthand,
    border,
    spacing,
    spacingShorthand,
    layout,
  ],
  TouchableOpacity,
);
