import { createTamagui } from '@tamagui/core';
import { config } from '@tamagui/config/v3';

const fonts = {
  body: {
    family: 'LibertinusSerif',
    size: {
      1: 11,
      2: 12,
      3: 13,
      4: 14,
      5: 16,
      6: 18,
      7: 20,
      8: 22,
      9: 30,
      10: 42,
      11: 52,
      12: 62,
      13: 72,
      14: 92,
      15: 114,
      16: 124,
    },
    transform: {
      6: 'uppercase' as const,
      7: 'none' as const,
    },
    weight: {
      1: '400', // Regular
      4: '400', // Regular
      6: '600', // SemiBold
      7: '700', // Bold
    },
    color: {
      1: '$colorFocus',
      2: '$color',
    },
    letterSpacing: {
      1: 0,
      2: -0.15,
      5: -0.69,
      6: -0.972,
      7: -1.17,
      8: -1.41,
      9: -2.25,
      10: -3.42,
      12: -4.62,
      14: -5.61,
      15: -6.61,
      16: -7.23,
    },
    face: {
      400: { normal: 'LibertinusSerif-Regular', italic: 'LibertinusSerif-Italic' },
      600: { normal: 'LibertinusSerif-SemiBold', italic: 'LibertinusSerif-SemiBoldItalic' },
      700: { normal: 'LibertinusSerif-Bold', italic: 'LibertinusSerif-BoldItalic' },
    },
  },
  heading: {
    family: 'LibertinusSerif',
    size: {
      5: 20,
      6: 24,
      7: 30,
      8: 42,
      9: 52,
      10: 62,
      11: 72,
      12: 92,
    },
    transform: {
      6: 'uppercase' as const,
      7: 'none' as const,
    },
    weight: {
      6: '600', // SemiBold
      7: '700', // Bold
    },
    color: {
      1: '$colorFocus',
      2: '$color',
    },
    letterSpacing: {
      1: 0,
      2: -0.15,
      5: -0.69,
      6: -0.972,
      7: -1.17,
      8: -1.41,
      9: -2.25,
      10: -3.42,
      12: -4.62,
      14: -5.61,
      15: -6.61,
      16: -7.23,
    },
    face: {
      600: { normal: 'LibertinusSerif-SemiBold', italic: 'LibertinusSerif-SemiBoldItalic' },
      700: { normal: 'LibertinusSerif-Bold', italic: 'LibertinusSerif-BoldItalic' },
    },
  },
};

const tamaguiConfig = createTamagui({
  ...config,
  fonts: {
    ...config.fonts,
    body: fonts.body,
    heading: fonts.heading,
  },
  defaultFont: 'body',
});

export default tamaguiConfig;

export type AppConfig = typeof tamaguiConfig;

declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends AppConfig {}
}