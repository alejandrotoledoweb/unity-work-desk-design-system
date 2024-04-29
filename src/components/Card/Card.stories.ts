
// stories/Card.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: {
      control: 'text',
      defaultValue: 'Card Title',
    },
    description: {
      control: 'text',
      defaultValue: 'This is a sample description that elaborates on the contents of the card.',
    },
    imageUrl: {
      control: 'text',
      defaultValue: 'https://via.placeholder.com/400x200',
    },
  },
};

export default meta;

export const CardEx: StoryObj<typeof Card> = {
  args: {
    title: "Title",
  description: "Description",
  imageUrl: "https://via.placeholder.com/400x200",
  altText: 'alt descript'
  },
};

