import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');

  const navLinks = [
    { href: '/work', label: t('work') },
    { href: '/services', label: t('services') },
    { href: '/process', label: t('process') },
    { href: '/contact', label: t('contact') },
    { href: '/legal', label: t('legal') },
  ];

  const socials = [
    { href: 'https://github.com', icon: Github, label: 'GitHub' },
    { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://x.com', icon: Twitter, label: 'X / Twitter' },
  ];

  return (
    <footer className="border-t border-border/50 mt-32">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="font-display font-semibold text-xl tracking-tight text-foreground hover:text-accent transition-colors duration-200 w-fit"
            >
              Agency<span className="text-accent">99</span>
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-xs">{t('tagline')}</p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors duration-200 w-fit"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact + socials */}
          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${t('email')}`}
              className="text-sm text-foreground hover:text-accent transition-colors duration-200 w-fit"
            >
              {t('email')}
            </a>
            <div className="flex items-center gap-4">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-foreground transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-muted/60">{t('copy')}</p>
          <div className="flex items-center gap-4">
            <Link href="/legal" className="text-xs text-muted/60 hover:text-muted transition-colors duration-200">
              {t('privacy')}
            </Link>
            <Link href="/legal" className="text-xs text-muted/60 hover:text-muted transition-colors duration-200">
              {t('terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
