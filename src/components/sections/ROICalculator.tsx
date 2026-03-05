'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { SectionHeader } from '@/components/ui/SectionHeader';

function formatSavings(value: number): string {
  if (value >= 1000) {
    return `€${Math.round(value / 100) * 100}`.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ',',
    );
  }
  return `€${value}`;
}

export function ROICalculator() {
  const t = useTranslations('home.roi');
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [hours, setHours] = useState(10);
  const [people, setPeople] = useState(3);
  const [rate, setRate] = useState(60);

  const monthlySavings = Math.round(hours * people * rate * 4.33 * 0.8);
  const annualSavings = monthlySavings * 12;

  const sliders = [
    {
      key: 'hours',
      label: t('inputs.hours'),
      value: hours,
      min: 1,
      max: 40,
      step: 1,
      unit: 'h',
      onChange: (v: number) => setHours(v),
    },
    {
      key: 'people',
      label: t('inputs.people'),
      value: people,
      min: 1,
      max: 20,
      step: 1,
      unit: 'ppl',
      onChange: (v: number) => setPeople(v),
    },
    {
      key: 'rate',
      label: t('inputs.rate'),
      value: rate,
      min: 20,
      max: 200,
      step: 5,
      unit: '€/h',
      onChange: (v: number) => setRate(v),
    },
  ];

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
              sub={t('sub')}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          >
            {/* Inputs */}
            <div className="flex flex-col gap-8 p-7 rounded-2xl border border-border bg-surface-2/60">
              {sliders.map((slider) => (
                <div key={slider.key} className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm text-foreground/80">{slider.label}</label>
                    <span className="font-display text-base font-semibold text-accent tabular-nums">
                      {slider.value} {slider.unit}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={slider.min}
                    max={slider.max}
                    step={slider.step}
                    value={slider.value}
                    onChange={(e) => slider.onChange(Number(e.target.value))}
                    className="w-full"
                    aria-label={slider.label}
                  />
                  <div className="flex justify-between text-xs text-muted/50">
                    <span>
                      {slider.min} {slider.unit}
                    </span>
                    <span>
                      {slider.max} {slider.unit}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Output */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <span className="text-xs uppercase tracking-[0.2em] text-accent/70 font-medium">
                  {t('output.label')}
                </span>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={monthlySavings}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="font-display text-6xl sm:text-7xl font-semibold tracking-tight text-foreground"
                  >
                    {formatSavings(monthlySavings)}
                    <span className="text-2xl text-muted/60 font-normal ml-2">{t('perMonth')}</span>
                  </motion.div>
                </AnimatePresence>
                <p className="text-xs text-muted/50">{t('output.note')}</p>
              </div>

              <div className="pt-4 border-t border-border/40">
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-muted">{t('annualLabel')}</span>
                  <span className="font-display text-2xl font-semibold text-foreground/70">
                    {formatSavings(annualSavings)}{t('perYear')}
                  </span>
                </div>
              </div>

              <p className="text-xs text-muted/40 leading-relaxed">
                {t('disclaimer')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
