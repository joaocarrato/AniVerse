import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {TopAnime, useGetTopAnime} from '@domain';

import {Screen} from '@components';
import {AppStackScreenProps} from '@routes';

import {AnimeCard} from '../HomeScreen/components/AnimeCard';

export function FullAnimeScreen({
  navigation,
  route,
}: AppStackScreenProps<'FullAnimeScreen'>) {
  const {animes} = useGetTopAnime();
  const screenTitle = route.params.title;

  if (!animes) {
    return null;
  }

  function renderItem({item}: ListRenderItemInfo<TopAnime>) {
    return (
      <AnimeCard
        animes={item}
        onPress={() =>
          navigation.navigate('DetailsScreen', {
            id: item.id,
          })
        }
      />
    );
  }
  return (
    <Screen canGoBack title={screenTitle}>
      <FlatList
        data={animes.data}
        keyExtractor={item => item.content}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-around', marginBottom: 10}}
        renderItem={renderItem}
      />
    </Screen>
  );
}
