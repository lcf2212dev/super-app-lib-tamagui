import { View, StyleSheet } from 'react-native';
import { TamaguiProvider, Text } from '@tamagui/core';
import { useFonts } from 'expo-font';
import { multiply, DscButton, tamaguiConfig } from 'super-app-lib-tamagui';
import { fontAssets } from '../../src/assets/fonts';

const result = multiply(3, 7);

export default function App() {
  const [fontsLoaded] = useFonts(fontAssets);
  
  if (!fontsLoaded) {
    return null;
  }
  
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
