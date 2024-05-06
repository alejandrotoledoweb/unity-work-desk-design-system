import { Meta, StoryObj } from '@storybook/react';
import { PresentationCard } from './PresentationCard';

const meta: Meta<typeof PresentationCard> = {
  title: 'Components/Presentation Card',
  component: PresentationCard,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    imageUrl: {
      control: 'text',
      defaultValue: 'https://www.pngall.com/wp-content/uploads/8/Work-PNG-File-Download-Free.png',
    },
    company: {
      control: 'text',
      defaultValue: 'tagline',
    },
    tagline: {
      control: 'text',
      defaultValue: 'tagline',
    },
  },
};

export default meta;

export const LogIn: StoryObj<typeof PresentationCard> = {
  args: {
    imageUrl: 'https://www.pngall.com/wp-content/uploads/8/Work-PNG-File-Download-Free.png',
    company: 'Unity Work Desk',
    tagline: 'Streamline all personnel tasks with ease',
  }
};