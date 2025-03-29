export interface PaginationAPI {
  last_visible_page: number;
  has_next_page: boolean;
  current_page?: number;
  items?: {
    count?: number;
    total?: number;
    per_page?: number;
  };
}

export interface PageAPI<Data> {
  pagination: PaginationAPI;
  data: Data[];
}

export interface PageParams {
  q?: string;
  page?: number;
  genres?: string;
}
