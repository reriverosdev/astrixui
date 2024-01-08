import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../..';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Accordion',
  component: Accordion,
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
      <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>{options.parameters.trigger}</AccordionTrigger>
        <AccordionContent>
          {options.parameters.content}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    )
  ]
} satisfies Meta<typeof Accordion> & typeof Accordion.defaultProps;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Omit<Story, 'args'> & { args: Record<string, unknown> } = {
  args: {},
  parameters: {
    trigger: 'Accordion trigger',
    content: 'Accordion content',
  }
};
