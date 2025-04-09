import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Box, BoxProps, Text, TouchableBox} from '@components';

type Props = {
  title: string;
} & Pick<BoxProps, 'marginTop' | 'marginBottom' | 'marginVertical'>;

export function HomeSectionTitle({title, ...rest}: Props) {
  const navigation = useNavigation();
  return (
    <Box {...$boxWrapper} {...rest}>
      <Text preset="headingSmall">{title}</Text>
      <TouchableBox
        onPress={() =>
          navigation.navigate('FullAnimeScreen', {
            title,
          })
        }>
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
  paddingHorizontal: 's24',
};
