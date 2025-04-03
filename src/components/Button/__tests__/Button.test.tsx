import React from 'react';
import {StyleSheet} from 'react-native';

import {render, fireEvent, screen} from 'test-utils';

import {Button, ButtonProps} from '@components';
import {theme} from '@theme';

function renderComponent(props?: Partial<ButtonProps>) {
  render(<Button title="Button title" {...props} />);

  const textElement = screen.getByText(/button title/i);

  return {
    textElement,
  };
}

describe('<Button />', () => {
  it('should call onPress function when pressed', () => {
    const mockedOnPress = jest.fn();

    const {textElement} = renderComponent({onPress: mockedOnPress});

    fireEvent.press(textElement);

    expect(mockedOnPress).toHaveBeenCalled();
  });

  it('should not call onPress function when is disabled and is pressed', () => {
    const mockedOnPress = jest.fn();

    const {textElement} = renderComponent({
      onPress: mockedOnPress,
      disabled: true,
    });

    fireEvent.press(textElement);

    expect(mockedOnPress).not.toHaveBeenCalled();
  });

  it('should not call onPress function when is loading and is pressed', () => {
    const mockedOnPress = jest.fn();

    render(
      <Button
        title="button title"
        testID="ButtonTestID"
        onPress={mockedOnPress}
        disabled
      />,
    );

    const testID = screen.getByTestId(/ButtonTestID/i);

    fireEvent.press(testID);

    expect(mockedOnPress).not.toHaveBeenCalled();
  });

  test('the title should be gray if button is disabled', () => {
    render(<Button title="Button title" disabled />);

    const textElement = screen.getByText(/button title/i);

    const titleStyle = StyleSheet.flatten(textElement.props.style);

    expect(titleStyle.color).toEqual(theme.colors.disabledText);
  });
});
