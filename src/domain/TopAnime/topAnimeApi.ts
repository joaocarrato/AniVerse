import {api, PageAPI} from '@api';

import {TopAnimeAPI} from './topAnimeTypes';

async function getList(): Promise<PageAPI<TopAnimeAPI>> {
  const response = await api.get<PageAPI<TopAnimeAPI>>('recommendations/anime');

  return response.data;
}

export const topAnimeApi = {getList};
