import { type ButtonTypeConfig } from '../../Button.model';

export const outlineTypeConfig: ButtonTypeConfig = {
  base: {
    bg: 'transparent',
    color: '$color9',
    borderColor: '$color9',
    borderWidth: 1,
  },
  hover: {
    bg: '$color2',
    color: '$color9',
    borderColor: '$color9',
  },
  press: {
    bg: '$color2',
    color: '$color9',
    borderColor: '$color9',
  },
  focus: {
    bg: '$color2',
    color: '$color9',
    borderColor: '$color12',
  },
  disabled: {
    bg: 'transparent',
    color: '$color5',
    borderColor: '$color5',
  },
  loading: {
    bg: 'transparent',
    color: '$color9',
    borderColor: '$color9',
  },
} as const;
