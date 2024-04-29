// stories/LoadingSpinner.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { LoadingSpinner } from './LoadingSpinner';

const meta: Meta<typeof LoadingSpinner> = {
  title: 'Components/LoadingSpinner',
  component: LoadingSpinner,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'number',
      defaultValue: 24, // Default size
    },
  },
};

export default meta;

export const LoadingSpinner_24: StoryObj<typeof LoadingSpinner> = {};
