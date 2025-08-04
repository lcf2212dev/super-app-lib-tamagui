import React from 'react';
import { Button } from '@tamagui/button';
import { Theme } from '@tamagui/core';
import { type DscButtonProps } from './Button.model';
import { sizeConfigs, typeConfigs } from './configs';
import { type ButtonTypeConfig, type ButtonStyleConfig } from './Button.model';
import { transformIconSize } from '../../utils/icon-size-transformer';

const DscButtonComponent: React.FC<DscButtonProps> = ({
  onPress,
  children = 'Press Me',
  color = 'highlight',
  size = 'default',
  type = 'plain',
  disabled = false,
  loading = false,
  icon,
  iconAfter,
}) => {
  const sizeStyles = sizeConfigs[size];
  const typeConfig = typeConfigs[type];
  const stateStyles = getStateStyles(typeConfig, disabled, loading);
  const interactionStyles = buildInteractionStyles(
    typeConfig,
    disabled,
    loading
  );

  // Aplicar tamanhos específicos nos ícones
  const processedIcon = transformIconSize(icon, sizeStyles.iconSize);
  const processedIconAfter = transformIconSize(iconAfter, sizeStyles.iconSize);

  const buttonProps = {
    onPress,
    disabled: disabled || loading,
    icon: processedIcon,
    iconAfter: processedIconAfter,
    borderRadius: '$12',
    ...sizeStyles,
    ...stateStyles,
    ...interactionStyles,
  };

  return (
    <Theme name={color === 'accent' ? 'accent' : null}>
      <Button {...(buttonProps as any)}>{loading ? '...' : children}</Button>
    </Theme>
  );
};

const getStateStyles = (
  typeConfig: ButtonTypeConfig,
  disabled: boolean,
  loading: boolean
): ButtonStyleConfig => {
  if (loading) return typeConfig.loading;
  if (disabled) return typeConfig.disabled;
  return typeConfig.base;
};

const buildInteractionStyles = (
  typeConfig: ButtonTypeConfig,
  disabled: boolean,
  loading: boolean
) => {
  if (disabled || loading) return {};

  return {
    hoverStyle: typeConfig.hover,
    pressStyle: typeConfig.press,
    focusStyle: typeConfig.focus,
  };
};

// Memoização com comparação otimizada para performance
const DscButton = React.memo(DscButtonComponent, (prevProps, nextProps) => {
  return (
    prevProps.children === nextProps.children &&
    prevProps.color === nextProps.color &&
    prevProps.size === nextProps.size &&
    prevProps.type === nextProps.type &&
    prevProps.disabled === nextProps.disabled &&
    prevProps.loading === nextProps.loading &&
    prevProps.onPress === nextProps.onPress &&
    prevProps.icon === nextProps.icon &&
    prevProps.iconAfter === nextProps.iconAfter
  );
});

export default DscButton;
