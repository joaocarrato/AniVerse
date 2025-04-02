import {apiAdapter} from '@api';
import {Page} from '@types';

import {animeSearchAdapter} from './animeSearchAdapter';
import {animeSearchApi} from './animeSearchApi';
import {AnimeSearch} from './animeSearchTypes';

async function getList(name: string): Promise<Page<AnimeSearch>> {
  const anime = await animeSearchApi.getList(name);

  return {
    pagination: apiAdapter.toPagination(anime.pagination),
    data: anime.data.map(animeSearchAdapter.toAnimeSearch),
  };
}

export const animeSearchService = {getList};
