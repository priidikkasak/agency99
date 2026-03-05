import { cn } from '@/lib/utils';

type BadgeVariant = 'default' | 'accent' | 'muted';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-surface-2 border-border text-muted',
  accent: 'bg-accent/10 border-accent/30 text-accent',
  muted: 'bg-surface/50 border-border/50 text-muted/70',
};

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium tracking-wide',
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
