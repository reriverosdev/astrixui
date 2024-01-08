import { getNameSpace } from "@/lib/utils";
import { cva } from "class-variance-authority";

const  buttonVariants = (namespace: string) => cva(
  `${getNameSpace(namespace)}-button`,
  {
    variants: {
      variant: {
        default: `${getNameSpace(namespace)}-button-default`,
        outline: `${getNameSpace(namespace)}-button-outline`,
        destructive: `${getNameSpace(namespace)}-button-destructive`,
        'destructive-outline': `${getNameSpace(namespace)}-button-destructive-outline`,
        success: `${getNameSpace(namespace)}-button-success`,
        'success-outline': `${getNameSpace(namespace)}-button-success-outline`,
        ghost: `${getNameSpace(namespace)}-button-ghost`,
        link: `${getNameSpace(namespace)}-button-link`,
      },
      size: {
        default: `${getNameSpace(namespace)}-button-size-default`,
        sm: `${getNameSpace(namespace)}-button-size-sm`,
        lg: `${getNameSpace(namespace)}-button-size-lg`,
        icon: `${getNameSpace(namespace)}-button-size-icon`,
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export {
  buttonVariants
}