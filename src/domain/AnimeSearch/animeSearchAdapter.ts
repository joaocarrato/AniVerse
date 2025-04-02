import {dummyImage} from '@utils';

import {AnimeSearch, AnimeSearchAPI} from './animeSearchTypes';

function toAnimeSearch(animeSearchApi: AnimeSearchAPI): AnimeSearch {
  const imagesUrl = animeSearchApi.images.jpg;
  const trailerImages = animeSearchApi.trailer.images;

  return {
    id: animeSearchApi.mal_id,
    url: animeSearchApi.url,
    images: {
      defaultImage: imagesUrl.image_url || dummyImage.imageUrl,
      largeImage: imagesUrl.large_image_url || dummyImage.imageUrl,
      smallImage: imagesUrl.small_image_url || dummyImage.imageUrl,
    },
    trailer: {
      images: {
        defaultImage: trailerImages.image_url || dummyImage.imageUrl,
        largeImage: trailerImages.maximum_image_url || dummyImage.imageUrl,
        smallImage: trailerImages.small_image_url || dummyImage.imageUrl,
      },
    },
    title: animeSearchApi.title,
    titleEnglish: animeSearchApi.title_english ?? animeSearchApi.title,
    titleJapanese: animeSearchApi.title_japanese,
    score: animeSearchApi.score ?? 0,
    synopsis: animeSearchApi.synopsis ?? 'No synopsis provided',
    genres: animeSearchApi.genres ?? 'No genres',
  };
}

export const animeSearchAdapter = {toAnimeSearch};
