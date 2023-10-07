import React from "react"
import { cn } from "@/lib/utils"
import { skeletonVariants } from "../constants/variants/skeleton"
import { type VariantProps } from "class-variance-authority"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement>,
VariantProps<typeof skeletonVariants> {
  className?: string
  width?: number
  height?: number
}

const Skeleton: React.FC<SkeletonProps> = ({
  className,
  variant,
  size,
  background,
  ...props
}) => {
  return (
    <div
      className={cn(skeletonVariants({ variant, background, size, className }))}
      {...props}
    />
  )
}

export { Skeleton }
