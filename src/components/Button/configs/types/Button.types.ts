import { type ButtonType, type ButtonTypeConfig } from '../../Button.model';
import { chromelessTypeConfig } from './chromeless.type';
import { outlineTypeConfig } from './outline.type';
import { plainTypeConfig } from './plain.type';

export const typeConfigs: Record<ButtonType, ButtonTypeConfig> = {
  plain: plainTypeConfig,
  chromeless: chromelessTypeConfig,
  outline: outlineTypeConfig,
} as const;
