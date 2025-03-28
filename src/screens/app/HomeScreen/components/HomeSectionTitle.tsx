import React from 'react';

import {Box, BoxProps, Text, TouchableBox} from '@components';

type Props = {
  title: string;
  onPress?: () => void;
} & Pick<BoxProps, 'marginTop' | 'marginBottom' | 'marginVertical'>;

export function HomeSectionTitle({title, onPress, ...rest}: Props) {
  return (
    <Box {...$boxWrapper} {...rest}>
      <Text preset="headingSmall">{title}</Text>
      <TouchableBox onPress={onPress}>
        <Text preset="paragraphSmall" semiBold color="primary">
          See all
        </Text>
      </TouchableBox>
    </Box>
  );
}

const $boxWrapper: BoxProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
};
