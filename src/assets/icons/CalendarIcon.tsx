import React from 'react';

import Svg, {Path} from 'react-native-svg';

import {IconBase} from '@components';

export function CalendarIcon({size = 20, color = 'black'}: IconBase) {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      color={color}
      fill="none">
      <Path
        d="M18 2V4M6 2V4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 17L9.99999 13.3472C9.99999 13.1555 9.86325 13 9.69458 13H9M13.6297 17L14.9842 13.3492C15.0475 13.1785 14.9128 13 14.7207 13H13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 8H18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
