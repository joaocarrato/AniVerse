export interface TopAnime {
  id: number;
  animeUrl: string;
  imagesUrl: {
    default: string;
    small: string;
    large: string;
  };
  title: string;
  content: string;
  date: string;
}

export interface TopAnimeAPI {
  mal_id: string;
  entry: Array<{
    mal_id: number;
    url: string;
    images: {
      jpg: {
        image_url: string;
        small_image_url: string;
        large_image_url: string;
      };
      webp: {
        image_url: string;
        small_image_url: string;
        large_image_url: string;
      };
    };
    title: string;
  }>;
  content: string;
  date: string;
  user: {
    url: string;
    username: string;
  };
}
