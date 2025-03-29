import React, {useRef} from 'react';
import {FlatList, ListRenderItemInfo, RefreshControl} from 'react-native';

import {TopAnime, useGetTopAnime} from '@domain';
import {useScrollToTop} from '@react-navigation/native';

import {Screen} from '@components';
import {AppTabScreenProps} from '@routes';

import {AnimeCard} from './components/AnimeCard';
import {HomeEmptyList} from './components/HomeEmptyList';
import {HomeHeader} from './components/HomeHeader';
import {HomeSectionTitle} from './components/HomeSectionTitle';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  const {animes, isError, isLoading, refetch} = useGetTopAnime();

  const flatListRef = useRef<FlatList<TopAnime>>(null);

  useScrollToTop(flatListRef);

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
        onPress={() =>
          navigation.navigate('FullAnimeScreen', {title: 'Top Hits Anime'})
        }
      />

      <FlatList
        ref={flatListRef}
        refreshing={isLoading}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }
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
