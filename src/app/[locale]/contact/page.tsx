'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Check, MapPin, Mail, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FormData {
  name: string;
  email: string;
  company: string;
  website: string;
  message: string;
  budget: string;
  urgency: string;
}

const inputClass = cn(
  'w-full px-4 py-3 rounded-xl border border-border bg-surface-2/60 text-foreground text-sm',
  'placeholder:text-muted/50',
  'focus:outline-none focus:border-accent/40 focus:bg-surface-2',
  'transition-colors duration-200',
);

const labelClass = 'block text-sm text-foreground/70 mb-2';

export default function ContactPage() {
  const t = useTranslations('contact');
  const tf = useTranslations('contact.form');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    website: '',
    message: '',
    budget: '',
    urgency: '',
  });

  const budgetOptions = tf.raw('budgetOptions') as string[];
  const urgencyOptions = tf.raw('urgencyOptions') as string[];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left info column */}
          <div className="lg:col-span-2 flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <SectionHeader
                overline={t('overline')}
                headline={t('headline')}
                sub={t('sub')}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="flex flex-col gap-6"
            >
              {[
                { icon: Mail, label: t('info.emailLabel'), value: t('info.email'), href: `mailto:${t('info.email')}` },
                { icon: Clock, label: t('info.responseLabel'), value: t('info.response'), href: null },
                { icon: MapPin, label: t('info.locationLabel'), value: t('info.location'), href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-surface-2 border border-border flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={15} className="text-muted" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs text-muted/60 uppercase tracking-wider">{label}</span>
                    {href ? (
                      <a href={href} className="text-sm text-foreground hover:text-accent transition-colors duration-200">
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm text-foreground/80">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.55, delay: 0.1 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6 p-8 rounded-2xl border border-border bg-surface-2/60"
                  noValidate
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        {tf('name')} <span className="text-accent">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder={tf('namePlaceholder')}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        {tf('email')} <span className="text-accent">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder={tf('emailPlaceholder')}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className={labelClass}>
                        {tf('company')} <span className="text-accent">*</span>
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        required
                        value={form.company}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder={tf('companyPlaceholder')}
                      />
                    </div>
                    <div>
                      <label htmlFor="website" className={labelClass}>
                        {tf('website')}
                      </label>
                      <input
                        id="website"
                        name="website"
                        type="url"
                        value={form.website}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder={tf('websitePlaceholder')}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="budget" className={labelClass}>
                        {tf('budget')}
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className={cn(inputClass, 'appearance-none cursor-pointer')}
                      >
                        <option value="">{tf('budgetPlaceholder')}</option>
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="urgency" className={labelClass}>
                        {tf('urgency')}
                      </label>
                      <select
                        id="urgency"
                        name="urgency"
                        value={form.urgency}
                        onChange={handleChange}
                        className={cn(inputClass, 'appearance-none cursor-pointer')}
                      >
                        <option value="">{tf('urgencyPlaceholder')}</option>
                        {urgencyOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>
                      {tf('message')} <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className={cn(inputClass, 'resize-none')}
                      placeholder={tf('messagePlaceholder')}
                    />
                  </div>

                  <Button type="submit" disabled={loading} size="md" className="self-start">
                    {loading ? tf('submitting') : tf('submit')}
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  key="thanks"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45 }}
                  className="flex flex-col items-center text-center gap-8 p-12 rounded-2xl border border-accent/20 bg-accent/5 min-h-[400px] justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center">
                    <Check size={24} className="text-accent" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h2 className="font-display text-3xl font-semibold text-foreground tracking-tight">
                      {t('thanks.headline')}
                    </h2>
                    <p className="text-muted leading-relaxed max-w-sm">{t('thanks.sub')}</p>
                  </div>
                  <Link href="/work">
                    <Button variant="secondary">{t('thanks.cta')}</Button>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
