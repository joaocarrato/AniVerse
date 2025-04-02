/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {AnimeSearch, useGetAnimeSearch} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {useScrollToTop} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

import {FormTextInput, Screen} from '@components';
import {useAppSafeArea, useDebounce} from '@hooks';
import {AppTabScreenProps} from '@routes';

import {SearchAnimeCard} from './components/SearchAnimeCard';
import {SearchEmpty} from './components/SearchEmpty';
import {searchScreenSchema, SearchScreenSchemaType} from './searchScreenSchema';

export function SearchScreen({navigation}: AppTabScreenProps<'SearchScreen'>) {
  const {bottom} = useAppSafeArea();
  const {control, watch, clearErrors} = useForm<SearchScreenSchemaType>({
    resolver: zodResolver(searchScreenSchema),
    defaultValues: {
      animeName: '',
    },
    mode: 'onChange',
  });

  const animeName = watch('animeName');
  const debouncedAnimeName = useDebounce(animeName, 500);

  const flatListRef = useRef<FlatList<AnimeSearch>>(null);

  useScrollToTop(flatListRef);

  const {
    data: anime,
    isError,
    isLoading,
  } = useGetAnimeSearch(debouncedAnimeName);

  useEffect(() => {
    clearErrors('animeName');
  }, [debouncedAnimeName]);

  function renderItem({item}: ListRenderItemInfo<AnimeSearch>) {
    return (
      <SearchAnimeCard
        image={item.images}
        onPress={() =>
          navigation.navigate('DetailsScreen', {
            id: item.id,
          })
        }
      />
    );
  }

  return (
    <Screen style={{paddingBottom: 0, paddingHorizontal: 0, flex: 1}}>
      <FormTextInput
        control={control}
        name="animeName"
        placeholder="Search anime..."
        boxProps={{mb: 's12', mx: 's24'}}
      />
      <FlatList
        ref={flatListRef}
        data={anime?.data}
        numColumns={3}
        contentContainerStyle={{
          alignSelf: 'center',
          paddingBottom: bottom,
        }}
        ListEmptyComponent={<SearchEmpty loading={isLoading} error={isError} />}
        columnWrapperStyle={{marginBottom: 10}}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </Screen>
  );
}
