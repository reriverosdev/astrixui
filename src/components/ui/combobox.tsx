import * as React from 'react'
import { PopoverProps } from '@radix-ui/react-popover'
import { Check, ChevronsUpDown } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

interface ComboboxProps extends PopoverProps {}

const Combobox: React.FC<ComboboxProps> = ({ children, ...props }) => {
  return <Popover {...props}>{children}</Popover>
}
Combobox.displayName = 'Combobox'

interface ComboboxSelectorProps extends ComboboxProps {
  label: string
  open: boolean
}

const ComboboxSelector: React.FC<ComboboxSelectorProps> = ({ label, open }) => {
  return (
    <PopoverTrigger asChild>
      <Button
        variant="outline"
        role="combobox"
        aria-expanded={open}
        className="w-[200px] justify-between"
      >
        {label}
        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
  )
}
ComboboxSelector.displayName = 'ComboboxSelector'

type ComboboxOption = {
  value: string
  label: string
  key: string
}

interface ComboboxOptionsProps extends ComboboxProps {
  options: ComboboxOption[]
  placeholder: string
  emptyLabel: string
  onSelect: (option: ComboboxOption, value: string) => void
  currentSelected: string
}

const ComboboxOptions: React.FC<ComboboxOptionsProps> = ({
  currentSelected,
  options,
  placeholder,
  emptyLabel,
  onSelect,
}) => {
  return (
    <PopoverContent className="w-[200px] p-0">
      <Command>
        <CommandInput placeholder={placeholder} />
        <CommandEmpty>{emptyLabel}</CommandEmpty>
        <CommandGroup>
          {options.map((option) => (
            <CommandItem
              key={option.key}
              onSelect={(currentValue) => onSelect(option, currentValue)}
            >
              <Check
                className={cn(
                  'mr-2 h-4 w-4',
                  currentSelected === option.value ? 'opacity-100' : 'opacity-0'
                )}
              />
              {option.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </Command>
    </PopoverContent>
  )
}
ComboboxOptions.displayName = 'ComboboxOptions'

export { Combobox, ComboboxSelector, ComboboxOptions }
