import {Pagination} from '@types';

import {PaginationAPI} from './apiTypes';

function toPagination(paginationApi: PaginationAPI): Pagination {
  return {
    lastVisiblePage: paginationApi.last_visible_page,
    hasNextPage: paginationApi.has_next_page,
    currentPage: paginationApi.current_page,
    items: {
      count: paginationApi.items?.count,
      total: paginationApi.items?.total,
      perPage: paginationApi.items?.per_page,
    },
  };
}

export const apiAdapter = {toPagination};
