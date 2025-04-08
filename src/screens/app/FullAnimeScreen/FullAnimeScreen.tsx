import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {TopAnime, useGetTopAnime} from '@domain';

import {Screen} from '@components';
import {useAppSafeArea} from '@hooks';
import {AppStackScreenProps} from '@routes';

import {AnimeCard} from '../HomeScreen/components/AnimeCard';

import {FullAnimeHeader} from './components/FullAnimeHeader';

export function FullAnimeScreen({
  navigation,
  route,
}: AppStackScreenProps<'FullAnimeScreen'>) {
  const {bottom} = useAppSafeArea();
  const {data: animes} = useGetTopAnime();
  const screenTitle = route.params.title;

  if (!animes) {
    return null;
  }

  function renderItem({item}: ListRenderItemInfo<TopAnime>) {
    return (
      <AnimeCard
        preset="secondary"
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
    <Screen style={{paddingHorizontal: 0}}>
      <FlatList
        ListHeaderComponent={<FullAnimeHeader title={screenTitle} />}
        data={animes.data}
        keyExtractor={item => item.content}
        numColumns={3}
        contentContainerStyle={{paddingBottom: bottom}}
        columnWrapperStyle={{justifyContent: 'space-between', marginBottom: 10}}
        renderItem={renderItem}
      />
    </Screen>
  );
}
