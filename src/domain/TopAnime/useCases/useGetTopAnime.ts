import {PageAPI} from '@api';
import {useQuery} from '@tanstack/react-query';
import {QueryKeys} from '@utils';

import {topAnimeService} from '../topAnimeService';
import {TopAnime} from '../topAnimeTypes';

interface UseGetTopAnimeReturn {
  animes: PageAPI<TopAnime> | undefined;
  isLoading: boolean;
  isError: boolean;
}

export function useGetTopAnime(): UseGetTopAnimeReturn {
  const {data, isLoading, isError, error} = useQuery({
    queryKey: [QueryKeys.AnimeRecommendation],
    queryFn: () => topAnimeService.getList(),
    retry: 1,
    staleTime: 3 * 60 * 1000, // 3 minutes in milliseconds
  });

  if (error) {
    console.error('Erro na requisição: ', error);
  }

  return {
    animes: data,
    isLoading,
    isError,
  };
}
