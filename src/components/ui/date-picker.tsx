import * as React from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { PopoverProps } from '@radix-ui/react-popover'
import { cn } from '@/lib/utils'
import { Button } from '../../components/ui/button'
import { Calendar, CalendarProps } from '../../components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

interface DatePickerProps extends PopoverProps {}

const DatePicker: React.FC<DatePickerProps> = ({ children, ...props }) => {
  return <Popover {...props}>{children}</Popover>
}

DatePicker.displayName = 'DatePicker'

interface DatePickerSelectorProps extends DatePickerProps {
  date?: Date
  placeholder: string
}

const DatePickerSelector: React.FC<DatePickerSelectorProps> = ({
  date,
  placeholder,
}) => {
  return (
    <PopoverTrigger asChild>
      <Button
        variant={'outline'}
        className={cn(
          'w-[280px] justify-start text-left font-normal',
          !date && 'text-muted-foreground'
        )}
      >
        <CalendarIcon className="mr-2 h-4 w-4" />
        {date ? format(date, 'PPP') : <span>{placeholder}</span>}
      </Button>
    </PopoverTrigger>
  )
}

DatePickerSelector.displayName = 'DatePickerSelector'

type DatePickerContentProps = CalendarProps

const DatePickerContent: React.FC<DatePickerContentProps> = (props) => {
  return (
    <PopoverContent className="w-auto p-0">
      <Calendar {...props} />
    </PopoverContent>
  )
}

DatePickerContent.displayName = 'DatePickerSelector'

export { DatePicker, DatePickerSelector, DatePickerContent }
