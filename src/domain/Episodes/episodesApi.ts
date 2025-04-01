import {api, PageAPI} from '@api';

import {EpisodesAPI} from './episodesTypes';

async function getEpisodes(id?: number): Promise<PageAPI<EpisodesAPI>> {
  const response = await api.get<PageAPI<EpisodesAPI>>(`anime/${id}/episodes`);

  return response.data;
}

export const episodesApi = {getEpisodes};
