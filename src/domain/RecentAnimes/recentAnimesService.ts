import {PageAPI} from '@api';

import {recentAnimesAdapter} from './recentAnimesAdapter';
import {recentAnimeApi} from './recentAnimesApi';
import {RecentAnimes} from './recentAnimesTypes';

// Função utilitária para filtrar animes únicos
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

  // 1. Adapta os dados
  const adaptedList = recentAnimesAdapter.toList(recentAnimesPage.data);

  // 2. Filtra duplicados
  const uniqueAnimes = filterUniqueAnimes(adaptedList);

  return {
    ...recentAnimesPage,
    data: uniqueAnimes,
  };
}

export const recentAnimesService = {getList};
