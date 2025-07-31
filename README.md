# Super App Lib Tamagui

Uma biblioteca React Native com componentes Tamagui personalizados.

## Instalação

```bash
npm install super-app-lib-tamagui
# ou
yarn add super-app-lib-tamagui
```

## Dependências

Esta biblioteca requer as seguintes peer dependencies:

```bash
npm install react react-native
# ou
yarn add react react-native
```

## Uso

### Configuração

A biblioteca já inclui uma configuração Tamagui pré-configurada. Para usar os componentes, você precisa envolver sua aplicação com o `TamaguiProvider`:

```tsx
import React from 'react';
import { TamaguiProvider } from '@tamagui/core';
import { tamaguiConfig } from 'super-app-lib-tamagui';
import { YourApp } from './YourApp';

export default function App() {
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      <YourApp />
    </TamaguiProvider>
  );
}
```

### Componentes Disponíveis

#### DscButton

Um botão personalizado baseado no Tamagui Button:

```tsx
import React from 'react';
import { View } from 'react-native';
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
