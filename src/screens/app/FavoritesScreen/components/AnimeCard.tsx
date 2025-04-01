import React from 'react';
import {Image} from 'react-native';

import {Anime} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, Icon, Text, TouchableBox} from '@components';

type Props = {
  anime: Anime;
  onPress?: () => void;
};

export function AnimeCard({anime, onPress}: Props) {
  const navigation = useNavigation();
  return (
    <TouchableBox
      flexDirection="row"
      marginBottom="s24"
      onPress={() => navigation.navigate('DetailsScreen', {id: anime.id})}>
      <Image
        source={{uri: anime.images.large}}
        style={{height: 80, width: 80, marginRight: 15, borderRadius: 15}}
      />

      <Box flexShrink={1} flexGrow={1}>
        <Text>{anime.titles.title}</Text>

        <Box flexDirection="row" alignItems="center" mt="s12">
          <Icon name="starFill" color="warning" size={15} />
          <Text ml="s4" preset="paragraphSmall">
            {anime.score}
          </Text>
        </Box>
      </Box>

      <Box alignSelf="center">
        <Icon name="trash" onPress={onPress} />
      </Box>
    </TouchableBox>
  );
}
