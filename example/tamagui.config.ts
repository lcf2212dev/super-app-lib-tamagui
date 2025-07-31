import { createTamagui } from '@tamagui/core'
import { config } from '@tamagui/config/v3'

const tamaguiConfig = createTamagui(config)

// Debug log to check if themes are loaded
console.log('Tamagui themes available:', Object.keys(tamaguiConfig.themes || {}))

export default tamaguiConfig

export type AppConfig = typeof tamaguiConfig

declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends AppConfig {}
}
