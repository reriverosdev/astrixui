import * as React from 'react'
import { PopoverProps } from '@radix-ui/react-popover'
import { Check, ChevronsUpDown } from 'lucide-react'

import { childrenWithNamespace, cn, getNameSpace } from '@/lib/utils'
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

const Combobox: React.FC<WithNameSpace<ComboboxProps>> = ({
  children,
  namespace,
  ...props
}) => {
  return (
    <Popover {...props}>
      {children && childrenWithNamespace(children, getNameSpace(namespace))}
    </Popover>
  )
}
Combobox.displayName = 'Combobox'

interface ComboboxSelectorProps extends ComboboxProps {
  label: string
  open: boolean
}

const ComboboxSelector: React.FC<WithNameSpace<ComboboxSelectorProps>> = ({
  label,
  namespace,
  open,
}) => {
  return (
    <PopoverTrigger asChild>
      <Button
        variant="outline"
        role="combobox"
        aria-expanded={open}
        className={`${getNameSpace(namespace)}-combobox-selector`}
      >
        {label}
        <ChevronsUpDown
          className={`${getNameSpace(namespace)}-combobox-selector-chevron`}
        />
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

const ComboboxOptions: React.FC<WithNameSpace<ComboboxOptionsProps>> = ({
  currentSelected,
  options,
  placeholder,
  emptyLabel,
  namespace,
  onSelect,
}) => {
  return (
    <PopoverContent className={`${getNameSpace(namespace)}-combobox-popover`}>
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
                  `${getNameSpace(namespace)}-combobox-popover-check`,
                  {
                    selected: currentSelected === option.value,
                    'not-selected': currentSelected !== option.value,
                  }
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
