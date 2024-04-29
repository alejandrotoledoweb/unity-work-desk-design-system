import React from "react";
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    type: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    }
  },
  args: {
    onClick: action('clicked'), // Using action to handle click events
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

// Primary Button Story
export const Primary: Story = {
  args: {
    type: 'primary',
    size: 'medium', // Default size if not specified
    label: 'Primary Button',
  },
};

// Secondary Button Story
export const Secondary: Story = {
  args: {
    type: 'secondary',
    size: 'medium', // Default size if not specified
    label: 'Secondary Button',
  },
};

// Large Button Story
export const PrimaryLarge: Story = {
  args: {
    type: 'primary', // Default type if not specified
    size: 'large',
    label: 'Large Button',
  },
};

// Small Button Story
export const PrimarySmall: Story = {
  args: {
    type: 'primary', // Default type if not specified
    size: 'small',
    label: 'Small Button',
  },
};
