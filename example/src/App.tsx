import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { TamaguiProvider } from '@tamagui/core';
import { useFonts } from 'expo-font';
import { tamaguiConfig } from 'super-app-lib-tamagui';
import { fontAssets } from '../../src/assets/fonts';
import DscButton from '../../src/components/Button/Button';
import {
  Heart,
  Settings,
  Download,
  ArrowRight,
  Plus,
  Edit,
} from 'iconoir-react-native';
import { Button } from '@tamagui/button';
import { Heart as LucideHeart } from '@tamagui/lucide-icons';

export default function App() {
  const [fontsLoaded] = useFonts(fontAssets);

  const handlePress = () => {
    console.log('Button pressed');
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        <Button icon={<LucideHeart size="$4" />}>
    Hello world
  </Button>
        <Button icon={<LucideHeart size={8} />} scaleIcon={0.1}>Small Lucide Heart</Button>
        <Button icon={<LucideHeart size='$4' />} scaleIcon={1.0}>Normal Lucide Heart</Button>
        <Button icon={<LucideHeart size='$4' />} scaleIcon={2.0}>Large Lucide Heart</Button>

        <Button icon={<Plus size='$4' />} scaleIcon={0.1}>Small Plus</Button>
        <Button icon={<Plus />} scaleIcon={1.0}>Normal Plus</Button>
        <Button icon={<Plus />} scaleIcon={2.0}>Large Plus</Button>

        <Text style={styles.sectionTitle}>Icon Scaling Test</Text>
        <Text style={styles.subTitle}>DscButton with different sizes (scaleIcon auto-applied)</Text>
        <View style={styles.section}>
          <DscButton onPress={handlePress} color="highlight" icon={<Heart />} size="small">
            Iconoir Heart (Small)
          </DscButton>
          <DscButton onPress={handlePress} color="highlight" icon={Heart} size="small">
            Iconoir Heart 2 (Small)
          </DscButton>
          <DscButton onPress={handlePress} color="highlight" icon={LucideHeart} size="small">
            Lucide Heart (Small)
          </DscButton>
          <DscButton onPress={handlePress} color="highlight" icon={Heart} size="default">
            Iconoir Heart (Default)
          </DscButton>
          <DscButton onPress={handlePress} color="highlight" icon={LucideHeart} size="default">
            Lucide Heart (Default)
          </DscButton>
          <DscButton onPress={handlePress} color="highlight" icon={Heart} size="large">
            Iconoir Heart (Large)
          </DscButton>
          <DscButton onPress={handlePress} color="highlight" icon={LucideHeart} size="large">
            Lucide Heart (Large)
          </DscButton>
        </View>

        <Text style={styles.sectionTitle}>Highlight Buttons</Text>

        <Text style={styles.subTitle}>Sizes</Text>
        <View style={styles.section}>
          <DscButton onPress={handlePress} color="highlight" size="small">
            Small Highlight
          </DscButton>
          <DscButton onPress={handlePress} color="highlight" size="default">
            Default Highlight
          </DscButton>
          <DscButton onPress={handlePress} color="highlight" size="large">
            Large Highlight
          </DscButton>
        </View>

        <Text style={styles.subTitle}>Types</Text>
        <View style={styles.section}>
          <DscButton onPress={handlePress} color="highlight" type="plain">
            Plain Highlight
          </DscButton>
          <DscButton onPress={handlePress} color="highlight" type="outline">
            Outline Highlight
          </DscButton>
          <DscButton onPress={handlePress} color="highlight" type="chromeless">
            Chromeless Highlight
          </DscButton>
        </View>

        <Text style={styles.subTitle}>Disabled</Text>
        <View style={styles.section}>
          <DscButton onPress={handlePress} color="highlight" disabled={true}>
            Disabled Highlight
          </DscButton>
          <DscButton
            onPress={handlePress}
            color="highlight"
            type="outline"
            disabled={true}
          >
            Disabled Outline Highlight
          </DscButton>
          <DscButton
            onPress={handlePress}
            color="highlight"
            type="chromeless"
            disabled={true}
          >
            Disabled Chromeless Highlight
          </DscButton>
        </View>

        <Text style={styles.subTitle}>Loading</Text>
        <View style={styles.section}>
          <DscButton onPress={handlePress} color="highlight" loading={true}>
            Loading Highlight
          </DscButton>
          <DscButton
            onPress={handlePress}
            color="highlight"
            type="outline"
            loading={true}
          >
            Loading Outline Highlight
          </DscButton>
          <DscButton
            onPress={handlePress}
            color="highlight"
            type="chromeless"
            loading={true}
          >
            Loading Chromeless Highlight
          </DscButton>
        </View>

        <Text style={styles.sectionTitle}>Accent Buttons</Text>

        <Text style={styles.subTitle}>Sizes</Text>
        <View style={styles.section}>
          <DscButton onPress={handlePress} color="accent" size="small">
            Small Accent
          </DscButton>
          <DscButton onPress={handlePress} color="accent" size="default">
            Default Accent
          </DscButton>
          <DscButton onPress={handlePress} color="accent" size="large">
            Large Accent
          </DscButton>
        </View>

        <Text style={styles.subTitle}>Types</Text>
        <View style={styles.section}>
          <DscButton onPress={handlePress} color="accent" type="plain">
            Plain Accent
          </DscButton>
          <DscButton onPress={handlePress} color="accent" type="outline">
            Outline Accent
          </DscButton>
          <DscButton onPress={handlePress} color="accent" type="chromeless">
            Chromeless Accent
          </DscButton>
        </View>

        <Text style={styles.subTitle}>Disabled</Text>
        <View style={styles.section}>
          <DscButton onPress={handlePress} color="accent" disabled={true}>
            Disabled Accent
          </DscButton>
          <DscButton
            onPress={handlePress}
            color="accent"
            type="outline"
            disabled={true}
          >
            Disabled Outline Accent
          </DscButton>
          <DscButton
            onPress={handlePress}
            color="accent"
            type="chromeless"
            disabled={true}
          >
            Disabled Chromeless Accent
          </DscButton>
        </View>

        <Text style={styles.subTitle}>Loading</Text>
        <View style={styles.section}>
          <DscButton onPress={handlePress} color="accent" loading={true}>
            Loading Accent
          </DscButton>
          <DscButton
            onPress={handlePress}
            color="accent"
            type="outline"
            loading={true}
          >
            Loading Outline Accent
          </DscButton>
          <DscButton
            onPress={handlePress}
            color="accent"
            type="chromeless"
            loading={true}
          >
            Loading Chromeless Accent
          </DscButton>
        </View>

        <Text style={styles.sectionTitle}>Buttons with Icons</Text>

        <Text style={styles.subTitle}>Icon Before</Text>
        <View style={styles.section}>
          <DscButton onPress={handlePress} color="highlight" icon={Heart} size="small">
            Like (Iconoir Small)
          </DscButton>
          <DscButton onPress={handlePress} color="highlight" icon={LucideHeart} size="small">
            Like (Lucide Small)
          </DscButton>
          <DscButton onPress={handlePress} color="accent" icon={Settings}>
            Settings
          </DscButton>
          <DscButton
            onPress={handlePress}
            color="highlight"
            type="outline"
            icon={Download}
          >
            Download
          </DscButton>
        </View>

        <Text style={styles.subTitle}>Icon After</Text>
        <View style={styles.section}>
          <DscButton
            onPress={handlePress}
            color="highlight"
            iconAfter={ArrowRight}
          >
            Next
          </DscButton>
          <DscButton onPress={handlePress} color="accent" iconAfter={Plus}>
            Add Item
          </DscButton>
          <DscButton
            onPress={handlePress}
            color="highlight"
            type="chromeless"
            iconAfter={Edit}
          >
            Edit
          </DscButton>
        </View>

        <Text style={styles.subTitle}>Both Icons</Text>
        <View style={styles.section}>
          <DscButton
            onPress={handlePress}
            color="highlight"
            icon={Settings}
            iconAfter={ArrowRight}
          >
            Configure
          </DscButton>
          <DscButton
            onPress={handlePress}
            color="accent"
            type="outline"
            icon={Heart}
            iconAfter={Plus}
          >
            Add to Favorites
          </DscButton>
          <DscButton
            onPress={handlePress}
            color="highlight"
            type="chromeless"
            icon={Download}
            iconAfter={Edit}
            size="large"
          >
            Download & Edit
          </DscButton>
        </View>
      </ScrollView>
    </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 8,
    color: '#666',
  },
  section: {
    gap: 10,
    marginBottom: 20,
  },
});
