import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-lg px-2.5 py-0.5 text-xs font-medium transition-colors font-syne',
  {
    variants: {
      variant: {
        default:   'bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] border border-[hsl(var(--border))]',
        primary:   'gradient-border bg-[hsl(var(--card))] text-[hsl(var(--foreground))]',
        outline:   'border border-[hsl(var(--border))] text-[hsl(var(--foreground))]',
      },
    },
    defaultVariants: { variant: 'default' },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
