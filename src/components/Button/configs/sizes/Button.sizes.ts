import { type ButtonSize, type ButtonSizeConfig } from '../../Button.model';

export const sizeConfigs: Record<ButtonSize, ButtonSizeConfig> = {
  small: { height: 32, paddingHorizontal: 12, fontSize: 12, space: 8, iconSize: 13 },
  default: { height: 40, paddingHorizontal: 16, fontSize: 14, space: 12, iconSize: 16 },
  large: { height: 48, paddingHorizontal: 24, fontSize: 16, space: 16, iconSize: 20 },
} as const;
