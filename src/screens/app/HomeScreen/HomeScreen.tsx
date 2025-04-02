import React, {useRef} from 'react';
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  RefreshControl,
} from 'react-native';

import {
  RecentAnimes,
  TopAnime,
  useGetRecentAnimes,
  useGetTopAnime,
} from '@domain';
import {useScrollToTop} from '@react-navigation/native';

import {Screen, TouchableBox} from '@components';
import {useAppSafeArea, useAppTheme} from '@hooks';
import {AppTabScreenProps} from '@routes';

import {AnimeCard} from './components/AnimeCard';
import {HomeEmptyList} from './components/HomeEmptyList';
import {HomeHeader} from './components/HomeHeader';
import {HomeSectionTitle} from './components/HomeSectionTitle';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  const {bottom} = useAppSafeArea();
  const {spacing} = useAppTheme();
  const {data: animes, isError, isLoading, refetch} = useGetTopAnime();
  const {data: recentAnimes} = useGetRecentAnimes();

  const flatListRef = useRef<FlatList<TopAnime>>(null);

  const image = animes?.data[20]?.imagesUrl?.large || '';

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

  function renderRecentAnimes({item}: ListRenderItemInfo<RecentAnimes>) {
    return (
      <TouchableBox
        marginRight="s12"
        onPress={() =>
          navigation.navigate('DetailsScreen', {
            id: item.id,
          })
        }>
        <Image
          source={{uri: item.images.largeImage}}
          resizeMode="cover"
          style={{height: 200, width: 140, borderRadius: 12}}
        />
      </TouchableBox>
    );
  }

  return (
    <Screen style={{paddingBottom: 0, paddingHorizontal: 0}} scrollable>
      <HomeHeader image={{uri: image}} />

      <HomeSectionTitle
        title="Top Hits Anime"
        marginTop="s24"
        marginBottom="s12"
        onPress={() =>
          navigation.navigate('FullAnimeScreen', {title: 'Top Hits Anime'})
        }
      />

      <FlatList
        data={animes?.data}
        ref={flatListRef}
        keyExtractor={item => item.content}
        showsHorizontalScrollIndicator={false}
        horizontal
        disableScrollViewPanResponder={true}
        contentContainerStyle={{paddingLeft: spacing.s24}}
        refreshing={isLoading}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }
        ListEmptyComponent={
          <HomeEmptyList isError={isError} isLoading={isLoading} />
        }
        renderItem={renderItem}
      />

      <HomeSectionTitle
        title="New Episode Releases"
        marginTop="s24"
        marginBottom="s12"
        onPress={() =>
          navigation.navigate('FullAnimeScreen', {
            title: 'New Episode Releases',
          })
        }
      />

      <FlatList
        data={recentAnimes?.data}
        keyExtractor={item => item.title}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: bottom,
          paddingLeft: spacing.s24,
        }}
        disableScrollViewPanResponder={true}
        horizontal
        ListEmptyComponent={
          <HomeEmptyList isError={isError} isLoading={isLoading} />
        }
        renderItem={renderRecentAnimes}
      />
    </Screen>
  );
}
