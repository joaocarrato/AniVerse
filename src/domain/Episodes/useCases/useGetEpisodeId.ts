import {useQuery} from '@tanstack/react-query';
import {QueryKeys} from '@utils';

import {episodesService} from '../episodesService';

export function useGetEpisodeId(id: number) {
  const {data, isLoading, isError} = useQuery({
    queryKey: [QueryKeys.Episodes, id],
    queryFn: () => episodesService.getEpisodes(id),
    retry: 1,
    staleTime: 3 * 60 * 1000, // 3 minutes in milliseconds
  });

  return {
    episodes: data,
    isLoading,
    isError,
  };
}
