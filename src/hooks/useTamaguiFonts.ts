import { useEffect, useState } from 'react';
import { Platform } from 'react-native';

/**
 * Hook para gerenciar o carregamento de fontes do Tamagui
 * Compatible with Expo, Re.Pack, and React Native CLI projects
 */
export function useTamaguiFonts() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    const loadFonts = async () => {
      try {
        // Para web/Re.Pack, as fontes devem ser carregadas via CSS ou configuração do Webpack
        if (Platform.OS === 'web') {
          setFontsLoaded(true);
          return;
        }
        
        // Para React Native nativo, assumir que as fontes foram configuradas
        // no android/app/src/main/assets/fonts/ e ios/[ProjectName]/Fonts/
        setFontsLoaded(true);
      } catch (err) {
        setError(err as Error);
      }
    };
    
    loadFonts();
  }, []);
  
  return { fontsLoaded, error };
}

export default useTamaguiFonts;
