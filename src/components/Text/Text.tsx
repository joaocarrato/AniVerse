import React from 'react';
import {TextStyle} from 'react-native';

import {createText} from '@shopify/restyle';

import {Theme} from '@theme';

const SRText = createText<Theme>();
type SRTextProps = React.ComponentProps<typeof SRText>;

export interface TextProps extends SRTextProps {
  preset?: TextVariants;
  bold?: boolean;
  semiBold?: boolean;
  italic?: boolean;
}

export function Text({
  children,
  preset = 'paragraphMedium',
  bold,
  semiBold,
  italic,
  style,
  ...srTextProps
}: TextProps) {
  const fontFamily = getFontFamily(preset, bold, semiBold, italic);
  return (
    <SRText
      color="textPrimary"
      style={[$fontSizes[preset], {fontFamily}, style]}
      {...srTextProps}>
      {children}
    </SRText>
  );
}

function getFontFamily(
  preset: TextVariants,
  bold?: boolean,
  semiBold?: boolean,
  italic?: boolean,
) {
  if (
    preset === 'headingLarge' ||
    preset === 'headingMedium' ||
    preset === 'headingSmall'
  ) {
    return $fontFamily.bold;
  }

  switch (true) {
    case bold && italic:
      return $fontFamily.boldItalic;
    case bold:
      return $fontFamily.bold;
    case italic:
      return $fontFamily.italic;
    case semiBold && italic:
      return $fontFamily.mediumItalic;
    case semiBold:
      return $fontFamily.medium;
    default:
      return $fontFamily.regular;
  }
}

// Type of text variants
type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';

// Font size and line height
export const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: {fontSize: 32, lineHeight: 38.4},
  headingMedium: {fontSize: 22, lineHeight: 26.4},
  headingSmall: {fontSize: 18, lineHeight: 23.4},

  paragraphLarge: {fontSize: 18, lineHeight: 25.2},
  paragraphMedium: {fontSize: 16, lineHeight: 22.4},
  paragraphSmall: {fontSize: 14, lineHeight: 19.6},

  paragraphCaption: {fontSize: 12, lineHeight: 16.8},
  paragraphCaptionSmall: {fontSize: 10, lineHeight: 14},
};

// Creating font family object
export const $fontFamily = {
  bold: 'Poppins-Bold',
  boldItalic: 'Poppins-BoldItalic',
  italic: 'Poppins-Italic',
  medium: 'Poppins-SemiBold',
  mediumItalic: 'Poppins-SemiBoldItalic',
  regular: 'Poppins-Regular',
};
