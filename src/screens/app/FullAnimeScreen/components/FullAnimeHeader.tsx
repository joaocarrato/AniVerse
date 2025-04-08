import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Box, Icon, Text, TouchableBox} from '@components';

type Props = {
  title: string;
};

export function FullAnimeHeader({title}: Props) {
  const navigation = useNavigation();

  return (
    <Box
      mb="s12"
      px="s24"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between">
      <TouchableBox
        flexDirection="row"
        alignItems="center"
        onPress={navigation.goBack}>
        <Icon name="arrowLeft" color="primary" />
        <Text
          preset="paragraphLarge"
          semiBold
          ml="s12"
          flexShrink={1}
          textAlign="center">
          {title}
        </Text>
      </TouchableBox>
      <Box height={20} width={20} />
    </Box>
  );
}
