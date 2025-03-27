import React from 'react';
import {Image} from 'react-native';

import {TopAnime} from '@domain';

import {TouchableBox} from '@components';

interface Props {
  animes: TopAnime;
  onPress?: () => void;
}

export function AnimeCard({animes, onPress}: Props) {
  return (
    <TouchableBox marginRight="s12" onPress={onPress}>
      <Image
        source={{uri: animes.imagesUrl.default}}
        resizeMode="cover"
        style={{height: 200, width: 140, borderRadius: 12}}
      />
    </TouchableBox>
  );
}
