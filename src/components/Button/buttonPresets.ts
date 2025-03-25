import {ButtonPresets, TouchableBoxProps} from '@components';
import {ThemeColors} from '@theme';

export interface ButtonUI {
  container: TouchableBoxProps;
  content: ThemeColors;
}

export const buttonPresets: Record<ButtonPresets, ButtonUI> = {
  enabled: {
    container: {
      backgroundColor: 'primary',
    },
    content: 'textPrimary',
  },
  disabled: {
    container: {
      backgroundColor: 'disabledBackground',
    },
    content: 'disabledContrast',
  },
};
