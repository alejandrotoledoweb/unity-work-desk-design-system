// stories/Modal.stories.tsx
import React from "react";
import { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    isOpen: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
    onClose: { action: 'closed' }
  },
};

export default meta;

export const Default: StoryObj<typeof Modal> = {
  args: {
    title: "This is the title for the modal",
    children: "This is a modal window. You can place any content here.",
    onClose: () => console.log('Modal closed'),
  },
};
