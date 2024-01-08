import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import { RocketIcon, ExclamationTriangleIcon  } from "@radix-ui/react-icons"
import { 
  Alert, AlertDescription, AlertTitle
} from '../..';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Alert',
  component: Alert,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    className: '',
  },
  parameters: {
    title: 'Alert title',
    description: 'Alert description',
  },
  decorators: [
    (_, options) => (
      <Alert>
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>{options.parameters.title}</AlertTitle>
        <AlertDescription>
          {options.parameters.description}
        </AlertDescription>
      </Alert>
    )
  ]
};

export const Destructive: Story = {
  args: {
    className: '',
  },
  parameters: {
    title: 'Alert title',
    description: 'Alert description',
  },
  decorators: [
    (_, options) => (
      <Alert variant="destructive">
        <ExclamationTriangleIcon className="h-4 w-4" />
        <AlertTitle>{options.parameters.title}</AlertTitle>
        <AlertDescription>
          {options.parameters.description}
        </AlertDescription>
      </Alert>
    )
  ]
};
