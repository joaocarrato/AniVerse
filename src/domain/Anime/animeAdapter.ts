import {Anime, AnimeAPI} from './animeTypes';

function toAnime(animeApi: AnimeAPI): Anime {
  return {
    id: animeApi.data.mal_id,
    url: animeApi.data.url,
    images: {
      default: animeApi.data.images.jpg.image_url,
      small: animeApi.data.images.jpg.small_image_url,
      large: animeApi.data.images.jpg.large_image_url,
    },
    trailer: {
      ytUrl: animeApi.data.trailer.url,
      imageUrl: animeApi.data.trailer.images.large_image_url,
    },
    titles: {
      original: animeApi.data.title_japanese,
      title: animeApi.data.title,
    },
    favorites: animeApi.data.favorites ?? 0,
    episodes: animeApi.data.episodes,
    status: animeApi.data.status,
    rating: animeApi.data.rating,
    score: animeApi.data.score,
    rank: animeApi.data.rank,
    popularity: animeApi.data.popularity,
    synopsis: animeApi.data.synopsis,
    background: animeApi.data.background,
    year: animeApi.data.year,
  };
}

export const animeAdapter = {toAnime};
