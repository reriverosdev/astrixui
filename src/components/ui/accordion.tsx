import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'

import { cn, getNameSpace } from '@/lib/utils'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  WithNameSpace<React.ElementRef<typeof AccordionPrimitive.Item>>,
  WithNameSpace<React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>>
>(({ className, namespace, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(`${getNameSpace(namespace)}-accordion-item`, className)}
    {...props}
  />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef<
  WithNameSpace<React.ElementRef<typeof AccordionPrimitive.Trigger>>,
  WithNameSpace<
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
  >
>(({ className, namespace, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(`${getNameSpace(namespace)}-accordion`, className)}
      {...props}
    >
      {children}
      <ChevronDown
        className={`${getNameSpace(namespace)}-accordion-chevron-down`}
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  WithNameSpace<React.ElementRef<typeof AccordionPrimitive.Content>>,
  WithNameSpace<
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
  >
>(({ className, namespace, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(`${getNameSpace(namespace)}-accordion-content`, className)}
    {...props}
  >
    <div className={`${getNameSpace(namespace)}-accordion-children`}>
      {children}
    </div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
