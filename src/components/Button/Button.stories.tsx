import type { Meta, StoryObj } from '@storybook/react';
import { TamaguiProvider } from '@tamagui/core';
import {
  Heart,
  Settings,
  Download,
  ArrowRight,
  Plus,
  Edit,
} from 'iconoir-react-native';
import DscButton from './Button';
import { type DscButtonProps } from './Button.model';
import { config } from '../../tamagui.config';

const meta: Meta<typeof DscButton> = {
  title: 'Components/DscButton',
  component: DscButton,
  decorators: [
    (Story) => (
      <TamaguiProvider config={config}>
        <Story />
      </TamaguiProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Componente de botão customizado baseado no Tamagui com diferentes tamanhos, cores e tipos. Suporta ícones do iconoir-react-native, estados de loading e disabled, e diferentes variações visuais.',
      },
      page: null, // Isso força a geração automática da página de docs
    },
  },
  tags: ['autodocs'], // Isso habilita a documentação automática
  argTypes: {
    children: {
      control: 'text',
      description: 'Conteúdo do botão',
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: { summary: 'Press Me' },
      },
    },
    color: {
      control: 'select',
      options: ['highlight', 'accent'],
      description: 'Cor do tema do botão',
      table: {
        type: { summary: 'ButtonColor' },
        defaultValue: { summary: 'highlight' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Tamanho do botão',
      table: {
        type: { summary: 'ButtonSize' },
        defaultValue: { summary: 'default' },
      },
    },
    type: {
      control: 'select',
      options: ['plain', 'chromeless', 'outline'],
      description: 'Tipo visual do botão',
      table: {
        type: { summary: 'ButtonType' },
        defaultValue: { summary: 'plain' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado do botão',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Estado de carregamento do botão',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    icon: {
      control: 'select',
      options: ['none', 'Heart', 'Settings', 'Download', 'ArrowRight', 'Plus', 'Edit'],
      mapping: {
        'none': undefined,
        'Heart': Heart,
        'Settings': Settings,
        'Download': Download,
        'ArrowRight': ArrowRight,
        'Plus': Plus,
        'Edit': Edit,
      },
      description: 'Ícone a ser exibido antes do texto',
      table: {
        type: { summary: 'IconProp' },
      },
    },
    iconAfter: {
      control: 'select',
      options: ['none', 'Heart', 'Settings', 'Download', 'ArrowRight', 'Plus', 'Edit'],
      mapping: {
        'none': undefined,
        'Heart': Heart,
        'Settings': Settings,
        'Download': Download,
        'ArrowRight': ArrowRight,
        'Plus': Plus,
        'Edit': Edit,
      },
      description: 'Ícone a ser exibido após o texto',
      table: {
        type: { summary: 'IconProp' },
      },
    },
    onPress: {
      description: 'Função chamada ao pressionar o botão',
      table: {
        type: { summary: '(event: GestureResponderEvent) => void' },
      },
    },
  },
  args: {
    onPress: () => console.log('Button pressed'),
    icon: undefined,
    iconAfter: undefined,
  },
};

export default meta;
type Story = StoryObj<DscButtonProps>;

// Story padrão
export const Default: Story = {
  args: {
    children: 'Button',
    color: 'highlight',
    size: 'default',
    type: 'plain',
    disabled: false,
    loading: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Exemplo básico do botão com configurações padrão.',
      },
    },
  },
};

// Variações de tamanho
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <DscButton {...args} size="small" children="Small" />
      <DscButton {...args} size="default" children="Default" />
      <DscButton {...args} size="large" children="Large" />
    </div>
  ),
  args: {
    ...Default.args,
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstração dos diferentes tamanhos disponíveis: small, default e large.',
      },
    },
  },
};

// Variações de cor
export const Colors: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <DscButton {...args} color="highlight" children="Highlight" />
      <DscButton {...args} color="accent" children="Accent" />
    </div>
  ),
  args: {
    ...Default.args,
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstração das cores de tema disponíveis: highlight (tema principal) e accent (tema secundário).',
      },
    },
  },
};

// Variações de tipo
export const Types: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <DscButton {...args} type="plain" children="Plain" />
      <DscButton {...args} type="chromeless" children="Chromeless" />
      <DscButton {...args} type="outline" children="Outline" />
    </div>
  ),
  args: {
    ...Default.args,
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstração dos tipos visuais: plain (sólido), chromeless (sem fundo) e outline (apenas borda).',
      },
    },
  },
};

// Estados
export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <DscButton {...args} children="Normal" />
      <DscButton {...args} disabled children="Disabled" />
      <DscButton {...args} loading children="Loading" />
    </div>
  ),
  args: {
    ...Default.args,
  },
};

// Com ícones
export const WithIcons: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <DscButton {...args} icon={Heart} children="Like" />
        <DscButton {...args} iconAfter={ArrowRight} children="Next" />
        <DscButton
          {...args}
          icon={Download}
          iconAfter={Edit}
          children="Download & Edit"
        />
      </div>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <DscButton {...args} icon={Plus} />
        <DscButton {...args} iconAfter={Settings} />
      </div>
    </div>
  ),
  args: {
    ...Default.args,
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstração do uso de ícones do iconoir-react-native. Pode ter ícone antes (icon), depois (iconAfter) ou ambos. Também suporta botões apenas com ícones.',
      },
    },
  },
};

// Exemplo interativo
export const Interactive: Story = {
  args: {
    ...Default.args,
    children: 'Click me!',
  },
};

// Botões pequenos com diferentes tipos
export const SmallVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <DscButton {...args} size="small" type="plain" children="Plain" />
      <DscButton
        {...args}
        size="small"
        type="chromeless"
        children="Chromeless"
      />
      <DscButton {...args} size="small" type="outline" children="Outline" />
    </div>
  ),
  args: {
    ...Default.args,
  },
};

// Botões grandes com cores
export const LargeWithColors: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <DscButton
        {...args}
        size="large"
        color="highlight"
        children="Primary Action"
      />
      <DscButton
        {...args}
        size="large"
        color="accent"
        children="Secondary Action"
      />
    </div>
  ),
  args: {
    ...Default.args,
  },
};

// Estados de erro e sucesso (usando cores disponíveis)
export const ActionButtons: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <DscButton
          {...args}
          color="accent"
          type="plain"
          children="Save Changes"
        />
        <DscButton
          {...args}
          color="highlight"
          type="outline"
          children="Cancel"
        />
      </div>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <DscButton
          {...args}
          color="highlight"
          icon={Download}
          children="Download"
        />
        <DscButton
          {...args}
          color="accent"
          icon={Plus}
          children="Create New"
        />
      </div>
    </div>
  ),
  args: {
    ...Default.args,
  },
};

// Ícones específicos - Baseado no App.tsx
export const IconExamples: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <DscButton
          {...args}
          color="highlight"
          icon={Heart}
          children="Like"
        />
        <DscButton
          {...args}
          color="accent"
          icon={Settings}
          children="Settings"
        />
        <DscButton
          {...args}
          color="highlight"
          type="outline"
          icon={Download}
          children="Download"
        />
      </div>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <DscButton
          {...args}
          color="highlight"
          iconAfter={ArrowRight}
          children="Next"
        />
        <DscButton
          {...args}
          color="accent"
          iconAfter={Plus}
          children="Add Item"
        />
        <DscButton
          {...args}
          color="highlight"
          type="chromeless"
          iconAfter={Edit}
          children="Edit"
        />
      </div>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <DscButton
          {...args}
          color="highlight"
          icon={Settings}
          iconAfter={ArrowRight}
          children="Configure"
        />
        <DscButton
          {...args}
          color="accent"
          type="outline"
          icon={Heart}
          iconAfter={Plus}
          children="Add to Favorites"
        />
        <DscButton
          {...args}
          color="highlight"
          type="chromeless"
          icon={Download}
          iconAfter={Edit}
          size="large"
          children="Download & Edit"
        />
      </div>
    </div>
  ),
  args: {
    ...Default.args,
  },
};
