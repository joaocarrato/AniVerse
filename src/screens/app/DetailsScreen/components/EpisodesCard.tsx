import React from 'react';
import {Image} from 'react-native';

import {Anime, Episodes} from '@domain';

import {Box, Icon, Text} from '@components';

type Props = {
  trailerUrl: Anime['trailer']['imageUrl'] | undefined;
  episodes: Episodes;
};

export function EpisodesCard({trailerUrl, episodes}: Props) {
  return (
    <Box marginRight="s12">
      <Image
        source={{uri: trailerUrl}}
        style={{height: 120, width: 140, borderRadius: 12, opacity: 0.4}}
        resizeMode="cover"
      />
      <Box position="absolute" zIndex={1} pt="s12" alignSelf="center">
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <Box flexDirection="row" alignItems="center">
            <Icon name="starFill" color="warning" size={15} />

            <Text ml="s8" preset="paragraphCaption" color="warning">
              {episodes.score}
            </Text>
          </Box>

          <Text preset="paragraphSmall">#{episodes.id}</Text>
        </Box>

        <Box mt="s24">
          <Text preset="paragraphSmall" semiBold textAlign="center" flex={1}>
            {episodes.title}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
