# Configuração de Fontes

Esta lib utiliza a fonte **LibertinusSerif** com diferentes pesos. A configuração varia dependendo do ambiente do projeto.

## Para projetos Expo

```tsx
// App.tsx
import { useFonts } from 'expo-font';
import { fontAssets } from 'super-app-lib-tamagui/fonts';

export default function App() {
  const [fontsLoaded] = useFonts(fontAssets);
  
  if (!fontsLoaded) {
    return <LoadingScreen />;
  }
  
  return <YourApp />;
}
```

## Para projetos Re.Pack (Webpack)

### 1. Configurar fonts no webpack.config.js:

```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(ttf|otf|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      }
    ]
  }
};
```

### 2. Criar arquivo CSS para fontes:

```css
/* fonts.css */
@font-face {
  font-family: 'LibertinusSerif-Regular';
  src: url('./assets/fonts/LibertinusSerif/LibertinusSerif-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'LibertinusSerif-Bold';
  src: url('./assets/fonts/LibertinusSerif/LibertinusSerif-Bold.ttf') format('truetype');
}

/* Adicionar outras variantes... */
```

### 3. Importar as fontes:

```tsx
// App.tsx
import './fonts.css'; // Para web
import { useTamaguiFonts } from 'super-app-lib-tamagui';

export default function App() {
  const { fontsLoaded } = useTamaguiFonts();
  
  if (!fontsLoaded) {
    return <LoadingScreen />;
  }
  
  return <YourApp />;
}
```

## Para projetos React Native CLI

### 1. Copiar fontes para:
- **Android**: `android/app/src/main/assets/fonts/`
- **iOS**: `ios/[ProjectName]/Fonts/`

### 2. Configurar react-native.config.js:

```javascript
// react-native.config.js
module.exports = {
  assets: ['./src/assets/fonts/LibertinusSerif/'],
};
```

### 3. Executar:

```bash
npx react-native link
```

### 4. Usar o hook:

```tsx
// App.tsx
import { useTamaguiFonts } from 'super-app-lib-tamagui';

export default function App() {
  const { fontsLoaded } = useTamaguiFonts();
  
  if (!fontsLoaded) {
    return <LoadingScreen />;
  }
  
  return <YourApp />;
}
```

## Fontes disponíveis

Os seguintes assets de fonte estão disponíveis via `super-app-lib-tamagui/fonts`:

```tsx
import {
  fontAssets,
  LibertinusSerifRegular,
  LibertinusSerifItalic,
  LibertinusSerifSemiBold,
  LibertinusSerifSemiBoldItalic,
  LibertinusSerifBold,
  LibertinusSerifBoldItalic
} from 'super-app-lib-tamagui/fonts';
```

## Hook useTamaguiFonts

O hook `useTamaguiFonts` é agnóstico de plataforma e retorna:

```tsx
const { fontsLoaded, error } = useTamaguiFonts();
```

- `fontsLoaded`: boolean indicando se as fontes foram carregadas
- `error`: qualquer erro que ocorreu durante o carregamento
