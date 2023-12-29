import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { childrenWithNamespace, cn, getNameSpace } from "@/lib/utils"
import { buttonVariants } from "../constants/variants/button" 

const AlertDialog = React.forwardRef<
  WithNameSpace<React.ElementRef<typeof AlertDialogPrimitive.Root>>,
  WithNameSpace<React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Root>>
> (({ namespace, children }) => {
  return (
    <AlertDialogPrimitive.Root>
      {
        children && childrenWithNamespace(children, getNameSpace(namespace))}
    </AlertDialogPrimitive.Root>
  )
})

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal

const AlertDialogOverlay = React.forwardRef<
  WithNameSpace<React.ElementRef<typeof AlertDialogPrimitive.Overlay>>,
  WithNameSpace<React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>>
>(({ className, namespace, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      `${getNameSpace(namespace)}-alert-dialog-overlay`,
      className
    )}
    {...props}
    ref={ref}
  />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

const AlertDialogContent = React.forwardRef<
  WithNameSpace<React.ElementRef<typeof AlertDialogPrimitive.Content>>,
  WithNameSpace<React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>>
>(({ className, namespace, children, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        `${getNameSpace(namespace)}-alert-dialog-content`,
        className
      )}
      {...props}
    >
      { children && childrenWithNamespace(children, getNameSpace(namespace))}
    </AlertDialogPrimitive.Content>
  </AlertDialogPortal>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const AlertDialogHeader = ({
  className,
  namespace,
  children,
  ...props
}: WithNameSpace<React.HTMLAttributes<HTMLDivElement>>) => (
  <div
    className={cn(
      `${getNameSpace(namespace)}-alert-dialog-header`,
      className
    )}
    {...props}
  >
    {
      children && childrenWithNamespace(children, getNameSpace(namespace))
    }
  </div>
)
AlertDialogHeader.displayName = "AlertDialogHeader"

const AlertDialogFooter = ({
  className,
  namespace,
  children,
  ...props
}: WithNameSpace<React.HTMLAttributes<HTMLDivElement>>) => (
  <div
    className={cn(
      `${getNameSpace(namespace)}-alert-dialog-footer`,
      className
    )}
    {...props}
  >
    {
      children && childrenWithNamespace(children, getNameSpace(namespace))
    }
  </div>
)
AlertDialogFooter.displayName = "AlertDialogFooter"

const AlertDialogTitle = React.forwardRef<
  WithNameSpace<React.ElementRef<typeof AlertDialogPrimitive.Title>>,
  WithNameSpace<React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>>
>(({ className, namespace, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn(`${getNameSpace(namespace)}-alert-dialog-title`, className)}
    {...props}
  />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const AlertDialogDescription = React.forwardRef<
  WithNameSpace<React.ElementRef<typeof AlertDialogPrimitive.Description>>,
  WithNameSpace<React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>>
>(({ className, namespace, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn(`${getNameSpace(namespace)}-alert-dialog-description`, className)}
    {...props}
  />
))
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName

const AlertDialogAction = React.forwardRef<
  WithNameSpace<React.ElementRef<typeof AlertDialogPrimitive.Action>>,
  WithNameSpace<React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>>
>(({ className, namespace, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants(getNameSpace(namespace))(), className)}
    {...props}
  />
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const AlertDialogCancel = React.forwardRef<
  WithNameSpace<React.ElementRef<typeof AlertDialogPrimitive.Cancel>>,
  WithNameSpace<React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>>
>(({ className, namespace, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      buttonVariants(getNameSpace(namespace))({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    )}
    {...props}
  />
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}
