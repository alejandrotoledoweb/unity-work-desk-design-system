// stories/Tooltip.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    content: {
      control: 'text',
      defaultValue: 'Tooltip Content Here',
    },
    position: {
      control: { type: 'select', options: ['top', 'bottom', 'left', 'right'] },
      defaultValue: 'top',
    },
    children: {
      defaultValue: 'Hover over me',
    },
  },
};

export default meta;

export const Default: StoryObj<typeof Tooltip> = {
  args: {
    children: "Hover over me",
    content: "tooltip content"
  },
};
