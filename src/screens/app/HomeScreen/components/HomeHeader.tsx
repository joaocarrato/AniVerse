import React from 'react';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from 'react-native';

import {Box} from '@components';

const SCREEN_WIDTH = Dimensions.get('screen').width;

interface Props {
  image: ImageSourcePropType | undefined;
}

export function HomeHeader({image}: Props) {
  return (
    <Box>
      <Image source={image} style={$imageStyle} resizeMode="contain" />
    </Box>
  );
}

const $imageStyle: StyleProp<ImageStyle> = {
  height: 250,
  width: SCREEN_WIDTH,
  opacity: 0.8,
  borderBottomLeftRadius: 12,
  borderBottomRightRadius: 12,
  borderRadius: 12,
};
