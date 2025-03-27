import {TopAnime, TopAnimeAPI} from './topAnimeTypes';

function toTopAnime(topAnimeApi: TopAnimeAPI): TopAnime {
  if (!topAnimeApi.entry || topAnimeApi.entry.length === 0) {
    throw new Error('Dados de anime não encontrados');
  }

  const mainEntry = topAnimeApi.entry[0];
  return {
    id: mainEntry.mal_id,
    animeUrl: mainEntry.url,
    imagesUrl: {
      default: mainEntry.images.jpg.image_url,
      small: mainEntry.images.jpg.small_image_url,
      large: mainEntry.images.jpg.large_image_url,
    },
    title: mainEntry.title,
    content: topAnimeApi.content,
    date: topAnimeApi.date,
  };
}

export const topAnimeAdapter = {toTopAnime};
