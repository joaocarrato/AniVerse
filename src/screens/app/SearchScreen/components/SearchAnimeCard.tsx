import React from 'react';
import {Image} from 'react-native';

import {AnimeSearch} from '@domain';

import {TouchableBox} from '@components';

type Props = {
  image: AnimeSearch['images'];
  onPress: () => void;
};

export function SearchAnimeCard({image, onPress}: Props) {
  return (
    <TouchableBox margin="s4" onPress={onPress}>
      <Image
        source={{uri: image.largeImage}}
        style={{height: 180, width: 120, borderRadius: 12}}
        resizeMode="cover"
      />
    </TouchableBox>
  );
}
