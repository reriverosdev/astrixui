import { Children, isValidElement, cloneElement } from 'react'
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getNameSpace(namespace?: string) {
  return namespace ?? 'astrix';
}

export function childrenWithNamespace(children: React.ReactNode, namespace: string){
  return Children.map<WithNameSpace<React.ReactNode>, WithNameSpace<React.ReactNode>>(children!, (child) => 
  isValidElement(child) && cloneElement(child, { namespace }))
}
