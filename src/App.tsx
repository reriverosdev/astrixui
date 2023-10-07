import './App.css'
import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from './components/ui/input';
import { Combobox, ComboboxOptions, ComboboxSelector } from './components/ui/combobox';
import { DatePicker, DatePickerContent, DatePickerSelector } from './components/ui/date-picker';

type Framework = {
  key: string;
  value: string;
  label: string;
}

const frameworks: Framework[] = [
  {
    key: '1',
    value: "next.js",
    label: "Next.js",
  },
  {
    key: '2',
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    key: '3',
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    key: '4',
    value: "remix",
    label: "Remix",
  },
  {
    key: '5',
    value: "astro",
    label: "Astro",
  },
]

function App() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const [date, setDate] = React.useState<Date>();

  const handleOnSelect = (option: Framework, currentValue: string) => {
    console.log("** option", option);
    console.log("** currentValue", currentValue);
    setValue(currentValue === value ? "" : currentValue)
    setOpen(false)
  }

  return (
    <>
      <Button>Test Button XD</Button>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Input />
      <Combobox>
        <ComboboxSelector
          label={frameworks.find((framework) => framework.value === value)?.label || 'Select framework'}
          open={open}
         />
        <ComboboxOptions
          placeholder='Search framework'
          emptyLabel='No framework found'
          options={frameworks}
          currentSelected={value}
          onSelect={handleOnSelect}
        />
      </Combobox>
      <DatePicker>
        <DatePickerSelector 
          placeholder='Pick a date'
          date={date}
        />
        <DatePickerContent
          mode='single'
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </DatePicker>
    </>
  )
}

export default App
