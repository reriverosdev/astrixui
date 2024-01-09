import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { BellIcon, CheckIcon } from '@radix-ui/react-icons'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
  Switch,
} from '../..'

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
    ),
  ],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    className: '',
  },
  parameters: {
    title: 'Notifications',
    description: 'You have 3 unread messages.',
    content: (
      <div className=" flex items-center space-x-4 rounded-md border p-4">
        <BellIcon />
        <div className="flex-1 space-y-1">
          <p className="text-sm font-medium leading-none">Push Notifications</p>
          <p className="text-sm text-muted-foreground">
            Send notifications to device.
          </p>
        </div>
        <Switch />
      </div>
    ),
    footer: (
      <Button className="w-full">
        <CheckIcon className="mr-2 h-4 w-4" /> Mark all as read
      </Button>
    ),
  },
}
