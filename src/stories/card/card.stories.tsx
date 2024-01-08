import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../..';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Card',
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [
    (_, options) => (
      <Card>
        <CardHeader>
          <CardTitle>{options.parameters.title}</CardTitle>
          <CardDescription>{options.parameters.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{options.parameters.content}</p>
        </CardContent>
        <CardFooter>
          <p>{options.parameters.footer}</p>
        </CardFooter>
      </Card>
    )
  ]
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    className: '',
  },
  parameters: {
    title: 'Card title',
    description: 'Card description',
    content: 'Card content',
    footer: 'Card footer',
  }
};
