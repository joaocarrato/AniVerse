import {useQuery} from '@tanstack/react-query';
import {QueryKeys} from '@utils';

import {topAnimeService} from '../topAnimeService';

export function useGetTopAnime() {
  const {data, isLoading, isError, error, refetch, isRefetching} = useQuery({
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
    refetch,
    isRefetching,
  };
}
