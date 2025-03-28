import {api} from '@api';

import {AnimeAPI} from './animeTypes';

async function getAnime(id: number): Promise<AnimeAPI> {
  const response = await api.get<AnimeAPI>(`anime/${id}`);

  return response.data;
}

export const animeApi = {getAnime};
