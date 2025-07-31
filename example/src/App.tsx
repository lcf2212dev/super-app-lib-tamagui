import { Text, View, StyleSheet } from 'react-native';
import { TamaguiProvider } from '@tamagui/core';
import { multiply, DscButton, tamaguiConfig } from 'super-app-lib-tamagui';

const result = multiply(3, 7);

export default function App() {
  const handlePress = () => console.log("Button Pressed");
  
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      <View style={styles.container}>
        <Text>Result: {result}</Text>
        <DscButton onPress={handlePress} />
      </View>
    </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
