import {api, PageAPI} from '@api';

import {RecentAnimesAPI} from './recentAnimesTypes';

async function getList(): Promise<PageAPI<RecentAnimesAPI>> {
  const response = await api.get<PageAPI<RecentAnimesAPI>>(
    'recommendations/anime',
  );

  return response.data;
}

export const recentAnimeApi = {getList};
