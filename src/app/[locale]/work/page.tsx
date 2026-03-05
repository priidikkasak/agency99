'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight } from 'lucide-react';
import { cases } from '@/lib/cases';
import { useParams } from 'next/navigation';
import { cn } from '@/lib/utils';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function WorkPage() {
  const t = useTranslations('work');
  const params = useParams();
  const locale = params.locale as string;

  return (
    <div className="pt-32 pb-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-20"
        >
          <SectionHeader
            overline={t('overline')}
            headline={t('headline')}
            sub={t('sub')}
          />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {cases.map((c) => {
            const content = locale === 'et' ? c.et : c.en;
            const categoryLabel = t(`categories.${c.category}`);

            return (
              <motion.div key={c.slug} variants={item}>
                <Link href={`/work/${c.slug}`} className="block h-full group">
                  <article
                    className={cn(
                      'h-full rounded-2xl border border-border bg-surface-2/60 backdrop-blur-sm',
                      'transition-all duration-300',
                      'group-hover:border-accent/25 group-hover:bg-surface-2',
                      'group-hover:shadow-[0_0_20px_hsl(var(--accent)/0.07),0_8px_32px_rgba(0,0,0,0.25)]',
                      'group-hover:-translate-y-1 overflow-hidden',
                    )}
                  >
                    {/* Gallery placeholder */}
                    <div className="h-48 bg-surface border-b border-border/40 flex items-center justify-center relative overflow-hidden">
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `radial-gradient(ellipse at 30% 60%, hsl(var(--accent) / 0.08) 0%, transparent 60%)`,
                        }}
                      />
                      <div className="flex flex-col items-center gap-2 z-10">
                        <span className="font-display text-5xl font-semibold text-foreground/10 select-none">
                          {content.metric}
                        </span>
                        <span className="text-xs text-muted/50 text-center max-w-xs px-4">
                          {content.metricLabel}
                        </span>
                      </div>
                    </div>

                    <div className="p-7 flex flex-col gap-5">
                      <div className="flex items-center justify-between">
                        <Badge variant="muted">{categoryLabel}</Badge>
                        <span className="text-xs text-muted/60">{c.year}</span>
                      </div>

                      <div className="flex flex-col gap-3">
                        <h2 className="font-display text-xl font-semibold text-foreground tracking-tight group-hover:text-accent/90 transition-colors duration-200">
                          {content.title}
                        </h2>
                        <p className="text-muted text-sm leading-relaxed">{content.tagline}</p>
                      </div>

                      {/* P/B/O */}
                      <div className="grid grid-cols-3 gap-3 pt-2 border-t border-border/40 text-xs">
                        <div className="flex flex-col gap-1">
                          <span className="text-muted/50 uppercase tracking-wider text-[10px]">
                            {t('problem')}
                          </span>
                          <span className="text-muted line-clamp-2 leading-relaxed">
                            {content.problem.slice(0, 60)}…
                          </span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-muted/50 uppercase tracking-wider text-[10px]">
                            {t('outcome')}
                          </span>
                          <span className="text-accent font-semibold font-display text-sm">
                            {content.metric}
                          </span>
                        </div>
                        <div className="flex flex-col gap-1 items-end">
                          <span className="text-muted hover:text-accent transition-colors duration-200 mt-auto flex items-center gap-1 group-hover:text-accent">
                            {t('readMore')}
                            <ArrowRight
                              size={12}
                              className="group-hover:translate-x-1 transition-transform duration-200"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
