import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '../..';
import { useArgs } from '@storybook/preview-api'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Calendar',
  component: Calendar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Omit<Story, 'className'> & { args: { className : string }}  = {
  args: {
    className: '',
    mode: 'single',
    selected: null,
    onSelect: () => {}
  },
  render: function Component (args) {
    const [, setArgs] = useArgs()

    const onSelect = (value) => {
      args.onSelect(value)
      setArgs({ selected: value })
    }

    return <Calendar {...args} onSelect={onSelect} />
  },
};

export const Secondary: Omit<Story, 'className'> & { args: { className : string }}  = {
  args: {
    className: '',
    mode: 'range',
    selected: null,
    onSelect: () => {}
  },
  render: function Component (args) {
    const [, setArgs] = useArgs()

    const onSelect = (value) => {
      args.onSelect(value)
      setArgs({ selected: value })
    }

    return <Calendar {...args} onSelect={onSelect} />
  },
};

export const Tertiary: Omit<Story, 'className'> & { args: { className : string }}  = {
  args: {
    className: '',
    mode: 'multiple',
    max: 3,
    selected: null,
    onSelect: () => {}
  },
  render: function Component (args) {
    const [, setArgs] = useArgs()

    const onSelect = (value) => {
      args.onSelect(value)
      setArgs({ selected: value })
    }

    return <Calendar {...args} onSelect={onSelect} />
  },
};