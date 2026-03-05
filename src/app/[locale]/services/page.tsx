'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceItem {
  label: string;
  tagline: string;
  desc: string;
  outcomes: string[];
  deliverables: string[];
  timeline: string;
  engagement: string[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function ServicesPage() {
  const t = useTranslations('services');
  const items = t.raw('items') as ServiceItem[];

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

        <div className="flex flex-col gap-6">
          {items.map((service, i) => (
            <motion.div
              key={service.label}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={i}
            >
              <div className="rounded-2xl border border-border bg-surface-2/60 overflow-hidden">
                {/* Header */}
                <div className="p-8 sm:p-10 border-b border-border/40">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-10">
                    <div className="flex-1 flex flex-col gap-3">
                      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
                        {service.label}
                      </h2>
                      <p className="text-accent text-sm font-medium">{service.tagline}</p>
                      <p className="text-muted text-sm leading-relaxed max-w-2xl mt-1">
                        {service.desc}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="text-xs text-muted/60 mb-1 uppercase tracking-wider">
                        {t('timelineLabel')}
                      </div>
                      <div className="text-sm text-foreground/80">{service.timeline}</div>
                    </div>
                  </div>
                </div>

                {/* Details grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border/40">
                  {/* Outcomes */}
                  <div className="p-8">
                    <h3 className="text-xs uppercase tracking-[0.18em] text-accent/70 font-medium mb-5">
                      {t('outcomesLabel')}
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {service.outcomes.map((o, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm">
                          <Check size={13} className="text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-muted leading-relaxed">{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div className="p-8">
                    <h3 className="text-xs uppercase tracking-[0.18em] text-muted/50 font-medium mb-5">
                      {t('deliverablesLabel')}
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {service.deliverables.map((d, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm">
                          <span className="w-1 h-1 rounded-full bg-border mt-2 flex-shrink-0" />
                          <span className="text-muted leading-relaxed">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Engagement */}
                  <div className="p-8">
                    <h3 className="text-xs uppercase tracking-[0.18em] text-muted/50 font-medium mb-5">
                      {t('engagementLabel')}
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {service.engagement.map((e, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm">
                          <span className="w-1 h-1 rounded-full bg-border mt-2 flex-shrink-0" />
                          <span className="text-muted leading-relaxed">{e}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="mt-20 flex flex-col sm:flex-row items-center gap-6 p-8 rounded-2xl border border-accent/20 bg-accent/5"
        >
          <p className="text-foreground/80 text-lg flex-1">
            {t('notSureText')}
          </p>
          <Link href="/contact" className="flex-shrink-0">
            <Button size="md">{t('cta')}</Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
