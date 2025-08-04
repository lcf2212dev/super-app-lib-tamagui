import React from 'react';

/**
 * Icon Size Transformer - Workaround para contornar bugs do Tamagui
 * 
 * Issues relacionadas do Tamagui:
 * - #2961: "React does not recognize the scaleIcon prop on DOM element"
 * - #2935: Problemas com scaleIcon em vários componentes  
 * - #3268: Button.Icon não aplica estilos de variantes corretamente
 * 
 * Este transformer aplica tamanhos absolutos diretamente para contornar
 * os bugs do Tamagui com ícones externos.
 * 
 * Detecta o tipo de ícone e aplica a propriedade correta:
 * - Ícones Tamagui (Lucide): prop 'size'
 * - Ícones externos (Iconoir): props 'width' e 'height'
 * 
 * TODO: Remover quando Tamagui corrigir suporte nativo para SVGs externos
 */
export const transformIconSize = (icon: any, iconSize: number): any => {
  if (!icon) return icon;

  // ForwardRefExoticComponent (Iconoir passado como icon={Heart})
  if (icon.$$typeof === Symbol.for('react.forward_ref')) {
    return React.createElement(icon, { 
      width: iconSize, 
      height: iconSize 
    });
  }

  // Função/componente (LucideHeart passado como icon={LucideHeart})
  if (typeof icon === 'function') {
    const isTamaguiIcon = icon.displayName?.includes('themed');
    
    if (isTamaguiIcon) {
      return (props: any) => React.createElement(icon, { 
        ...props, 
        size: iconSize 
      });
    } else {
      return React.createElement(icon, { 
        width: iconSize, 
        height: iconSize 
      });
    }
  }

  // React Element (ícone passado como <Icon />)
  if (React.isValidElement(icon)) {
    const isTamaguiIcon = (icon.type as any).displayName?.includes('themed');
    
    if (isTamaguiIcon) {
      return React.cloneElement(icon, {
        ...(icon.props as any),
        size: iconSize,
      });
    } else {
      return React.cloneElement(icon, {
        ...(icon.props as any),
        width: iconSize,
        height: iconSize,
      });
    }
  }
  
  return icon;
};
