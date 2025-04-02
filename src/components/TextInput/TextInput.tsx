import React, {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleProp,
  TextStyle,
} from 'react-native';

import {useAppTheme} from '@hooks';
import {palette} from '@theme';

import {Box, BoxProps} from '../Box/Box';
import {$fontFamily, $fontSizes, Text} from '../Text/Text';

export interface TextInputProps extends RNTextInputProps {
  leftComponent?: React.ReactElement;
  rightComponent?: React.ReactElement;
  errorMessage?: string;
  boxProps?: BoxProps;
  label?: string;
}

export function TextInput({
  leftComponent,
  rightComponent,
  errorMessage,
  label,
  boxProps,
  ...rnTextInputProps
}: TextInputProps) {
  const {colors} = useAppTheme();

  const $textInputContainer: BoxProps = {
    px: 's16',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'surface',
    borderWidth: errorMessage ? 2 : 1,
    borderColor: errorMessage ? 'error' : 'surfaceElevated',
    borderRadius: 's16',
  };

  const inputRef = useRef<RNTextInput>(null);

  function handleFocus() {
    inputRef.current?.focus();
  }

  return (
    <Box {...boxProps}>
      <Pressable onPress={handleFocus}>
        <Text mb="s8" preset="paragraphSmall">
          {label}
        </Text>
        <Box {...$textInputContainer}>
          {leftComponent && <Box mr="s8">{leftComponent}</Box>}
          <RNTextInput
            ref={inputRef}
            placeholderTextColor={colors.textSecondary}
            style={$textInputStyle}
            {...rnTextInputProps}
          />
          {rightComponent && <Box ml="s8">{rightComponent}</Box>}
        </Box>
        {errorMessage && (
          <Text mt="s4" preset="paragraphSmall" color="error" semiBold>
            {errorMessage}
          </Text>
        )}
      </Pressable>
    </Box>
  );
}

const $textInputStyle: StyleProp<TextStyle> = {
  padding: 0,
  flexShrink: 1,
  flexGrow: 1,
  color: palette.ghostWhite,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphSmall,
};
