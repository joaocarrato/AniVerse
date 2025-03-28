/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {Anime, Episodes} from '@domain';

import {
  Box,
  Icon,
  ImageBackgroundBox,
  ImageBackgroundBoxProps,
  Text,
} from '@components';

type Props = {
  trailerUrl: Anime['trailer']['imageUrl'] | undefined;
  episodes: Episodes;
};

export function EpisodesCard({trailerUrl, episodes}: Props) {
  return (
    <ImageBackgroundBox
      source={{uri: trailerUrl}}
      {...$imageStyle}
      style={{
        borderRadius: 12,
      }}>
      <OpacityBox />
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <Box flexDirection="row" alignItems="center">
          <Icon name="starFill" color="warning" size={14} />
          <Text ml="s4" preset="paragraphSmall">
            {episodes.score}
          </Text>
        </Box>

        <Text color="primary" semiBold>
          # {episodes.id}
        </Text>
      </Box>

      <Text semiBold textAlign="center" mt="s12">
        {episodes.title}
      </Text>
    </ImageBackgroundBox>
  );
}

const $imageStyle: ImageBackgroundBoxProps = {
  height: 120,
  width: 150,
  overflow: 'hidden',
  px: 's8',
  marginRight: 's12',
};

function OpacityBox() {
  return (
    <Box
      top={0}
      left={0}
      right={0}
      bottom={0}
      backgroundColor="opacity"
      position="absolute"
    />
  );
}
