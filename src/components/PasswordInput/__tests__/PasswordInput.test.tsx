import {fireEvent, render, screen} from 'test-utils';

import {IconProps, PasswordInput} from '@components';

describe('<PasswordInput />', () => {
  it('starts with hidden password', () => {
    const mockedOnPress = jest.fn();

    render(
      <PasswordInput
        label="Password"
        value="123456"
        placeholder="Password"
        onChangeText={mockedOnPress}
      />,
    );

    const inputElement = screen.getByPlaceholderText(/password/i);
    expect(inputElement.props.secureTextEntry).toBeTruthy();

    // screen.debug();
  });

  test('when pressing the eye icon, it should show the password and change to the eye off icon', () => {
    const mockedOnPress = jest.fn();

    render(
      <PasswordInput
        label="Password"
        value="123456"
        placeholder="Password"
        onChangeText={mockedOnPress}
      />,
    );

    const eyeIcon: IconProps['name'] = 'eyeOn';
    fireEvent.press(screen.getByTestId(eyeIcon));

    const eyeOffIcon: IconProps['name'] = 'eyeOff';
    const eyeOffIconElement = screen.getByTestId(eyeOffIcon);
    expect(eyeOffIconElement).toBeTruthy();

    const inputElement = screen.getByPlaceholderText(/password/i);
    expect(inputElement.props.secureTextEntry).toBeFalsy();
  });
});
