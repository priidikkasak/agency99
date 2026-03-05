'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/Button';
import { ArrowRight, ChevronDown } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

export function Hero() {
  const t = useTranslations('home.hero');

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="container">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          {/* Overline */}
          <motion.div variants={item} className="flex items-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent font-medium">
              <span className="w-6 h-px bg-accent" />
              {t('overline')}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.08] text-foreground mb-8"
          >
            {t('headline').split('. ').map((part, i, arr) => (
              <span key={i}>
                {part}{i < arr.length - 1 ? '.' : ''}
                {i < arr.length - 1 && (
                  <>
                    {' '}
                    <br className="hidden sm:block" />
                  </>
                )}
              </span>
            ))}
          </motion.h1>

          {/* Subline */}
          <motion.p
            variants={item}
            className="text-muted text-lg sm:text-xl leading-relaxed max-w-2xl mb-10"
          >
            {t('sub')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex flex-col xs:flex-row gap-4"
          >
            <Link href="/work">
              <Button size="lg" variant="secondary">
                {t('cta1')}
                <ArrowRight size={16} />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg">
                {t('cta2')}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-muted/40"
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
