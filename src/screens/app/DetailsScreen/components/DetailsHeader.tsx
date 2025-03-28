import React from 'react';
import {Dimensions, Image} from 'react-native';

import {Anime} from '@domain';

import {Box, Text} from '@components';

type Props = {
  anime: Anime;
};

const SCREEN_WIDTH = Dimensions.get('screen').width;

export function DetailsHeader({anime}: Props) {
  return (
    <>
      <Box mb="s8">
        <Image
          source={{uri: anime?.images.large}}
          style={{marginHorizontal: -24, height: 300, width: SCREEN_WIDTH}}
          resizeMode="contain"
        />
      </Box>

      <Text textAlign="center" preset="headingSmall">
        {anime?.titles.original}
      </Text>
    </>
  );
}
