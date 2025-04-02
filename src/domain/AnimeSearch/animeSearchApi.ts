import {api, PageAPI} from '@api';

import {AnimeSearchAPI} from './animeSearchTypes';

async function getList(name: string): Promise<PageAPI<AnimeSearchAPI>> {
  const response = await api.get<PageAPI<AnimeSearchAPI>>('anime', {
    params: {
      q: name,
    },
  });

  return response.data;
}

export const animeSearchApi = {getList};
