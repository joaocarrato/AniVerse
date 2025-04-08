import {fireEvent, render, screen} from 'test-utils';

import {HomeSectionTitle} from '../HomeSectionTitle';

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

describe('<HomeSectionTitle />', () => {
  it('should render component', () => {
    render(<HomeSectionTitle title="Home Section Title" />);

    screen.debug();
  });

  it('Should display see all text', () => {
    render(<HomeSectionTitle title="Home Section title" />);

    const seeAllElement = screen.getByText(/see all/i);
    expect(seeAllElement).toBeTruthy();
  });

  it('should navigates to FullAnimeScreen when pressing the see all link', () => {
    const title = 'Home Section Title';
    render(<HomeSectionTitle title={title} />);

    const seeAllElement = screen.getByText(/see all/i);

    fireEvent.press(seeAllElement);

    // expect call navigate function
    expect(mockedNavigate).toHaveBeenCalledWith('FullAnimeScreen', {
      title: title,
    });
  });
});
