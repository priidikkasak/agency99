'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StepItem {
  n: string;
  label: string;
  desc: string;
}

export function ProcessSnapshot() {
  const t = useTranslations('home.processSnap');
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const steps = t.raw('steps') as StepItem[];

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
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <Link
                href="/process"
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

          {/* Timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border/60 hidden md:block" />

            <div className="flex flex-col gap-0">
              {steps.map((step, i) => (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: 'easeOut' }}
                  className={cn(
                    'relative flex gap-8 group',
                    i < steps.length - 1 && 'pb-10',
                  )}
                >
                  {/* Step circle */}
                  <div className="relative flex-shrink-0 hidden md:flex">
                    <div className="w-12 h-12 rounded-full border-2 border-border bg-surface-2 flex items-center justify-center z-10 group-hover:border-accent/40 transition-colors duration-300">
                      <span className="font-display text-xs font-semibold text-muted group-hover:text-accent transition-colors duration-300">
                        {step.n}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2 pb-2">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="md:hidden font-display text-xs font-medium text-accent">
                        {step.n}
                      </span>
                      <h3 className="font-display text-lg font-semibold text-foreground tracking-tight">
                        {step.label}
                      </h3>
                    </div>
                    <p className="text-muted text-sm leading-relaxed max-w-lg">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
