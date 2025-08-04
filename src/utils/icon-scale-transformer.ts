import React from 'react';

/**
 * Icon Scale Transformer - Workaround para contornar bugs do Tamagui com scaleIcon
 * 
 * Issues relacionadas:
 * - #2961: "React does not recognize the scaleIcon prop on DOM element"
 * - #2935: Problemas com scaleIcon em vários componentes  
 * - #3268: Button.Icon não aplica estilos de variantes corretamente
 * 
 * O Tamagui só aplica scaleIcon corretamente em seus próprios ícones (IconComponent).
 * SVGs externos (como Iconoir) são ignorados pelo sistema de escala.
 * 
 * Esta função detecta o tipo de ícone e aplica a escala manualmente:
 * - ForwardRef (Iconoir): usa width/height
 * - Function Tamagui: usa prop size
 * - React Element: cloneElement com props corretas
 * 
 * TODO: Remover quando Tamagui corrigir suporte nativo para SVGs externos
 */
export const transformIconScale = (icon: any, scaleIcon: number): any => {
  if (!icon) return icon;

  // ForwardRefExoticComponent (Iconoir passado como icon={Heart})
  if (icon.$$typeof === Symbol.for('react.forward_ref')) {
    const calculatedSize = 20 * scaleIcon;
    return React.createElement(icon, { 
      width: calculatedSize, 
      height: calculatedSize 
    });
  }

  // Função/componente (LucideHeart passado como icon={LucideHeart})
  if (typeof icon === 'function') {
    const isTamaguiIcon = icon.displayName?.includes('themed');
    const baseSize = isTamaguiIcon ? 16 : 20;
    const calculatedSize = baseSize * scaleIcon;
    
    if (isTamaguiIcon) {
      return (props: any) => React.createElement(icon, { 
        ...props, 
        size: calculatedSize 
      });
    } else {
      return React.createElement(icon, { 
        width: calculatedSize, 
        height: calculatedSize 
      });
    }
  }

  // React Element (ícone passado como <Icon />)
  if (React.isValidElement(icon)) {
    const isTamaguiIcon = (icon.type as any).displayName?.includes('themed');
    const baseSize = isTamaguiIcon ? 16 : 20;
    const calculatedSize = baseSize * scaleIcon;
    
    if (isTamaguiIcon) {
      return React.cloneElement(icon, {
        ...(icon.props as any),
        size: calculatedSize,
      });
    } else {
      return React.cloneElement(icon, {
        ...(icon.props as any),
        width: calculatedSize,
        height: calculatedSize,
      });
    }
  }
  
  return icon;
};
