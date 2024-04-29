// stories/StyledCard.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { StyledCard } from './Card';

const meta: Meta<typeof StyledCard> = {
  title: 'Components/Styled Card',
  component: StyledCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    imageUrl: {
      control: 'text',
      defaultValue: 'https://images.unsplash.com/photo-1611244419377-b0a760c19719?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFydGlzdHxlbnwwfHwwfHx8MA==',
    },
    title: {
      control: 'text',
      defaultValue: 'Create',
    },
    highlightText: {
      control: 'text',
      defaultValue: 'color scales\nin seconds.',
    },
  },
};

export default meta;

export const Default: StoryObj<typeof StyledCard> = {
  args: {
    imageUrl: 'https://images.unsplash.com/photo-1611244419377-b0a760c19719?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFydGlzdHxlbnwwfHwwfHx8MA==',
    title: 'Title'
  }
};
