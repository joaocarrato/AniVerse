import {render, screen} from 'test-utils';

import {FullAnimeHeader} from '../FullAnimeHeader';

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');
  return {
    ...originalModule,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('<FullAnimeHeader />', () => {
  it('should render component', () => {
    render(<FullAnimeHeader title="Title" />);

    screen.debug();
  });

  //   it('Should go back to previous page', () => {
  //     const title = 'Top Hits Anime';
  //     render(<FullAnimeHeader title={title} />);

  //     const buttonElement = screen.getByTestId(/button/i);
  //     fireEvent.press(buttonElement);

  //     // expect(mockedNavigate).toHaveBeenCalledTimes(1);

  //     screen.debug();
  //   });
});
