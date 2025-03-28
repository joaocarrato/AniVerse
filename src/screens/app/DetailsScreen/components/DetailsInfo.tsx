import React from 'react';

import {Anime} from '@domain';

import {Box, BoxProps, Icon, Text} from '@components';

type Props = {
  anime: Anime;
};

export function DetailsInfo({anime}: Props) {
  return (
    <Box {...$boxWrapper}>
      <Box flexDirection="row" alignItems="center" gap="s8">
        <Icon name={anime.score > 8 ? 'starFill' : 'star'} />
        <Text>{anime.score}</Text>
      </Box>
      <Box flexDirection="row" alignItems="center" gap="s8">
        <Icon name="calendar" />
        <Text>{anime.year}</Text>
      </Box>
      <Box flexDirection="row" alignItems="center" gap="s8">
        <Icon name="heart" />
        <Text>{anime.favorites}</Text>
      </Box>
    </Box>
  );
}

const $boxWrapper: BoxProps = {
  mt: 's20',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 's24',
  justifyContent: 'center',
};
