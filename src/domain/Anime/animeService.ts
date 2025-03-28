import {animeAdapter} from './animeAdapter';
import {animeApi} from './animeApi';
import {Anime} from './animeTypes';

async function getAnime(id: number): Promise<Anime> {
  const response = await animeApi.getAnime(id);
  return animeAdapter.toAnime(response);
}

export const animeService = {getAnime};
