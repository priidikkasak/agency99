'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';

export function ProofStrip() {
  const t = useTranslations('home.proof');
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const items = t.raw('items') as Array<{ value: string; label: string }>;

  return (
    <section ref={ref} className="py-16 border-y border-border/40">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x sm:divide-border/40">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              className="flex flex-col gap-2 sm:px-12 first:pl-0 last:pr-0"
            >
              <span className="font-display text-5xl sm:text-6xl font-semibold tracking-tight text-foreground">
                {item.value}
              </span>
              <span className="text-sm text-muted">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
