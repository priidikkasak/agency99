'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItem {
  q: string;
  a: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className={cn('flex flex-col divide-y divide-border', className)}>
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-start justify-between gap-4 py-6 text-left group"
            aria-expanded={open === i}
          >
            <span
              className={cn(
                'font-display text-base font-medium transition-colors duration-200',
                open === i ? 'text-foreground' : 'text-foreground/80 group-hover:text-foreground',
              )}
            >
              {item.q}
            </span>
            <span className="mt-0.5 flex-shrink-0 text-muted group-hover:text-accent transition-colors duration-200">
              {open === i ? <Minus size={16} /> : <Plus size={16} />}
            </span>
          </button>

          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                key="answer"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                style={{ overflow: 'hidden' }}
              >
                <p className="pb-6 text-muted text-sm leading-relaxed">{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
