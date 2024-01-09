import { getNameSpace } from '@/lib/utils'
import { cva } from 'class-variance-authority'

const badgeVariants = (namespace?: string) =>
  cva(`${getNameSpace(namespace)}-badge`, {
    variants: {
      variant: {
        default: `${getNameSpace(namespace)}-badge-default`,
        outline: `${getNameSpace(namespace)}-badge-outline`,
        success: `${getNameSpace(namespace)}-badge-success`,
        'success-outline': `${getNameSpace(namespace)}-badge-success-outline`,
        destructive: `${getNameSpace(namespace)}-badge-destructive`,
        'destructive-outline': `${getNameSpace(
          namespace
        )}-badge-destructive-outline`,
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  })

export { badgeVariants }
