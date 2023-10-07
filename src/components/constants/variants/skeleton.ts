import { cva } from "class-variance-authority";

const skeletonVariants = cva(
  "animate-pulse bg-muted",
  {
    variants: {
      variant: {
        default:
          "rounded-md",
        circle:
          "rounded-full",
        notRounded:
          "rounded-none",
        outline: "text-foreground",
      },
      size: {
        default: "h-10 w-10",
        sm: "h-9 w-9",
        lg: "h-11 w-11",
      },
      background: {
        default: 'bg-muted',
        dark: 'bg-dark'
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      background: "default"
    },
  }
)

export {
  skeletonVariants
}