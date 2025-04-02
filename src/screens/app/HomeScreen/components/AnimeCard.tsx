import React from 'react';
import {Image, ImageStyle, StyleProp} from 'react-native';

import {TopAnime} from '@domain';

import {TouchableBox} from '@components';

type Preset = 'primary' | 'secondary';
interface Props {
  animes: TopAnime;
  onPress?: () => void;
  preset?: Preset;
}

export function AnimeCard({animes, onPress, preset = 'primary'}: Props) {
  const $stylePreset: StyleProp<ImageStyle> =
    preset === 'primary'
      ? {
          height: 200,
          width: 140,
          borderRadius: 12,
        }
      : {height: 180, width: 120, borderRadius: 12};

  return (
    <TouchableBox marginRight="s12" onPress={onPress}>
      <Image
        source={{uri: animes.imagesUrl.default}}
        resizeMode="cover"
        style={$stylePreset}
      />
    </TouchableBox>
  );
}
