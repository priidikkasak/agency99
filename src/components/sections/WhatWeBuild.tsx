'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Zap, Settings2, Globe } from 'lucide-react';

const icons = [Zap, Settings2, Globe];

export function WhatWeBuild() {
  const t = useTranslations('home.what');
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const items = t.raw('items') as Array<{ label: string; desc: string }>;

  return (
    <section className="py-28">
      <div className="container">
        <div ref={ref} className="flex flex-col gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <SectionHeader
              overline={t('overline')}
              headline={t('headline')}
              sub={t('sub')}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((item, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.1 + i * 0.1, ease: 'easeOut' }}
                >
                  <Card hover className="h-full flex flex-col gap-5 p-7">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="font-display text-lg font-semibold text-foreground tracking-tight">
                        {item.label}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
