import {IconProps} from '@components';

import {AppTabBottomTabParamList} from './AppTabNavigator';

export const mapScreenToProps: Record<
  keyof AppTabBottomTabParamList,
  {
    title: string;
    icon: {
      focused: IconProps['name'];
      unfocused: IconProps['name'];
    };
  }
> = {
  HomeScreen: {
    title: 'Home',
    icon: {
      focused: 'homeFill',
      unfocused: 'home',
    },
  },
  SearchScreen: {
    title: 'Search',
    icon: {
      focused: 'search',
      unfocused: 'search',
    },
  },
  FavoritesScreen: {
    title: 'Favorites',
    icon: {
      focused: 'bookmarkFill',
      unfocused: 'bookmark',
    },
  },
};
