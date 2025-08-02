import { View, StyleSheet } from 'react-native';
import { TamaguiProvider, Text, Stack } from '@tamagui/core';
import { Button } from '@tamagui/button';
import { useFonts } from 'expo-font';
import { multiply, DscButton, tamaguiConfig } from 'super-app-lib-tamagui';
import { fontAssets } from '../../src/assets/fonts';
import { Heart, Settings } from 'iconoir-react-native';

const result = multiply(3, 7);

export default function App() {
  const [fontsLoaded] = useFonts(fontAssets);
  
  if (!fontsLoaded) {
    return null;
  }
  
  const handlePress = () => console.log("Button Pressed");
  const handleHeartPress = () => console.log("Heart Button Pressed");
  const handleSettingsPress = () => console.log("Settings Button Pressed");
  
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      <View style={styles.container}>
        <Text>Result: {result}</Text>
        <DscButton onPress={handlePress} />
        
        <Stack marginTop="$4" space="$3">
          <Button 
            theme="blue" 
            icon={Heart}
            onPress={handleHeartPress}
          >
            Favoritar
          </Button>
          
          <Button 
            theme="gray" 
            variant="outlined"
            icon={<Settings color="$color" />}
            onPress={handleSettingsPress}
          >
            Configurações
          </Button>
        </Stack>
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
