import { cn } from '@/lib/utils';
import { type ComponentPropsWithoutRef, forwardRef } from 'react';

interface CardProps extends ComponentPropsWithoutRef<'div'> {
  hover?: boolean;
  accent?: boolean;
  padded?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ hover = false, accent = false, padded = true, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl border border-border bg-surface-2/60 backdrop-blur-sm',
          padded && 'p-6',
          hover && 'card-hover cursor-default',
          accent && 'border-accent/20 shadow-glow-sm',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = 'Card';
export { Card };
