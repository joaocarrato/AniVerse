import React, {useState} from 'react';

import {Box} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {TextInput, TextInputProps} from '../TextInput/TextInput';

type Props = Omit<
  TextInputProps,
  'rightComponent' | 'leftComponent' | 'secureTextEntry'
>;

export function PasswordInput(props: Props) {
  const [isSecureText, setIsSecureText] = useState<boolean>(true);

  function handleSecureText() {
    setIsSecureText(prev => !prev);
  }
  return (
    <Box>
      <TextInput
        secureTextEntry={isSecureText}
        autoCapitalize="none"
        rightComponent={
          <Icon
            name={isSecureText ? 'eyeOn' : 'eyeOff'}
            onPress={handleSecureText}
            color="disabledContrast"
          />
        }
        {...props}
      />
    </Box>
  );
}
