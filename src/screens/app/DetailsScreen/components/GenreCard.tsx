import React from 'react';

import {Box, Text} from '@components';

type Props = {
  name: string;
};

export function GenreCard({name}: Props) {
  return (
    <Box
      borderWidth={1}
      borderColor="hoverSecondary"
      p="s4"
      borderTopLeftRadius="s12"
      borderBottomRightRadius="s12"
      marginRight="s8">
      <Text preset="paragraphCaption" semiBold color="hoverSecondary">
        {name}
      </Text>
    </Box>
  );
}
