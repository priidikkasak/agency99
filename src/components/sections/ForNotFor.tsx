'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Check, X } from 'lucide-react';

export function ForNotFor() {
  const t = useTranslations('home.qualify');
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const forItems = t.raw('for.items') as string[];
  const notForItems = t.raw('notFor.items') as string[];

  return (
    <section className="py-28">
      <div className="container">
        <div ref={ref} className="flex flex-col gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
          >
            <SectionHeader
              overline={t('overline')}
              headline={t('headline')}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* For */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="rounded-2xl border border-border bg-surface-2/60 p-7 flex flex-col gap-6"
            >
              <h3 className="font-display text-base font-semibold text-foreground/80">
                {t('for.label')}
              </h3>
              <ul className="flex flex-col gap-4">
                {forItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center flex-shrink-0">
                      <Check size={11} className="text-accent" />
                    </div>
                    <span className="text-foreground/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Not for */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="rounded-2xl border border-border bg-surface-2/60 p-7 flex flex-col gap-6"
            >
              <h3 className="font-display text-base font-semibold text-foreground/80">
                {t('notFor.label')}
              </h3>
              <ul className="flex flex-col gap-4">
                {notForItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-surface border border-border/60 flex items-center justify-center flex-shrink-0">
                      <X size={10} className="text-muted/60" />
                    </div>
                    <span className="text-muted leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
