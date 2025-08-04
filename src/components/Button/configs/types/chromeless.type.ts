import { type ButtonTypeConfig } from '../../Button.model';

export const chromelessTypeConfig: ButtonTypeConfig = {
  base: {
    bg: 'transparent',
    color: '$color9',
    borderColor: 'transparent',
    chromeless: true,
  },
  hover: {
    bg: '$color3',
    color: '$color10',
    borderColor: 'transparent',
  },
  press: {
    bg: '$color4',
    color: '$color8',
    borderColor: 'transparent',
  },
  focus: {
    bg: '$color3',
    color: '$color12',
    borderColor: 'transparent',
  },
  disabled: {
    bg: 'transparent',
    color: '$color5',
    borderColor: 'transparent',
  },
  loading: {
    bg: 'transparent',
    color: '$color9',
    borderColor: 'transparent',
  },
} as const;
