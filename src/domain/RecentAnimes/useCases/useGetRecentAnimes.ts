import {QueryKeys} from '@utils';

import {useFetchData} from '@hooks';

import {recentAnimesService} from '../recentAnimesService';
import {RecentAnimes} from '../recentAnimesTypes';

export function useGetRecentAnimes() {
  return useFetchData<RecentAnimes>(
    [QueryKeys.RecentAnimes],
    recentAnimesService.getList,
  );
}
