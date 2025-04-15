import {Anime} from '@domain';
import {create} from 'zustand';
import {persist} from 'zustand/middleware';

import {storage} from '../storage/storage';

interface UseFavoriteProps {
  animes: Anime[];
  addFavorite: (anime: Anime) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

export const useFavoriteStore = create<UseFavoriteProps>()(
  persist(
    (set, get) => ({
      animes: [],
      addFavorite: anime => {
        const exists = get().animes.some(a => a.id === anime.id);
        if (!exists) {
          set(state => ({animes: [...state.animes, anime]}));
        }
      },
      removeFavorite: id =>
        set(state => ({
          animes: state.animes.filter(anime => anime.id !== id),
        })),
      isFavorite: id => get().animes.some(a => a.id === id),
    }),
    {
      name: '@Favorites',
      storage: storage,
    },
  ),
);
