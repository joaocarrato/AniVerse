import {Episodes, EpisodesAPI} from './episodesTypes';

function toEpisode(episodesApi: EpisodesAPI): Episodes {
  return {
    id: episodesApi.mal_id,
    url: episodesApi.url ?? null,
    title: episodesApi.title,
    titleJapanese: episodesApi.title_japanese,
    titleRomanji: episodesApi.title_romanji,
    aired: episodesApi.aired,
    filler: episodesApi.filler,
    recap: episodesApi.recap,
    score: episodesApi.score,
  };
}

export const episodesAdapter = {toEpisode};
