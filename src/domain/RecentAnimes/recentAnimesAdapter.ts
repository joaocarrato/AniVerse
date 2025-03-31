import {RecentAnimes, RecentAnimesAPI, Entry} from './recentAnimesTypes';

function toRecentAnimes(recommendation: RecentAnimesAPI): RecentAnimes[] {
  return recommendation.entry.map((entry: Entry) => ({
    id: entry.mal_id,
    images: {
      default: entry.images.jpg.image_url,
      small: entry.images.jpg.small_image_url,
      largeImage: entry.images.jpg.large_image_url,
    },
    title: entry.title,
    content: recommendation.content,
  }));
}

function toRecentAnimesList(apiResponse: RecentAnimesAPI[]): RecentAnimes[] {
  return apiResponse.flatMap(recommendation => toRecentAnimes(recommendation));
}

export const recentAnimesAdapter = {
  toSingle: toRecentAnimes,
  toList: toRecentAnimesList,
};
