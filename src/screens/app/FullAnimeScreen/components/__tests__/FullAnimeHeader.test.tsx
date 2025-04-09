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

  it('should display screen title', () => {
    const title = 'Top Hits anime';
    render(<FullAnimeHeader title={title} />);

    const textElement = screen.getByText(title);
    expect(textElement).toBeTruthy();
  });
});
