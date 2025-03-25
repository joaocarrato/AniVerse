import React from 'react';

import {TouchableBox, Icon, Text, Box} from '@components';

import {ScreenProps} from '../Screen';

type Props = Pick<ScreenProps, 'canGoBack' | 'title' | 'iconName'>;
export function ScreenHeader({canGoBack, title, iconName}: Props) {
  return (
    <>
      {canGoBack && (
        <Box
          mb="s12"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <TouchableBox flexDirection="row" alignItems="center">
            <Icon name="arrowLeft" color="primary" />
            {title && (
              <Text preset="paragraphLarge" semiBold ml="s12">
                {title}
              </Text>
            )}
          </TouchableBox>
          {!iconName && <Box height={20} width={20} />}
          {iconName && (
            <Box>
              <Icon name={iconName} color="primary" />
            </Box>
          )}
        </Box>
      )}
    </>
  );
}
