import React from 'react';
import {FlatList, ListRenderItemInfo, StyleProp, ViewStyle} from 'react-native';

import {Anime} from '@domain';
import {useFavoriteStore, useToast} from '@services';

import {Box, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

import {AnimeCard} from './components/AnimeCard';

export function FavoritesScreen({}: AppTabScreenProps<'FavoritesScreen'>) {
  const {animes, removeFavorite} = useFavoriteStore();
  const {showToast} = useToast();

  function handleRemoveFavorite(id: number) {
    removeFavorite(id);
    showToast({message: 'Anime Removed'});
  }

  function renderItem({item}: ListRenderItemInfo<Anime>) {
    return (
      <AnimeCard anime={item} onPress={() => handleRemoveFavorite(item.id)} />
    );
  }

  return (
    <Screen style={$screen}>
      <FlatList
        data={animes}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flex: animes.length === 0 ? 1 : undefined}}
        ListEmptyComponent={<ListEmpty />}
        renderItem={renderItem}
      />
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  paddingBottom: 0,
  flex: 1,
};

function ListEmpty() {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Text>No favorite anime 😢</Text>
    </Box>
  );
}
