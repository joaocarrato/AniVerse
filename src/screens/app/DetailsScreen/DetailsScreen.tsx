import React, {useRef} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {Episodes, useGetAnimeId, useGetEpisodeId} from '@domain';
import {useScrollToTop} from '@react-navigation/native';
import {useFavoriteStore} from '@services';

import {ActivityIndicator, Box, Icon, Screen, Text} from '@components';
import {AppStackScreenProps} from '@routes';

import {DetailsHeader} from './components/DetailsHeader';
import {DetailsInfo} from './components/DetailsInfo';
import {EpisodesCard} from './components/EpisodesCard';
import {GenreCard} from './components/GenreCard';

export function DetailsScreen({route}: AppStackScreenProps<'DetailsScreen'>) {
  const animeId = route.params.id;
  const {anime, isLoading} = useGetAnimeId(animeId);
  const {episodes, isLoading: _isLoading, isError} = useGetEpisodeId(animeId);
  console.log(episodes);
  const {addFavorite, isFavorite, removeFavorite} = useFavoriteStore();

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

  function handleToggleFavorite() {
    if (!anime) {
      return;
    }

    if (isFavorite(anime.id)) {
      removeFavorite(anime.id);
    } else {
      addFavorite(anime);
    }
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
          name={isFavorite(anime.id) ? 'bookmarkFill' : 'bookmark'}
          color="hoverSecondary"
          size={22}
          onPress={handleToggleFavorite}
        />
      </Box>

      <Text my="s24" preset="paragraphSmall">
        {anime.synopsis}
      </Text>

      <Text>{anime.background}</Text>

      {episodes.data.length > 0 && (
        <Text preset="headingSmall" my="s12">
          Episodes
        </Text>
      )}

      {isError && <Text>Error while fetching episodes</Text>}

      <FlatList
        data={episodes.data}
        ref={flatListRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </Screen>
  );
}
