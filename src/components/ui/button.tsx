import React, { PropsWithChildren } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps } from 'class-variance-authority'

import { cn, getNameSpace } from '@/lib/utils'
import { buttonVariants } from '../constants/variants/button'

export interface ButtonProps
  extends WithNameSpace<React.ButtonHTMLAttributes<HTMLButtonElement>>,
    VariantProps<ReturnType<typeof buttonVariants>> {
  asChild?: boolean
  onClick?: () => void
}

const Button = React.forwardRef<
  HTMLButtonElement,
  PropsWithChildren<ButtonProps>
>(({ className, variant, namespace, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={cn(
        buttonVariants(getNameSpace(namespace))({ variant, size }),
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

Button.displayName = 'Button'

export { Button }
