import { cva } from 'class-variance-authority'
import { getNameSpace } from '@/lib/utils'

export const alertVariants = (namespace?: string) =>
  cva(`${getNameSpace(namespace)}-alert`, {
    variants: {
      variant: {
        default: `${getNameSpace(namespace)}-alert-default`,
        destructive: `${getNameSpace(namespace)}-alert-destructive`,
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  })
