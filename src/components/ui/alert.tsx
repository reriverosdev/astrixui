import * as React from 'react'
import { type VariantProps } from 'class-variance-authority'

import { childrenWithNamespace, cn, getNameSpace } from '@/lib/utils'
import { alertVariants } from '../constants/variants/alert'

const Alert = React.forwardRef<
  WithNameSpace<HTMLDivElement>,
  WithNameSpace<React.HTMLAttributes<HTMLDivElement>> &
    VariantProps<ReturnType<typeof alertVariants>>
>(({ className, namespace, variant, children, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants(namespace)({ variant }), className)}
    {...props}
  >
    {children && childrenWithNamespace(children, getNameSpace(namespace))}
  </div>
))
Alert.displayName = 'Alert'

const AlertTitle = React.forwardRef<
  WithNameSpace<HTMLParagraphElement>,
  WithNameSpace<React.HTMLAttributes<HTMLHeadingElement>>
>(({ className, namespace, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(`${getNameSpace(namespace)}-alert-title`, className)}
    {...props}
  />
))
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = React.forwardRef<
  WithNameSpace<HTMLParagraphElement>,
  WithNameSpace<React.HTMLAttributes<HTMLParagraphElement>>
>(({ className, namespace, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(`${getNameSpace(namespace)}-alert-description`, className)}
    {...props}
  />
))
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertTitle, AlertDescription }
