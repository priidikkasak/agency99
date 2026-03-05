import { cn } from '@/lib/utils';

interface StatProps {
  value: string;
  label: string;
  className?: string;
}

export function Stat({ value, label, className }: StatProps) {
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <span className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-foreground">
        {value}
      </span>
      <span className="text-sm text-muted">{label}</span>
    </div>
  );
}
