'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export function CTABlock() {
  const t = useTranslations('home.cta');
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-32">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-border/50 bg-surface-2/40 overflow-hidden p-12 sm:p-16 md:p-20 text-center"
        >
          {/* Background accent glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 60% 50% at 50% 100%, hsl(170 100% 44% / 0.07) 0%, transparent 70%)',
            }}
          />

          <div className="relative flex flex-col items-center gap-8 max-w-2xl mx-auto">
            <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-foreground leading-tight">
              {t('headline')}
            </h2>
            <p className="text-muted text-lg leading-relaxed">{t('sub')}</p>
            <Link href="/contact">
              <Button size="lg">
                {t('cta')}
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
