import {useQuery} from '@tanstack/react-query';
import {QueryKeys} from '@utils';

import {episodesService} from '../episodesService';

export function useGetEpisodeId(id: number) {
  const {data, isError, isLoading} = useQuery({
    queryKey: [QueryKeys.Episodes, id],
    queryFn: () => episodesService.getEpisodes(id),
    retry: 1,
    staleTime: 3 * 60 * 1000,
  });

  return {
    episodes: data,
    isError,
    isLoading,
  };
}
