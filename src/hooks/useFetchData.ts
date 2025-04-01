import {PageAPI} from '@api';
import {
  QueryObserverResult,
  RefetchOptions,
  useQuery,
} from '@tanstack/react-query';

interface useFetchDataReturn<TData> {
  data: PageAPI<TData> | undefined;
  isLoading: boolean;
  isError: boolean;
  refetch: (
    options?: RefetchOptions,
  ) => Promise<QueryObserverResult<PageAPI<TData>, Error>>;
  isRefetching: boolean;
}

/**
 * Fetches data using the provided query key and fetch function.
 *
 * @param queryKey - The unique key for the query, used for caching and identifying the query.
 * @param getList - A function that returns a promise resolving to the data of type PageAPI<Data>.
 * @returns An object containing the fetched data, loading state, error state, and refetch methods.
 */

export function useFetchData<Data>(
  queryKey: readonly unknown[],
  getList: () => Promise<PageAPI<Data>>,
): useFetchDataReturn<Data> {
  const {data, isLoading, isError, error, refetch, isRefetching} = useQuery({
    queryKey,
    queryFn: getList,
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
