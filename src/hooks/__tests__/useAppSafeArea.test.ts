import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';
import {AppProviders, renderHook} from 'test-utils';

import {theme} from '@theme';

import {useAppSafeArea} from '../useAppSafeArea';

jest.mock('react-native-safe-area-context');

const mockedUseSafeAreaInsets = jest.mocked(useSafeAreaInsets);

describe('useAppSafeArea', () => {
  test('when safe area is less than minimum requirement, it returns the minimum requirement', () => {
    mockedUseSafeAreaInsets.mockImplementationOnce(
      () => ({top: 5, bottom: 5} as EdgeInsets),
    );
    const {result} = renderHook(() => useAppSafeArea(), {
      wrapper: AppProviders,
    });

    expect(result.current.top).toEqual(theme.spacing.s20);
    expect(result.current.bottom).toEqual(theme.spacing.s20);
  });

  test('when safe area is less than minimum requirement, it returns the safe area', () => {
    mockedUseSafeAreaInsets.mockImplementationOnce(
      () => ({top: 40, bottom: 40} as EdgeInsets),
    );
    const {result} = renderHook(() => useAppSafeArea(), {
      wrapper: AppProviders,
    });

    expect(result.current.top).toEqual(40);
    expect(result.current.bottom).toEqual(40);
  });
});
