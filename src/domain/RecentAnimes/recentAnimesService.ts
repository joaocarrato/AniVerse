import {PageAPI} from '@api';

import {recentAnimesAdapter} from './recentAnimesAdapter';
import {recentAnimeApi} from './recentAnimesApi';
import {RecentAnimes} from './recentAnimesTypes';

function filterUniqueAnimes(animes: RecentAnimes[]): RecentAnimes[] {
  const seenIds = new Set<number>();

  return animes.filter(anime => {
    if (seenIds.has(anime.id)) {
      return false;
    }
    seenIds.add(anime.id);
    return true;
  });
}

async function getList(): Promise<PageAPI<RecentAnimes>> {
  const recentAnimesPage = await recentAnimeApi.getList();

  const adaptedList = recentAnimesAdapter.toList(recentAnimesPage.data);

  const uniqueAnimes = filterUniqueAnimes(adaptedList);

  return {
    ...recentAnimesPage,
    data: uniqueAnimes,
  };
}

export const recentAnimesService = {getList};
