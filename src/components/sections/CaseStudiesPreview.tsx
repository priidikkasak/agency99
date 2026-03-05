'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight } from 'lucide-react';
import { cases } from '@/lib/cases';
import { cn } from '@/lib/utils';

interface CaseStudiesPreviewProps {
  locale: string;
}

export function CaseStudiesPreview({ locale }: CaseStudiesPreviewProps) {
  const t = useTranslations('home.cases');
  const tWork = useTranslations('work');
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const previewCases = cases.slice(0, 4);

  return (
    <section className="py-28">
      <div className="container">
        <div ref={ref} className="flex flex-col gap-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55 }}
            >
              <SectionHeader overline={t('overline')} headline={t('headline')} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/work"
                className="text-sm text-muted hover:text-accent transition-colors duration-200 flex items-center gap-2 group whitespace-nowrap"
              >
                {t('cta')}
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {previewCases.map((c, i) => {
              const content = locale === 'et' ? c.et : c.en;
              const categoryLabel = tWork(`categories.${c.category}`);

              return (
                <motion.div
                  key={c.slug}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
                >
                  <Link href={`/work/${c.slug}`} className="block h-full group">
                    <article
                      className={cn(
                        'h-full rounded-2xl border border-border bg-surface-2/60 backdrop-blur-sm p-7',
                        'transition-all duration-300',
                        'group-hover:border-accent/25 group-hover:bg-surface-2',
                        'group-hover:shadow-[0_0_20px_hsl(var(--accent)/0.07),0_8px_32px_rgba(0,0,0,0.25)]',
                        'group-hover:-translate-y-1',
                      )}
                    >
                      <div className="flex flex-col gap-5 h-full">
                        <div className="flex items-center justify-between">
                          <Badge variant="muted">{categoryLabel}</Badge>
                          <span className="text-xs text-muted/60">{c.year}</span>
                        </div>

                        <div className="flex flex-col gap-3 flex-1">
                          <h3 className="font-display text-xl font-semibold text-foreground tracking-tight group-hover:text-accent/90 transition-colors duration-200">
                            {content.title}
                          </h3>
                          <p className="text-muted text-sm leading-relaxed">{content.problem}</p>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-border/40">
                          <div className="flex flex-col">
                            <span className="font-display text-2xl font-semibold text-foreground">
                              {content.metric}
                            </span>
                            <span className="text-xs text-muted">{content.metricLabel}</span>
                          </div>
                          <span className="text-sm text-muted group-hover:text-accent transition-colors duration-200 flex items-center gap-1.5">
                            {tWork('readMore')}
                            <ArrowRight
                              size={13}
                              className="group-hover:translate-x-1 transition-transform duration-200"
                            />
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
