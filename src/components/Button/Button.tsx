import React from 'react';

import {ActivityIndicator} from '../ActivityIndicator/ActivityIndicator';
import {TouchableBox, TouchableBoxProps} from '../Box/Box';
import {Text} from '../Text/Text';

import {buttonPresets} from './buttonPresets';

export type ButtonPresets = 'enabled' | 'disabled';

interface ButtonProps extends TouchableBoxProps {
  title: string;
  loading?: boolean;
  disabled?: boolean;
}

export function Button({
  title,
  loading,
  disabled,
  ...buttonProps
}: ButtonProps) {
  const buttonPreset = disabled
    ? buttonPresets.disabled
    : buttonPresets.enabled;
  return (
    <TouchableBox
      disabled={loading || disabled}
      {...buttonProps}
      {...buttonPreset.container}
      {...$buttonStyle}>
      {loading ? (
        <ActivityIndicator color={buttonPreset.content} />
      ) : (
        <Text color={buttonPreset.content} preset="paragraphMedium" semiBold>
          {title}
        </Text>
      )}
    </TouchableBox>
  );
}

const $buttonStyle: TouchableBoxProps = {
  height: 55,
  borderRadius: 's12',
  justifyContent: 'center',
  alignItems: 'center',
};
