interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
}

export interface PageAPI<Data> {
  pagination: Pagination;
  data: Data[];
}
