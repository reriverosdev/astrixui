import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { childrenWithNamespace, cn, getNameSpace } from "@/lib/utils"
import { buttonVariants } from "../constants/variants/button" 
import { VariantProps } from "class-variance-authority";

const AlertDialog : React.FC<
  React.PropsWithChildren<
    WithNameSpace<typeof AlertDialogPrimitive.Root>
  >
> = ({ namespace, children }) => {
  return (
    <AlertDialogPrimitive.Root>
      {
        children && childrenWithNamespace(children, getNameSpace(namespace))}
    </AlertDialogPrimitive.Root>
  )
};

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal

const AlertDialogOverlay = React.forwardRef<
  WithNameSpace<React.ElementRef<typeof AlertDialogPrimitive.Overlay>>,
  WithNameSpace<React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>>
>(({ className, namespace, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      `${getNameSpace(namespace)}-alert-dialog-overlay data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0`,
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
        `${getNameSpace(namespace)}-alert-dialog-content data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-open:slide-in-from-left-1/2 data-open:slide-in-from-top-[48%] data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-closed:slide-out-to-left-1/2 data-closed:slide-out-to-top-[48%]`,
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
  WithNameSpace<React.ElementRef<typeof AlertDialogPrimitive.Action> & VariantProps<ReturnType<typeof buttonVariants>>>,
  WithNameSpace<React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action> & VariantProps<ReturnType<typeof buttonVariants>>>
>(({ className, namespace, variant, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants(getNameSpace(namespace))({ variant }), className)}
    {...props}
  />
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const AlertDialogCancel = React.forwardRef<
  WithNameSpace<React.ElementRef<typeof AlertDialogPrimitive.Cancel> & VariantProps<ReturnType<typeof buttonVariants>>>,
  WithNameSpace<React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel> & VariantProps<ReturnType<typeof buttonVariants>>>
>(({ className, namespace, variant, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      buttonVariants(getNameSpace(namespace))({ variant }),
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
