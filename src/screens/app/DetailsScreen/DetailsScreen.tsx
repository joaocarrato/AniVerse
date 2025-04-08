import React, {useRef} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {Episodes, useGetAnimeId, useGetEpisodeId} from '@domain';
import {useScrollToTop} from '@react-navigation/native';
import {useFavoriteStore, useToast} from '@services';

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
  const {addFavorite, isFavorite, removeFavorite} = useFavoriteStore();
  const {showToast} = useToast();

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
      showToast({message: 'Anime Removed'});
    } else {
      showToast({message: 'Anime favorited!'});
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

      <Box
        flexDirection="row"
        alignItems="flex-start"
        flexWrap="wrap"
        marginTop="s12">
        {/* Gêneros */}
        <Box flexDirection="row" flexWrap="wrap" flex={1}>
          {anime.genres.map(genre => (
            <GenreCard key={genre.name} name={genre.name} mb="s8" />
          ))}
        </Box>

        {/* Ícone de favorito */}
        <Box marginLeft="s8">
          <Icon
            name={isFavorite(anime.id) ? 'bookmarkFill' : 'bookmark'}
            color="hoverSecondary"
            size={22}
            onPress={handleToggleFavorite}
          />
        </Box>
      </Box>

      <Text mb="s24" mt="s12" preset="paragraphSmall">
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
        style={{marginRight: -24}}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </Screen>
  );
}
