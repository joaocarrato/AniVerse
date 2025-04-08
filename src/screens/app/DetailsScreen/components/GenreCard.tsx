import React from 'react';

import {Box, BoxProps, Text} from '@components';

type Props = {
  name: string;
};

export function GenreCard({name, ...rest}: Props & BoxProps) {
  return (
    <Box
      borderWidth={1}
      borderColor="hoverSecondary"
      p="s4"
      borderTopLeftRadius="s12"
      borderBottomRightRadius="s12"
      marginRight="s8"
      {...rest}>
      <Text preset="paragraphCaption" semiBold color="hoverSecondary">
        {name}
      </Text>
    </Box>
  );
}
