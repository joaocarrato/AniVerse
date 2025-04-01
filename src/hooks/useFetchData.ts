import {PageAPI} from '@api';
import {useQuery} from '@tanstack/react-query';

export function useFetchData<Data>(
  queryKey: readonly unknown[],
  getList: (id?: number) => Promise<PageAPI<Data>>,
) {
  const {data, isLoading, isError, error, refetch, isRefetching} = useQuery({
    queryKey,
    queryFn: () => getList(),
    retry: 1,
    staleTime: 3 * 60 * 1000, // 3 minutes in milliseconds
  });

  if (error) {
    console.error('Erro na requisição: ', error);
  }

  return {
    data,
    isLoading,
    isError,
    refetch,
    isRefetching,
  };
}
