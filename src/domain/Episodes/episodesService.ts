import {PageAPI} from '@api';

import {episodesAdapter} from './episodesAdapter';
import {episodesApi} from './episodesApi';
import {Episodes} from './episodesTypes';

async function getEpisodes(id?: number): Promise<PageAPI<Episodes>> {
  const episodes = await episodesApi.getEpisodes(id);

  return {
    pagination: episodes.pagination,
    data: episodes.data.map(episodesAdapter.toEpisode),
  };
}

export const episodesService = {getEpisodes};
