import { getNameSpace } from "@/lib/utils";
import { cva } from "class-variance-authority";

const buttonVariants = (namespace: string) => cva(
  `${getNameSpace(namespace)}-button`,
  {
    variants: {
      variant: {
        default: `${getNameSpace(namespace)}-button-default`,
        destructive: `${getNameSpace(namespace)}-button-destructive`,
        outline: `${getNameSpace(namespace)}-button-outline`,
        secondary: `${getNameSpace(namespace)}-button-secondary`,
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