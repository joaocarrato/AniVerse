import {useQuery} from '@tanstack/react-query';
import {QueryKeys} from '@utils';

import {animeSearchService} from '../animeSearchService';

export function useGetAnimeSearch(name: string) {
  const {data, isError, isLoading} = useQuery({
    queryKey: [QueryKeys.AnimeSearch, name],
    retry: 1,
    queryFn: () => animeSearchService.getList(name),
  });

  return {
    data,
    isError,
    isLoading,
  };
}
