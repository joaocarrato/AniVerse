import {QueryKeys} from '@utils';

import {useFetchData} from '@hooks';

import {episodesService} from '../episodesService';
import {Episodes} from '../episodesTypes';

export function useGetEpisodeId(id: number) {
  return useFetchData<Episodes>(
    [QueryKeys.Episodes, id],
    episodesService.getEpisodes,
  );
}
