import React, {useEffect} from 'react';
import {Dimensions} from 'react-native';

import {ToastType, useToast} from '@services';

import {$shadowColor} from '@theme';

import {Box, BoxProps} from '../Box/Box';
import {Icon, IconProps} from '../Icon/Icon';
import {Text} from '../Text/Text';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

export function Toast() {
  const {toast, hideToast} = useToast();
  const type: ToastType = toast?.type || 'success';

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        hideToast();
      }, 1500);
    }
  }, [toast, hideToast]);

  if (!toast) {
    return null;
  }

  return (
    <Box {...$boxStyle} top={100} opacity={0.95}>
      <Icon {...mapTypeToIcon[type]} />
      <Text flexShrink={1} ml="s16" bold>
        {toast.message}
      </Text>
    </Box>
  );
}

const mapTypeToIcon: Record<ToastType, IconProps> = {
  success: {
    name: 'checkRound',
    color: 'success',
  },
  error: {
    name: 'checkRound',
    color: 'error',
  },
};

const $boxStyle: BoxProps = {
  bg: 'surfaceElevated',
  position: 'absolute',
  p: 's16',
  borderRadius: 's16',
  alignSelf: 'center',
  flexDirection: 'row',
  alignItems: 'center',
  maxWidth: MAX_WIDTH,
  style: $shadowColor,
};
