import {QueryKeys} from '@utils';

import {useFetchData} from '@hooks';

import {topAnimeService} from '../topAnimeService';
import {TopAnime} from '../topAnimeTypes';

export function useGetTopAnime() {
  return useFetchData<TopAnime>([QueryKeys.TopAnimes], topAnimeService.getList);
}
