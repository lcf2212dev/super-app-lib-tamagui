import type { Preview } from '@storybook/react-native-web-vite';
import React from 'react';
import { TamaguiProvider } from '@tamagui/core';
import { config } from '../src/tamagui.config';

const preview: Preview = {
  decorators: [
    (Story) => (
      <TamaguiProvider config={config}>
        <Story />
      </TamaguiProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
