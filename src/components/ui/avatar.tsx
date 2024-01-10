import * as React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'

import { childrenWithNamespace, cn, getNameSpace } from '@/lib/utils'

const Avatar = React.forwardRef<
  WithNameSpace<React.ElementRef<typeof AvatarPrimitive.Root>>,
  WithNameSpace<React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>>
>(({ className, namespace, children, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(`${getNameSpace(namespace)}-avatar`, className)}
    {...props}
  >
    {children && childrenWithNamespace(children, getNameSpace(namespace))}
  </AvatarPrimitive.Root>
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  WithNameSpace<React.ElementRef<typeof AvatarPrimitive.Image>>,
  WithNameSpace<React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>>
>(({ className, namespace, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn(`${getNameSpace(namespace)}-avatar-image`, className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  WithNameSpace<React.ElementRef<typeof AvatarPrimitive.Fallback>>,
  WithNameSpace<React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>>
>(({ className, namespace, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(`${getNameSpace(namespace)}-avatar-fallback`, className)}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
