'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PackageItem {
  name: string;
  duration: string;
  price: string;
  desc: string;
  features: string[];
  featured?: boolean;
}

export function Packages() {
  const t = useTranslations('home.packages');
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const items = t.raw('items') as PackageItem[];

  return (
    <section className="py-28 bg-surface/20">
      <div className="container">
        <div ref={ref} className="flex flex-col gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-6"
          >
            <SectionHeader
              overline={t('overline')}
              headline={t('headline')}
              sub={t('sub')}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {items.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
                className="flex"
              >
                <div
                  className={cn(
                    'flex flex-col w-full rounded-2xl border p-7 transition-all duration-300',
                    pkg.featured
                      ? 'border-accent/30 bg-surface-2 shadow-glow-sm relative'
                      : 'border-border bg-surface-2/60 hover:border-border/80',
                  )}
                >
                  {pkg.featured && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent text-bg text-xs font-semibold tracking-wide">
                        {t('popular')}
                      </span>
                    </div>
                  )}

                  <div className="flex flex-col gap-6 flex-1">
                    {/* Header */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-display text-xl font-semibold text-foreground tracking-tight">
                          {pkg.name}
                        </h3>
                        <span className="text-xs text-muted whitespace-nowrap mt-1">
                          {pkg.duration}
                        </span>
                      </div>
                      <p className="text-muted text-sm">{pkg.desc}</p>
                    </div>

                    {/* Price */}
                    <div>
                      <span className="font-display text-3xl font-semibold text-foreground tracking-tight">
                        {pkg.price}
                      </span>
                    </div>

                    {/* Features */}
                    <ul className="flex flex-col gap-3 flex-1">
                      {pkg.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm">
                          <Check
                            size={14}
                            className={cn(
                              'mt-0.5 flex-shrink-0',
                              pkg.featured ? 'text-accent' : 'text-muted',
                            )}
                          />
                          <span className="text-muted/90">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link href="/contact" className="block">
                      <Button
                        variant={pkg.featured ? 'primary' : 'secondary'}
                        className="w-full"
                        size="md"
                      >
                        {t('getStarted')}
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
