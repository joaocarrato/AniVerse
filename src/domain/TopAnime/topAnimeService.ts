import {PageAPI} from '@api';

import {topAnimeAdapter} from './topAnimeAdapter';
import {topAnimeApi} from './topAnimeApi';
import {TopAnime} from './topAnimeTypes';

async function getList(): Promise<PageAPI<TopAnime>> {
  try {
    const animeRecommendation = await topAnimeApi.getList();

    return {
      pagination: animeRecommendation.pagination,
      data: animeRecommendation.data.map(topAnimeAdapter.toTopAnime),
    };
  } catch (error) {
    console.error('Erro no serviço: ', error);
    throw error;
  }
}

export const topAnimeService = {getList};
