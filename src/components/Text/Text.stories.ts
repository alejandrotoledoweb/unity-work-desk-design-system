import React from "react";
import { Meta, StoryObj } from '@storybook/react';
import Text from './Text'; // Adjust the import path to your Text component's file location

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['p', 'h1', 'h2', 'h3', 'h4'],
      description: 'Selects the HTML element to use for the text',
    },
    className: {
      control: 'text',
      description: 'Tailwind CSS classes to apply additional styling',
    },
    children: {
      control: 'text',
      defaultValue: 'Sample text',
      description: 'The text content of the component',
    }
  },
};

export default meta;

// Default Text Story
export const Paragraph: StoryObj<typeof Text> = {
  args: {
    children: 'This is a sample text paragraph',
    variant: 'p',
  },
};

// Heading 1 Story
export const Heading1: StoryObj<typeof Text> = {
  args: {
    children: 'Heading 1',
    variant: 'h1',
  },
};

// Heading 2 Story
export const Heading2: StoryObj<typeof Text> = {
  args: {
    children: 'Heading 2',
    variant: 'h2',
  },
};

// Heading 3 Story
export const Heading3: StoryObj<typeof Text> = {
  args: {
    children: 'Heading 3',
    variant: 'h3',
  },
};

// Heading 4 Story
export const Heading4: StoryObj<typeof Text> = {
  args: {
    children: 'Heading 4',
    variant: 'h4',
  },
};
