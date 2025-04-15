import React, {useRef} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {AnimeSearch, useGetAnimeSearch} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {useScrollToTop} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

import {FormTextInput, Screen} from '@components';
import {useAppSafeArea} from '@hooks';
import {AppTabScreenProps} from '@routes';

import {SearchAnimeCard} from './components/SearchAnimeCard';
import {SearchEmpty} from './components/SearchEmpty';
import {searchScreenSchema, SearchScreenSchemaType} from './searchScreenSchema';

export function SearchScreen({navigation}: AppTabScreenProps<'SearchScreen'>) {
  const {bottom} = useAppSafeArea();
  const {control, watch} = useForm<SearchScreenSchemaType>({
    resolver: zodResolver(searchScreenSchema),
    defaultValues: {
      animeName: '',
    },
    mode: 'onChange',
  });

  const flatListRef = useRef<FlatList<AnimeSearch>>(null);
  useScrollToTop(flatListRef);

  const animeName = watch('animeName');
  const animeQuery = useGetAnimeSearch(animeName);

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
        errorMessage={undefined}
        placeholder="Search anime..."
        boxProps={{mb: 's12', mx: 's24'}}
      />
      <FlatList
        ref={flatListRef}
        data={animeQuery.anime?.data}
        numColumns={3}
        contentContainerStyle={{
          alignSelf: 'center',
          paddingBottom: bottom,
        }}
        ListEmptyComponent={
          <SearchEmpty
            loading={animeQuery.isLoading}
            error={animeQuery.isError}
          />
        }
        columnWrapperStyle={{marginBottom: 10}}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </Screen>
  );
}
