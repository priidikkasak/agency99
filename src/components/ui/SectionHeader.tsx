import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  overline?: string;
  headline: string;
  sub?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  overline,
  headline,
  sub,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {overline && (
        <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">
          {overline}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground leading-tight">
        {headline}
      </h2>
      {sub && (
        <p className={cn('text-muted text-base leading-relaxed', align === 'center' ? 'max-w-2xl' : 'max-w-xl')}>
          {sub}
        </p>
      )}
    </div>
  );
}
