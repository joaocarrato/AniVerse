import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {TopAnime, useGetTopAnime} from '@domain';

import {Screen} from '@components';
import {AppTabScreenProps} from '@routes';

import {AnimeCard} from './components/AnimeCard';
import {HomeEmptyList} from './components/HomeEmptyList';
import {HomeHeader} from './components/HomeHeader';
import {HomeSectionTitle} from './components/HomeSectionTitle';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
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
    <Screen scrollable style={{paddingBottom: 0}}>
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

      <HomeSectionTitle
        title="New Episode Releases"
        marginTop="s24"
        marginBottom="s12"
      />
    </Screen>
  );
}
