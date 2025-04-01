import {Anime} from '@domain';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {persist} from 'zustand/middleware';

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
      name: 'favorite-store',
      storage: {
        getItem: async name => {
          const value = await AsyncStorage.getItem(name);
          return value ? JSON.parse(value) : null;
        },
        setItem: async (name, value) => {
          await AsyncStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: AsyncStorage.removeItem,
      },
    },
  ),
);
