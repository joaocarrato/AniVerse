import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {TopAnime, useGetTopAnime} from '@domain';

import {Screen} from '@components';
import {AppStackScreenProps} from '@routes';

import {AnimeCard} from './components/AnimeCard';
import {HomeEmptyList} from './components/HomeEmptyList';
import {HomeHeader} from './components/HomeHeader';
import {HomeSectionTitle} from './components/HomeSectionTitle';

export function HomeScreen({navigation}: AppStackScreenProps<'HomeScreen'>) {
  const {animes, isError, isLoading} = useGetTopAnime();

  if (!animes?.data) {
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
    <Screen scrollable>
      <HomeHeader />

      <HomeSectionTitle
        title="Top Hits Anime"
        marginTop="s24"
        marginBottom="s12"
      />

      <FlatList
        showsHorizontalScrollIndicator={false}
        data={animes?.data}
        keyExtractor={item => item.content}
        ListEmptyComponent={
          <HomeEmptyList isError={isError} isLoading={isLoading} />
        }
        renderItem={renderItem}
        horizontal
      />
    </Screen>
  );
}
