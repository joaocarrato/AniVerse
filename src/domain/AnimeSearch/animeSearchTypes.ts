export interface AnimeSearch {
  id: number;
  url: string;
  images: {
    defaultImage: string;
    smallImage: string;
    largeImage: string;
  };
  trailer: {
    images: {
      defaultImage: string | null;
      smallImage: string | null;
      largeImage: string | null;
    };
  };
  title: string;
  titleEnglish: string;
  titleJapanese: string;
  score: number;
  synopsis: string;
  genres: Array<{
    name: string;
  }>;
}

export interface AnimeSearchAPI {
  mal_id: number;
  url: string;
  images: DatumImages;
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: null | string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: null | string;
  year: number | null;
  genres: Demographic[];
  explicit_genres: unknown[];
  themes: Demographic[];
  demographics: Demographic[];
}

export interface Aired {
  from: string;
  to: null | string;
  prop: Prop;
  string: string;
}

export interface Prop {
  from: From;
  to: To;
}

export interface From {
  day: number;
  month: number;
  year: number;
}

export interface To {
  day: number | null;
  month: number | null;
  year: number | null;
}

export interface Broadcast {
  day: null | string;
  time: null | string;
  timezone: null | string;
  string: null | string;
}

export interface Demographic {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface DatumImages {
  jpg: Jpg;
  webp: Webp;
}

export interface Jpg {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface Webp {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface Title {
  type: string;
  title: string;
}

export interface Trailer {
  youtube_id: null | string;
  url: null | string;
  embed_url: null | string;
  images: TrailerImages;
}

export interface TrailerImages {
  image_url: null | string;
  small_image_url: null | string;
  medium_image_url: null | string;
  large_image_url: null | string;
  maximum_image_url: null | string;
}

export interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: Items;
}

export interface Items {
  count: number;
  total: number;
  per_page: number;
}
