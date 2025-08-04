import { type ButtonTypeConfig } from '../../Button.model';

export const plainTypeConfig: ButtonTypeConfig = {
  base: {
    bg: '$color9',
    color: '$color1',
    borderColor: '$color9',
  },
  hover: {
    bg: '$color10',
    color: '$color1',
    borderColor: '$color10',
  },
  press: {
    bg: '$color8',
    color: '$color1',
    borderColor: '$color8',
  },
  focus: {
    bg: '$color9',
    color: '$color1',
    borderColor: '$color12',
  },
  disabled: {
    bg: '$color2',
    color: '$color5',
    borderColor: '$color2',
  },
  loading: {
    bg: '$color2',
    color: '$color9',
    borderColor: '$color2',
  },
} as const;
