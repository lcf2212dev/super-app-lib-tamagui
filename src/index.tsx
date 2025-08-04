export { DscButton } from './components/Button';
export type {
  ButtonSize,
  ButtonColor,
  ButtonType,
  ButtonStyleConfig,
  ButtonTypeConfig,
  ButtonSizeConfig,
  DscButtonProps,
} from './components/Button';
export { config as tamaguiConfig } from './tamagui.config';
export { default as useTamaguiFonts } from './hooks/useTamaguiFonts';
export { themes } from './themes';
export type { Themes } from './themes';

export function multiply(a: number, b: number): number {
  return a * b;
}
