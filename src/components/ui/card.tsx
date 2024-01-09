import * as React from "react";

import { childrenWithNamespace, cn, getNameSpace } from "@/lib/utils";

const Card = React.forwardRef<
  WithNameSpace<HTMLDivElement>,
  WithNameSpace<React.HTMLAttributes<HTMLDivElement>>
>(({ className, children, namespace, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(`${getNameSpace(namespace)}-card`, className)}
    {...props}
  >
    {children && childrenWithNamespace(children, getNameSpace(namespace))}
  </div>
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  WithNameSpace<HTMLDivElement>,
  WithNameSpace<React.HTMLAttributes<HTMLDivElement>>
>(({ className, namespace, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(`${getNameSpace(namespace)}-card-header`, className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  WithNameSpace<HTMLParagraphElement>,
  WithNameSpace<React.HTMLAttributes<HTMLHeadingElement>>
>(({ className, namespace, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(`${getNameSpace(namespace)}-card-title`, className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  WithNameSpace<HTMLParagraphElement>,
  WithNameSpace<React.HTMLAttributes<HTMLParagraphElement>>
>(({ className, namespace, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(`${getNameSpace(namespace)}-card-description`, className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  WithNameSpace<HTMLDivElement>,
  WithNameSpace<React.HTMLAttributes<HTMLDivElement>>
>(({ className, namespace, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(`${getNameSpace(namespace)}-card-content`, className)}
    {...props}
  />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  WithNameSpace<HTMLDivElement>,
  WithNameSpace<React.HTMLAttributes<HTMLDivElement>>
>(({ className, namespace, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(`${getNameSpace(namespace)}-card-footer`, className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
