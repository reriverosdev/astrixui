import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DayPicker } from 'react-day-picker'

import { cn, getNameSpace } from '@/lib/utils'

export type CalendarProps = WithNameSpace<
  React.ComponentProps<typeof DayPicker>
>

const Calendar: React.FC<CalendarProps> = ({
  className,
  classNames,
  namespace,
  showOutsideDays = true,
  ...props
}) => {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(`${getNameSpace(namespace)}-calendar`, className)}
      classNames={{
        months: `${getNameSpace(namespace)}-calendar-months`,
        month: `${getNameSpace(namespace)}-calendar-month`,
        caption: `${getNameSpace(namespace)}-calendar-caption`,
        caption_label: `${getNameSpace(namespace)}-calendar-caption-label`,
        nav: `${getNameSpace(namespace)}-calendar-nav`,
        nav_button: `${getNameSpace(namespace)}-calendar-nav-button`,
        nav_button_previous: `${getNameSpace(
          namespace
        )}-calendar-nav-button-previous`,
        nav_button_next: `${getNameSpace(namespace)}-calendar-nav-button-next`,
        table: `${getNameSpace(namespace)}-calendar-table`,
        head_row: `${getNameSpace(namespace)}-calendar-head-row`,
        head_cell: `${getNameSpace(namespace)}-calendar-head-cell`,
        row: `${getNameSpace(namespace)}-calendar-row`,
        cell: `${getNameSpace(namespace)}-calendar-cell`,
        day: `${getNameSpace(namespace)}-calendar-day`,
        day_selected: `${getNameSpace(namespace)}-calendar-selected`,
        day_today: `${getNameSpace(namespace)}-calendar-today`,
        day_outside: `${getNameSpace(namespace)}-calendar-disabled`,
        day_disabled: `${getNameSpace(namespace)}-calendar-disabled`,
        day_range_middle: `${getNameSpace(namespace)}-calendar-range-middle`,
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: () => <ChevronLeft className="h-4 w-4" />,
        IconRight: () => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = 'Calendar'

export { Calendar }
