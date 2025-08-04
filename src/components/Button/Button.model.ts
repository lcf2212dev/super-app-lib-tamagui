import { type GestureResponderEvent } from 'react-native';
import { type GetProps } from '@tamagui/web';
import { Button } from '@tamagui/button';

export type ButtonSize = 'default' | 'small' | 'large';
export type ButtonColor = 'highlight' | 'accent';
export type ButtonType = 'plain' | 'chromeless' | 'outline';

export interface ButtonStyleConfig {
  bg?: string;
  color?: string;
  borderColor?: string;
  borderWidth?: number;
  chromeless?: boolean;
}

export interface ButtonTypeConfig {
  base: ButtonStyleConfig;
  hover: ButtonStyleConfig;
  press: ButtonStyleConfig;
  focus: ButtonStyleConfig;
  disabled: ButtonStyleConfig;
  loading: ButtonStyleConfig;
}

export interface ButtonSizeConfig {
  height: number;
  paddingHorizontal: number;
  fontSize: number;
  space: number;
}

type TamaguiButtonProps = GetProps<typeof Button>;
type IconProp = TamaguiButtonProps['icon'];

export interface DscButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  children?: React.ReactNode;
  color?: ButtonColor;
  size?: ButtonSize;
  type?: ButtonType;
  disabled?: boolean;
  loading?: boolean;
  icon?: IconProp;
  iconAfter?: IconProp;
}
