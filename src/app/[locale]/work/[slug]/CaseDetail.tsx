'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import type { Case } from '@/lib/cases';
import { Badge } from '@/components/ui/Badge';
import { ArrowLeft, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface CaseDetailProps {
  case: Case;
  locale: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.1 } },
};

export function CaseDetail({ case: c, locale }: CaseDetailProps) {
  const t = useTranslations('work');
  const content = locale === 'et' ? c.et : c.en;

  return (
    <div className="pt-28 pb-24">
      <div className="container">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-0"
        >
          {/* Back */}
          <motion.div variants={fadeUp} className="mb-12">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors duration-200"
            >
              <ArrowLeft size={14} />
              {t('backToWork')}
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div variants={fadeUp} className="flex flex-col gap-6 mb-16 max-w-3xl">
            <div className="flex items-center gap-3">
              <Badge variant="accent">{t(`categories.${c.category}`)}</Badge>
              <span className="text-xs text-muted/60">{c.year}</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-foreground leading-tight">
              {content.title}
            </h1>
            <p className="text-muted text-xl leading-relaxed">{content.tagline}</p>
          </motion.div>

          {/* Gallery placeholder */}
          <motion.div
            variants={fadeUp}
            className="w-full h-64 sm:h-80 rounded-2xl border border-border bg-surface-2 mb-16 flex items-center justify-center relative overflow-hidden"
          >
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(ellipse at 30% 50%, hsl(var(--accent) / 0.08) 0%, transparent 60%)`,
              }}
            />
            <div className="z-10 flex flex-col items-center gap-3">
              <span className="font-display text-7xl sm:text-8xl font-semibold text-foreground/8 select-none">
                {content.metric}
              </span>
              <span className="text-sm text-muted/40 text-center">{content.metricLabel}</span>
            </div>
          </motion.div>

          {/* Key metric */}
          <motion.div
            variants={fadeUp}
            className="flex gap-8 pb-16 mb-16 border-b border-border/40"
          >
            <div className="flex flex-col gap-1">
              <span className="font-display text-6xl font-semibold text-foreground">
                {content.metric}
              </span>
              <span className="text-sm text-muted">{content.metricLabel}</span>
            </div>
          </motion.div>

          {/* Main content */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16"
          >
            {/* Left: content */}
            <div className="lg:col-span-2 flex flex-col gap-12">
              <section className="flex flex-col gap-4">
                <h2 className="font-display text-xs uppercase tracking-[0.2em] text-accent font-medium">
                  {t('problem')}
                </h2>
                <p className="text-foreground/80 leading-relaxed">{content.problem}</p>
              </section>

              <section className="flex flex-col gap-4">
                <h2 className="font-display text-xs uppercase tracking-[0.2em] text-accent font-medium">
                  {t('approach')}
                </h2>
                <p className="text-foreground/80 leading-relaxed">{content.approach}</p>
              </section>

              <section className="flex flex-col gap-4">
                <h2 className="font-display text-xs uppercase tracking-[0.2em] text-accent font-medium">
                  {t('solution')}
                </h2>
                <p className="text-foreground/80 leading-relaxed">{content.solution}</p>
              </section>

              {/* Gallery placeholders */}
              <section className="flex flex-col gap-4">
                <h2 className="font-display text-xs uppercase tracking-[0.2em] text-muted/60 font-medium">
                  {t('gallery')}
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2].map((n) => (
                    <div
                      key={n}
                      className="h-40 rounded-xl border border-border bg-surface-2/60 flex items-center justify-center"
                    >
                      <span className="text-xs text-muted/30">{n}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right: sidebar */}
            <aside className="flex flex-col gap-8">
              {/* Results */}
              <div className="rounded-2xl border border-border bg-surface-2/60 p-6 flex flex-col gap-5">
                <h3 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider">
                  {t('results')}
                </h3>
                <ul className="flex flex-col gap-3">
                  {content.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm">
                      <Check size={13} className="text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted leading-relaxed">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack */}
              <div className="rounded-2xl border border-border bg-surface-2/60 p-6 flex flex-col gap-4">
                <h3 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider">
                  {t('stack')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {content.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full border border-border bg-surface text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6 flex flex-col gap-4">
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {t('similarChallenge')}
                </p>
                <Link href="/contact">
                  <Button className="w-full" size="sm">
                    {t('startConversation')}
                  </Button>
                </Link>
              </div>
            </aside>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
