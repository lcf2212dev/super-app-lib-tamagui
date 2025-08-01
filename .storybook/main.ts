import type { StorybookConfig } from '@storybook/react-native-web-vite';

import { join, dirname } from "path"

/**
* This function is used to resolve the absolute path of a package.
* It is needed in projects that use Yarn PnP or are set up within a monorepo.
*/
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}
const config: StorybookConfig = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    '@storybook/addon-docs',
  ],
  "framework": {
    "name": getAbsolutePath('@storybook/react-native-web-vite'),
    "options": {}
  },
  async viteFinal(config, { configType }) {
    // Merge custom vite config
    const { mergeConfig } = await import('vite');
    const customConfig = await import('../vite.config.js');
    
    return mergeConfig(config, customConfig.default);
  },
};
export default config;