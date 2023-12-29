import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn, getNameSpace } from "@/lib/utils"

const alertVariants = (namespace?: string) => cva(
  `${getNameSpace(namespace)}-alert`,
  {
    variants: {
      variant: {
        default: `${getNameSpace(namespace)}-alert-default`,
        destructive: `${getNameSpace(namespace)}-alert-destructive`
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  WithNameSpace<HTMLDivElement>,
  WithNameSpace<React.HTMLAttributes<HTMLDivElement>> & VariantProps<ReturnType<typeof  alertVariants>>
>(({ className, namespace, variant, children, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants(namespace)({ variant }), className)}
    {...props}
  >
    {
      children && 
        React.Children.map<WithNameSpace<React.ReactNode>, WithNameSpace<React.ReactNode>>(children, (child) => 
          React.isValidElement(child) && React.cloneElement(child, { namespace }))
    }
  </div>
))
Alert.displayName = "Alert"

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
AlertTitle.displayName = "AlertTitle"

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
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
