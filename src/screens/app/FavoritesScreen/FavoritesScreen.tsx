import React from 'react';
import {FlatList, Image, ListRenderItemInfo} from 'react-native';

import {Anime} from '@domain';
import {useFavoriteStore} from '@services';

import {Box, Icon, Screen, Text, TouchableBox} from '@components';
import {AppTabScreenProps} from '@routes';

export function FavoritesScreen({
  navigation,
}: AppTabScreenProps<'FavoritesScreen'>) {
  const {animes, removeFavorite} = useFavoriteStore();

  function renderItem({item}: ListRenderItemInfo<Anime>) {
    return (
      <TouchableBox
        flexDirection="row"
        marginBottom="s24"
        onPress={() => navigation.navigate('DetailsScreen', {id: item.id})}>
        <Image
          source={{uri: item.images.large}}
          style={{height: 80, width: 80, marginRight: 15, borderRadius: 15}}
        />

        <Box flexShrink={1} flexGrow={1}>
          <Text>{item.titles.title}</Text>

          <Box flexDirection="row" alignItems="center" mt="s12">
            <Icon name="starFill" color="warning" size={15} />
            <Text ml="s4" preset="paragraphSmall">
              {item.score}
            </Text>
          </Box>
        </Box>

        <Box alignSelf="center">
          <Icon name="trash" onPress={() => removeFavorite(item.id)} />
        </Box>
      </TouchableBox>
    );
  }

  return (
    <Screen>
      {!animes.length && (
        <Box>
          <Text>Você não tem nenhum favorito adicionado</Text>
        </Box>
      )}

      <FlatList
        data={animes}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </Screen>
  );
}
