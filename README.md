# Super App Lib Tamagui

Uma biblioteca React Native com componentes Tamagui personalizados, compatível com **Expo**, **Re.Pack** e **React Native CLI**.

## Instalação

```bash
npm install super-app-lib-tamagui
# ou
yarn add super-app-lib-tamagui
```

## Dependências Incluídas

Esta biblioteca já inclui as seguintes dependências:

- `@tamagui/core` - Sistema de design principal
- `@tamagui/button` - Componente Button do Tamagui
- `@tamagui/config` - Configuração padrão do Tamagui
- `iconoir-react-native` - Biblioteca de ícones SVG
- `react-native-svg` - Renderização de SVG

> **Importante**: Não instale versões diferentes dessas dependências no seu projeto para evitar conflitos.

## Configuração por Ambiente

### Para projetos Expo
Veja [FONTS.md](./FONTS.md#para-projetos-expo)

### Para projetos React Native CLI
Veja [FONTS.md](./FONTS.md#para-projetos-react-native-cli)

### Para projetos Re.Pack (Webpack)

**1. Configuração de fontes:** Veja [FONTS.md](./FONTS.md#para-projetos-repack-webpack)

**2. Configuração de SVG:** Adicione ao seu `webpack.config.js`:

```javascript
// webpack.config.js ou re.pack.config.js
const {getInitializationEntries} = require('@callstack/repack');

module.exports = {
  // ... outras configurações
  module: {
    rules: [
      // ... outras rules
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              native: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      // Garante compatibilidade com react-native-svg
      'react-native-svg': 'react-native-svg/lib/commonjs',
    },
  },
};
```

**3. Para Metro Resolver (se usar híbrido):** Adicione ao `metro.config.js`:

```javascript
// metro.config.js
module.exports = {
  transformer: {
    assetPlugins: ['expo-asset/tools/hashAssetFiles'],
  },
  resolver: {
    assetExts: ['bin', 'txt', 'jpg', 'png', 'json', 'svg'],
    sourceExts: ['js', 'json', 'ts', 'tsx', 'jsx'],
  },
};
```

## Uso

### Configuração

A biblioteca já inclui uma configuração Tamagui pré-configurada. Para usar os componentes, você precisa envolver sua aplicação com o `TamaguiProvider`:

```tsx
import React from 'react';
import { TamaguiProvider } from '@tamagui/core';
import { tamaguiConfig, useTamaguiFonts } from 'super-app-lib-tamagui';
import { YourApp } from './YourApp';

export default function App() {
  const { fontsLoaded } = useTamaguiFonts();
  
  if (!fontsLoaded) {
    return <LoadingScreen />; // Seu componente de loading
  }
  
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      <YourApp />
    </TamaguiProvider>
  );
}
```

### Fontes Globais

A lib está configurada para usar **LibertinusSerif** como fonte padrão global. Todos os componentes Tamagui automaticamente usarão esta fonte.

Para aproveitar a fonte global, use componentes do Tamagui ao invés do React Native:

```tsx
import { Text, View } from '@tamagui/core'; // ✅ Usará LibertinusSerif
// import { Text, View } from 'react-native'; // ❌ Não usará a fonte customizada

export function MyComponent() {
  return (
    <View>
      <Text>Este texto usará LibertinusSerif automaticamente</Text>
    </View>
  );
}
```

### Componentes Disponíveis

#### Ícones Iconoir

A biblioteca inclui todos os ícones do **Iconoir** prontos para uso:

```tsx
import React from 'react';
import { View, Stack } from '@tamagui/core';
import { Button } from '@tamagui/button';
import { Heart, Settings, Home, User } from 'iconoir-react-native';

export function MyComponent() {
  return (
    <Stack space="$4">
      <Button icon={<Heart color="red" size={20} />}>
        Favoritar
      </Button>
      
      <Button 
        variant="outlined"
        icon={<Settings color="$color" size={20} />}
      >
        Configurações
      </Button>
      
      {/* Ícones standalone */}
      <View>
        <Home color="$blue10" size={24} />
        <User color="$gray10" size={24} />
      </View>
    </Stack>
  );
}
```

**Ícones populares disponíveis:**
- **Navegação**: `Home`, `Menu`, `ArrowLeft`, `ArrowRight`, `Search`
- **Ações**: `Settings`, `Plus`, `Minus`, `Edit`, `Delete`, `Save`, `Check`, `X`
- **Social**: `Heart`, `HeartSolid`, `Star`, `User`, `Users`, `Share`
- **Comunicação**: `Bell`, `Mail`, `Phone`, `Message`
- **Sistema**: `Download`, `Upload`, `Lock`, `Eye`, `EyeOff`

E [muitos outros ícones](https://iconoir.com/) disponíveis!

#### DscButton

Um botão personalizado baseado no Tamagui Button:

```tsx
import React from 'react';
import { View } from '@tamagui/core';
import { DscButton } from 'super-app-lib-tamagui';

export function MyComponent() {
  const handlePress = () => {
    console.log('Botão pressionado!');
  };

  return (
    <View>
      <DscButton onPress={handlePress}>
        Clique aqui
      </DscButton>
      
      <DscButton 
        onPress={handlePress}
        color="blue"
        disabled={false}
        accessibilityLabel="Botão personalizado"
      >
        Botão azul
      </DscButton>
    </View>
  );
}
```

#### Props do DscButton

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `onPress` | `(event: GestureResponderEvent) => void` | - | Função chamada quando o botão é pressionado |
| `children` | `React.ReactNode` | `"Press Mee"` | Conteúdo do botão |
| `disabled` | `boolean` | `false` | Se o botão está desabilitado |
| `color` | `string` | `"red"` | Cor de fundo do botão |
| `accessibilityLabel` | `string` | `"A Button"` | Label para acessibilidade |

### Funções Utilitárias

#### multiply

Uma função utilitária para multiplicação:

```tsx
import { multiply } from 'super-app-lib-tamagui';

const result = multiply(3, 7); // retorna 21
```

## Exemplo Completo

```tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TamaguiProvider } from '@tamagui/core';
import { DscButton, tamaguiConfig, multiply } from 'super-app-lib-tamagui';

const result = multiply(5, 4);

export default function App() {
  const handleButtonPress = () => {
    console.log('Botão da lib foi pressionado!');
  };

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      <View style={styles.container}>
        <Text>Resultado da multiplicação: {result}</Text>
        <DscButton 
          onPress={handleButtonPress}
          color="green"
        >
          Botão da Lib
        </DscButton>
      </View>
    </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
});
```

## Temas

A biblioteca usa a configuração padrão do Tamagui v3. Você pode usar os temas:

- `light` (padrão)
- `dark`

```tsx
<TamaguiProvider config={tamaguiConfig} defaultTheme="dark">
  {/* Sua aplicação */}
</TamaguiProvider>
```

## Desenvolvimento

Para contribuir com a biblioteca:

1. Clone o repositório
2. Instale as dependências: `yarn install`
3. Execute o exemplo: `yarn example start`
4. Faça suas alterações
5. Execute os testes: `yarn test`
6. Faça o build: `yarn prepare`

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
