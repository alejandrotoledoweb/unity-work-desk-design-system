import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { LogIn } from './LogIn';

const meta: Meta<typeof LogIn> = {
  title: 'Components/LogIn',
  component: LogIn,
  parameters: {
    layout: 'fullscreen',
  }
};

export default meta;

type Story = StoryObj<typeof LogIn>;

// Default LogIn Story
export const LogInPage: Story = {
};