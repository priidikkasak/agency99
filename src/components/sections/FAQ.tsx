'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Accordion } from '@/components/ui/Accordion';

interface FAQItem {
  q: string;
  a: string;
}

export function FAQ() {
  const t = useTranslations('home.faq');
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const items = t.raw('items') as FAQItem[];

  return (
    <section className="py-28 bg-surface/20">
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
              align="center"
              className="items-center text-center mx-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="max-w-2xl mx-auto w-full"
          >
            <Accordion items={items} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
