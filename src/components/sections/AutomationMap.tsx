'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Database, Cpu, GitBranch, Zap, Bell, X, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type NodeId = 'input' | 'process' | 'decide' | 'act' | 'notify';

const nodeIcons: Record<NodeId, React.ElementType> = {
  input: Database,
  process: Cpu,
  decide: GitBranch,
  act: Zap,
  notify: Bell,
};

const nodeOrder: NodeId[] = ['input', 'process', 'decide', 'act', 'notify'];

export function AutomationMap() {
  const t = useTranslations('home.automationMap');
  const [selected, setSelected] = useState<NodeId | null>('input');
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const selectedNode = selected
    ? {
        title: t(`nodes.${selected}.title`),
        desc: t(`nodes.${selected}.desc`),
        outcome: t(`nodes.${selected}.outcome`),
      }
    : null;

  return (
    <section className="py-28 bg-surface/30">
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

          {/* Pipeline nodes */}
          <div className="flex flex-col gap-8">
            <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0">
              {nodeOrder.map((nodeId, i) => {
                const Icon = nodeIcons[nodeId];
                const isSelected = selected === nodeId;
                const isActive = selected
                  ? nodeOrder.indexOf(selected) >= i
                  : false;

                return (
                  <div key={nodeId} className="flex sm:flex-1 flex-row sm:flex-col items-center">
                    {/* Connector line before node (skip first) */}
                    {i > 0 && (
                      <div className="sm:hidden w-6 h-px flex-shrink-0 bg-border/60 mx-2" />
                    )}
                    {i > 0 && (
                      <div
                        className={cn(
                          'hidden sm:block h-px flex-1 transition-all duration-500',
                          isActive ? 'bg-accent/40' : 'bg-border/60',
                        )}
                        style={{ marginTop: '-1px' }}
                      />
                    )}

                    {/* Node button */}
                    <motion.button
                      onClick={() => setSelected(nodeId === selected ? null : nodeId)}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className={cn(
                        'relative flex flex-col items-center gap-2 group focus:outline-none flex-shrink-0',
                      )}
                      aria-pressed={isSelected}
                      aria-label={t(`nodes.${nodeId}.label`)}
                    >
                      <div
                        className={cn(
                          'w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border-2 flex items-center justify-center transition-all duration-300',
                          isSelected
                            ? 'bg-accent/15 border-accent shadow-glow-sm'
                            : 'bg-surface-2 border-border group-hover:border-accent/40 group-hover:bg-surface',
                        )}
                      >
                        <Icon
                          size={20}
                          className={cn(
                            'transition-colors duration-300',
                            isSelected
                              ? 'text-accent'
                              : 'text-muted group-hover:text-foreground',
                          )}
                        />
                        {/* Pulse ring for selected */}
                        {isSelected && (
                          <motion.div
                            className="absolute inset-0 rounded-2xl border-2 border-accent/40"
                            animate={{ scale: [1, 1.15], opacity: [0.6, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
                          />
                        )}
                      </div>
                      <span
                        className={cn(
                          'text-xs font-medium transition-colors duration-200',
                          isSelected ? 'text-accent' : 'text-muted group-hover:text-foreground',
                        )}
                      >
                        {t(`nodes.${nodeId}.label`)}
                      </span>
                    </motion.button>

                    {/* Arrow connector after each node (except last) */}
                    {i < nodeOrder.length - 1 && (
                      <div className="hidden sm:flex flex-1 items-center justify-center">
                        <ArrowRight
                          size={14}
                          className={cn(
                            'flex-shrink-0 transition-colors duration-500',
                            isActive ? 'text-accent/60' : 'text-border',
                          )}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Detail panel */}
            <AnimatePresence mode="wait">
              {selected && selectedNode && (
                <motion.div
                  key={selected}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="relative rounded-2xl border border-accent/20 bg-surface-2/60 backdrop-blur-sm p-6 sm:p-8"
                >
                  <button
                    onClick={() => setSelected(null)}
                    className="absolute top-4 right-4 p-1.5 text-muted hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-surface"
                    aria-label="Close"
                  >
                    <X size={14} />
                  </button>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pr-8">
                    <div className="flex flex-col gap-3">
                      <h3 className="font-display text-xl font-semibold text-foreground tracking-tight">
                        {selectedNode.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed">{selectedNode.desc}</p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <span className="text-xs uppercase tracking-[0.2em] text-accent/70 font-medium">
                        {t('outcomeLabel')}
                      </span>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {selectedNode.outcome}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
