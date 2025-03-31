import React, {useRef, useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {Episodes, useGetAnimeId, useGetEpisodeId} from '@domain';
import {useScrollToTop} from '@react-navigation/native';

import {ActivityIndicator, Box, Icon, Screen, Text} from '@components';
import {AppStackScreenProps} from '@routes';

import {DetailsHeader} from './components/DetailsHeader';
import {DetailsInfo} from './components/DetailsInfo';
import {EpisodesCard} from './components/EpisodesCard';
import {GenreCard} from './components/GenreCard';

export function DetailsScreen({route}: AppStackScreenProps<'DetailsScreen'>) {
  const [isFavorited, setIsFavorited] = useState<boolean>(false);
  const animeId = route.params.id;
  const {anime, isLoading} = useGetAnimeId(animeId);
  const {episodes, isLoading: _isLoading} = useGetEpisodeId(animeId);

  const flatListRef = useRef<FlatList<Episodes>>(null);

  useScrollToTop(flatListRef);

  if (isLoading || _isLoading) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center" bg="background">
        <ActivityIndicator size={30} color="hoverPrimary" />
      </Box>
    );
  }

  if (!anime || !episodes) {
    return null;
  }

  function handleFavorite() {
    setIsFavorited(prev => !prev);
  }

  function renderItem({item}: ListRenderItemInfo<Episodes>) {
    return (
      <EpisodesCard trailerUrl={anime?.trailer.imageUrl} episodes={item} />
    );
  }

  return (
    <Screen canGoBack title={anime?.titles.title} scrollable>
      <DetailsHeader anime={anime} />

      <DetailsInfo anime={anime} />

      <Box flexDirection="row" alignItems="center">
        <FlatList
          data={anime.genres}
          horizontal
          scrollEnabled={false}
          contentContainerStyle={{marginTop: 12}}
          keyExtractor={item => item.name}
          renderItem={({item}) => <GenreCard name={item.name} />}
        />

        <Icon
          name={isFavorited ? 'bookmarkFill' : 'bookmark'}
          color="hoverSecondary"
          size={22}
          onPress={handleFavorite}
        />
      </Box>

      <Text my="s24" preset="paragraphSmall">
        {anime.synopsis}
      </Text>

      <Text>{anime.background}</Text>

      <Text preset="headingSmall" my="s12">
        Episodes
      </Text>

      <FlatList
        ref={flatListRef}
        horizontal
        data={episodes.data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </Screen>
  );
}
