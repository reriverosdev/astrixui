import * as React from 'react'
import { type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { badgeVariants } from '../constants/variants/badge'

export interface BadgeProps
  extends WithNameSpace<React.HTMLAttributes<HTMLDivElement>>,
    VariantProps<ReturnType<typeof badgeVariants>> {}

const Badge: React.FC<React.PropsWithChildren<BadgeProps>> = ({
  className,
  namespace,
  variant,
  ...props
}) => {
  return (
    <div
      className={cn(badgeVariants(namespace)({ variant }), className)}
      {...props}
    />
  )
}

Badge.displayName = 'Badge'

export { Badge }
