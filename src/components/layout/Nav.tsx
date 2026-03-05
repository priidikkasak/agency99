'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname, Link, useRouter } from '@/i18n/navigation';
import { Button } from '@/components/ui/Button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface NavProps {
  locale: string;
}

export function Nav({ locale }: NavProps) {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navLinks = [
    { href: '/work', label: t('work') },
    { href: '/services', label: t('services') },
    { href: '/process', label: t('process') },
    { href: '/contact', label: t('contact') },
  ];

  const toggleLocale = () => {
    const nextLocale = locale === 'en' ? 'et' : 'en';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-bg/80 backdrop-blur-xl border-b border-border/50'
            : 'bg-transparent',
        )}
      >
        <nav className="container flex items-center justify-between h-16" aria-label="Main navigation">
          {/* Logo */}
          <Link
            href="/"
            className="font-display font-semibold text-lg tracking-tight text-foreground hover:text-accent transition-colors duration-200"
          >
            Agency<span className="text-accent">99</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm transition-colors duration-200',
                  pathname === link.href
                    ? 'text-foreground'
                    : 'text-muted hover:text-foreground',
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleLocale}
              className="text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors duration-200 px-2 py-1"
              aria-label={`Switch to ${locale === 'en' ? 'Estonian' : 'English'}`}
            >
              {t('langSwitch')}
            </button>
            <Link href="/contact">
              <Button size="sm">{t('cta')}</Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleLocale}
              className="text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors duration-200"
            >
              {t('langSwitch')}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-muted hover:text-foreground transition-colors duration-200"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl pt-16"
          >
            <div className="container py-8 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.25 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'block py-4 text-2xl font-display font-medium tracking-tight border-b border-border/30 transition-colors duration-200',
                      pathname === link.href
                        ? 'text-accent'
                        : 'text-foreground/80 hover:text-foreground',
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.06 + 0.1, duration: 0.25 }}
                className="pt-6"
              >
                <Link href="/contact" className="block">
                  <Button size="lg" className="w-full">
                    {t('cta')}
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
