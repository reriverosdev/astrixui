import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Combobox, ComboboxSelector, ComboboxOptions } from '../..'
import { useArgs } from '@storybook/preview-api'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Combobox',
  component: Combobox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Combobox>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Omit<Story, 'className'> & {
  args: { className: string }
} = {
  args: {
    className: '',
    selected: null,
    onSelect: () => {},
  },
  render: function Component(args) {
    const [, setArgs] = useArgs()

    const onSelect = (option) => {
      args.onSelect(option)
      if (args.selected?.value === option.value) {
        setArgs({ selected: null })
      } else {
        setArgs({ selected: option })
      }
    }

    return (
      <Combobox>
        <ComboboxSelector
          label={args.selected ? args.selected.label : 'Nothing selected '}
        />
        <ComboboxOptions
          options={[
            { value: '1', label: 'First', key: '1' },
            { value: '2', label: 'Second', key: '2' },
            { value: '3', label: 'Third', key: '3' },
          ]}
          placeholder="Placeholder"
          emptyLabel="Empty"
          onSelect={onSelect}
          currentSelected={args.selected?.value}
        />
      </Combobox>
    )
  },
}
