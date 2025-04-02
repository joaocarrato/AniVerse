import React from 'react';

import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';

import {TextInput, TextInputProps} from '../TextInput/TextInput';

type SRTextInputProps = Omit<
  TextInputProps,
  'value' | 'onChangeText' | 'errorMessage'
>;

export function FormTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...rest
}: SRTextInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field, fieldState}) => (
        <TextInput
          value={field.value}
          onChangeText={field.onChange}
          errorMessage={fieldState.error?.message}
          {...rest}
        />
      )}
    />
  );
}
