// stories/Alert.stories.tsx
import React from "react";
import { Meta, StoryObj } from '@storybook/react';
import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['success', 'error', 'warning', 'info'],
    },
    message: {
      control: 'text',
    },
  },
  args: {
    message: 'This is an alert message',
  },
};

export default meta;

export const Success: StoryObj<typeof Alert> = {
  args: {
    type: 'success',
    message: 'This is a success message!',
  },
};

export const Error: StoryObj<typeof Alert> = {
  args: {
    type: 'error',
    message: 'This is an error message!',
  },
};

export const Warning: StoryObj<typeof Alert> = {
  args: {
    type: 'warning',
    message: 'This is a warning message!',
  },
};

export const Info: StoryObj<typeof Alert> = {
  args: {
    type: 'info',
    message: 'This is an informational message!',
  },
};
