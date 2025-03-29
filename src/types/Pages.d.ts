export interface Pagination {
  lastVisiblePage: number;
  hasNextPage: boolean;
  currentPage: number | undefined;
  items?: {
    count?: number;
    total?: number;
    perPage?: number;
  };
}

export interface Page<Data> {
  pagination: Pagination;
  data: Data[];
}
