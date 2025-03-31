export interface RecentAnimes {
  id: number;
  images: {
    default: string;
    small: string;
    largeImage: string;
  };
  title: string;
  content: string;
}

export interface RecentAnimesAPI {
  mal_id: string;
  entry: Entry[];
  content: string;
  date: string;
  user: {
    url: string;
    username: string;
  };
}

export interface Entry {
  mal_id: number;
  url: string;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  title: string;
}
