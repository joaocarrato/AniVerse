import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {Anime} from '@domain';
import {useFavoriteStore} from '@services';

import {Box, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

import {AnimeCard} from './components/AnimeCard';

export function FavoritesScreen({}: AppTabScreenProps<'FavoritesScreen'>) {
  const {animes, removeFavorite} = useFavoriteStore();

  function renderItem({item}: ListRenderItemInfo<Anime>) {
    return <AnimeCard anime={item} onPress={() => removeFavorite(item.id)} />;
  }

  return (
    <Screen style={{paddingBottom: 0}}>
      {!animes.length && (
        <Box>
          <Text>Você não tem nenhum favorito adicionado</Text>
        </Box>
      )}

      <FlatList
        data={animes}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    </Screen>
  );
}
