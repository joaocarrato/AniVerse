import {useQuery} from '@tanstack/react-query';
import {QueryKeys} from '@utils';

import {recentAnimesService} from '../recentAnimesService';

export function useGetRecentAnimes() {
  const {data, isLoading, isError} = useQuery({
    queryKey: [QueryKeys.RecentAnimes],
    retry: 1,
    queryFn: () => recentAnimesService.getList(),
    staleTime: 3 * 60 * 1000, // 3 minutes in milliseconds
  });

  return {
    recentAnimes: data,
    isLoading,
    isError,
  };
}
