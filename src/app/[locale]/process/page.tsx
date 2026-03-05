'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface ProcessStep {
  n: string;
  label: string;
  desc: string;
  details: string[];
}

export default function ProcessPage() {
  const t = useTranslations('process');
  const steps = t.raw('steps') as ProcessStep[];

  return (
    <div className="pt-32 pb-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-24"
        >
          <SectionHeader
            overline={t('overline')}
            headline={t('headline')}
            sub={t('sub')}
          />
        </motion.div>

        {/* Full timeline */}
        <div className="relative">
          {/* Vertical connector */}
          <div className="absolute left-6 top-6 bottom-6 w-px bg-border/50 hidden md:block" />

          <div className="flex flex-col">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: 'easeOut' }}
                className={cn('relative flex gap-8 sm:gap-12', i < steps.length - 1 && 'pb-12 sm:pb-16')}
              >
                {/* Step number */}
                <div className="relative flex-shrink-0 hidden md:flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border-2 border-border bg-surface-2 flex items-center justify-center z-10 hover:border-accent/40 transition-colors duration-300 group cursor-default">
                    <span className="font-display text-xs font-semibold text-muted group-hover:text-accent transition-colors duration-300">
                      {step.n}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 rounded-2xl border border-border bg-surface-2/60 p-7 sm:p-8 hover:border-border/70 transition-colors duration-300">
                  <div className="flex flex-col gap-6">
                    {/* Header */}
                    <div className="flex items-center gap-4">
                      <span className="md:hidden font-display text-xs font-medium text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-full">
                        {step.n}
                      </span>
                      <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                        {step.label}
                      </h2>
                    </div>

                    <p className="text-muted leading-relaxed">{step.desc}</p>

                    {/* Details */}
                    <div className="pt-4 border-t border-border/40">
                      <p className="text-xs uppercase tracking-[0.18em] text-muted/50 font-medium mb-4">
                        {t('detailsLabel')}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {step.details.map((d, j) => (
                          <li key={j} className="flex items-start gap-2.5 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent/50 mt-1.5 flex-shrink-0" />
                            <span className="text-muted/80 leading-relaxed">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.6 }}
          className="mt-20 flex flex-col items-center gap-6 text-center p-12 rounded-3xl border border-accent/20 bg-accent/5"
        >
          <h3 className="font-display text-3xl font-semibold text-foreground tracking-tight">
            {t('cta.headline')}
          </h3>
          <Link href="/contact">
            <Button size="lg">{t('cta.cta')}</Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
