import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Box, BoxProps, Icon, Text, TextProps, TouchableBox} from '@components';

type Props = {
  title: string;
};

export function FullAnimeHeader({title}: Props) {
  const navigation = useNavigation();

  return (
    <Box {...$boxWrapper}>
      <TouchableBox
        testID="button"
        flexDirection="row"
        alignItems="center"
        onPress={navigation.goBack}>
        <Icon name="arrowLeft" color="primary" />
        <Text {...$textStyle}>{title}</Text>
      </TouchableBox>
      <Box height={20} width={20} />
    </Box>
  );
}

const $boxWrapper: BoxProps = {
  mb: 's12',
  px: 's24',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const $textStyle: TextProps = {
  preset: 'paragraphLarge',
  semiBold: true,
  ml: 's12',
  flexShrink: 1,
  textAlign: 'center',
};
