import type { Meta, StoryObj } from '@storybook/react';
import DscButton from './Button';
import React from 'react';

const meta: Meta<typeof DscButton> = {
  title: 'Components/Button',
  component: DscButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    color: {
      control: 'color',
      description: 'Background color of the button',
    },
    accessibilityLabel: {
      control: 'text',
      description: 'Accessibility label for the button',
    },
    children: {
      control: 'text',
      description: 'Button content',
    },
    onPress: {
      action: 'pressed',
      description: 'Function called when button is pressed',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    children: 'Press Me',
    onPress: () => console.log('Button pressed!'),
  },
};

// Primary button
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    color: '#007bff',
    onPress: () => console.log('Primary button pressed!'),
  },
};

// Secondary button
export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    color: '#6c757d',
    onPress: () => console.log('Secondary button pressed!'),
  },
};

// Success button
export const Success: Story = {
  args: {
    children: 'Success Button',
    color: '#28a745',
    onPress: () => console.log('Success button pressed!'),
  },
};

// Danger button
export const Danger: Story = {
  args: {
    children: 'Danger Button',
    color: '#dc3545',
    onPress: () => console.log('Danger button pressed!'),
  },
};

// Warning button
export const Warning: Story = {
  args: {
    children: 'Warning Button',
    color: '#ffc107',
    onPress: () => console.log('Warning button pressed!'),
  },
};

// Disabled button
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
    onPress: () => console.log('This should not be called'),
  },
};

// Large button
export const Large: Story = {
  args: {
    children: 'Large Button',
    color: '#17a2b8',
    padding: '$4',
    fontSize: '$6',
    onPress: () => console.log('Large button pressed!'),
  },
};

// Small button
export const Small: Story = {
  args: {
    children: 'Small Button',
    color: '#6f42c1',
    padding: '$1',
    fontSize: '$2',
    onPress: () => console.log('Small button pressed!'),
  },
};

// Custom accessibility label
export const WithCustomAccessibility: Story = {
  args: {
    children: 'Save Document',
    color: '#20c997',
    accessibilityLabel: 'Save the current document',
    onPress: () => console.log('Document saved!'),
  },
};

// Interactive example with different states
export const Interactive: Story = {
  render: (args) => {
    const [count, setCount] = React.useState(0);
    
    return (
      <DscButton
        {...args}
        onPress={() => setCount(count + 1)}
      >
        Clicked {count} times
      </DscButton>
    );
  },
  args: {
    color: '#fd7e14',
  },
};
