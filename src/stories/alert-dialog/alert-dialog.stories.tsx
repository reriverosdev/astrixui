import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../..';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/AlertDialog',
  component: AlertDialog,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    className: '',
  },
  parameters: {
    trigger: 'Alert trigger',
    title: 'Alert title',
    description: 'Alert description',
  },
  decorators: [
    (_, options) => (
      <AlertDialog>
        <AlertDialogTrigger>{options.parameters.trigger}</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{options.parameters.title}</AlertDialogTitle>
            <AlertDialogDescription>
              {options.parameters.description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  ]
};

export const Secondary: Story = {
  args: {
    className: '',
  },
  parameters: {
    trigger: 'Alert trigger',
    title: 'Alert title',
    description: 'Alert description',
  },
  decorators: [
    (_, options) => (
      <AlertDialog>
        <AlertDialogTrigger>{options.parameters.trigger}</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{options.parameters.title}</AlertDialogTitle>
            <AlertDialogDescription>
              {options.parameters.description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel variant="destructive">Cancel</AlertDialogCancel>
            <AlertDialogAction variant="success">Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  ]
};