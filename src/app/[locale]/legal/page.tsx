'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

interface LegalSection {
  title: string;
  body: string;
}

type Tab = 'privacy' | 'terms';

export default function LegalPage() {
  const t = useTranslations('legal');
  const [activeTab, setActiveTab] = useState<Tab>('privacy');

  const privacy = {
    headline: t('privacy.headline'),
    updated: t('privacy.updated'),
    sections: t.raw('privacy.sections') as LegalSection[],
  };

  const terms = {
    headline: t('terms.headline'),
    updated: t('terms.updated'),
    sections: t.raw('terms.sections') as LegalSection[],
  };

  const active = activeTab === 'privacy' ? privacy : terms;

  return (
    <div className="pt-32 pb-24">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="flex flex-col gap-12"
        >
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">
              {t('overline')}
            </span>
            {/* Tab switcher */}
            <div className="inline-flex p-1 gap-1 bg-surface-2 rounded-xl border border-border self-start">
              {(['privacy', 'terms'] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    'px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    activeTab === tab
                      ? 'bg-surface border border-border text-foreground shadow-sm'
                      : 'text-muted hover:text-foreground',
                  )}
                >
                  {tab === 'privacy' ? privacy.headline : terms.headline}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-2">
              <h1 className="font-display text-3xl font-semibold text-foreground tracking-tight">
                {active.headline}
              </h1>
              <p className="text-xs text-muted/60">{active.updated}</p>
            </div>

            <div className="flex flex-col gap-8">
              {active.sections.map((section, i) => (
                <div key={i} className="flex flex-col gap-3 pb-8 border-b border-border/30 last:border-0 last:pb-0">
                  <h2 className="font-display text-base font-semibold text-foreground">
                    {section.title}
                  </h2>
                  <p className="text-muted text-sm leading-relaxed">{section.body}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
