import React from "react";
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: { type: 'boolean' },
    }
  },
  args: {
    onChange: action('changed'), // Logging the change events
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

// Default Input Story
export const Default: Story = {
  args: {
    size: 'medium',
    placeholder: 'Enter text here...',
  },
};

// Large Input Story
export const Large: Story = {
  args: {
    size: 'large',
    placeholder: 'Enter large text here...',
  },
};

// Small Input Story
export const Small: Story = {
  args: {
    size: 'small',
    placeholder: 'Enter small text here...',
  },
};

// Disabled Input Story
export const Disabled: Story = {
  args: {
    size: 'medium',
    placeholder: 'Disabled input',
    disabled: true,
  },
};

// Labeled Input Story
export const Labeled: Story = {
  args: {
    size: 'medium',
    placeholder: 'Enter text here...',
    label: 'Label',
  },
};
