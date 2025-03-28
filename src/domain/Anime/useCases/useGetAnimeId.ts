import {useQuery} from '@tanstack/react-query';
import {QueryKeys} from '@utils';

import {animeService} from '../animeService';

export function useGetAnimeId(id: number) {
  const {data, isLoading, isError} = useQuery({
    queryKey: [QueryKeys.AnimeID, id],
    queryFn: () => animeService.getAnime(id),
    retry: 1,
    staleTime: 3 * 60 * 1000, // 3 minutes in milliseconds
  });

  return {
    anime: data,
    isLoading,
    isError,
  };
}
