import React from 'react';
import {Dimensions, Image, ImageStyle, StyleProp} from 'react-native';

import {imageURL} from '@utils';

import {Box, BoxProps, Icon} from '@components';

const SCREEN_WIDTH = Dimensions.get('screen').width;

export function HomeHeader() {
  return (
    <Box>
      <Image
        source={imageURL.demonSlayer}
        style={$imageStyle}
        resizeMode="cover"
      />
      <Box {...$containerIcons}>
        <Icon name="search" color="ghostWhite" />
        <Icon name="bell" color="ghostWhite" />
      </Box>
    </Box>
  );
}

const $imageStyle: StyleProp<ImageStyle> = {
  height: 250,
  width: SCREEN_WIDTH,
  marginHorizontal: -24,
  opacity: 0.8,
  borderBottomLeftRadius: 12,
  borderBottomRightRadius: 12,
};

const $containerIcons: BoxProps = {
  pt: 's8',
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'flex-end',
  gap: 's24',
  zIndex: 1,
  position: 'absolute',
};
