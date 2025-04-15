import {useQuery} from '@tanstack/react-query';
import {QueryKeys} from '@utils';

import {useDebounce} from '@hooks';

import {animeSearchService} from '../animeSearchService';

export function useGetAnimeSearch(name: string) {
  const debouncedName = useDebounce(name, 1500);
  const {data, isError, isLoading} = useQuery({
    queryKey: [QueryKeys.AnimeSearch, debouncedName],
    queryFn: () => animeSearchService.getList(debouncedName),
    retry: false,
    staleTime: 10000,
  });

  return {
    anime: data,
    isError,
    isLoading,
  };
}
