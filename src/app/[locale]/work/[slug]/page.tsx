import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getCaseBySlug, cases } from '@/lib/cases';
import { CaseDetail } from './CaseDetail';

type Props = {
  params: { locale: string; slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await Promise.resolve(params);
  const c = getCaseBySlug(slug);
  if (!c) return {};
  const content = locale === 'et' ? c.et : c.en;

  return {
    title: content.title,
    description: content.tagline,
  };
}

export function generateStaticParams() {
  return cases.flatMap((c) =>
    ['en', 'et'].map((locale) => ({ locale, slug: c.slug })),
  );
}

export default async function CasePage({ params }: Props) {
  const { locale, slug } = await Promise.resolve(params);
  const c = getCaseBySlug(slug);
  if (!c) return notFound();

  return <CaseDetail case={c} locale={locale} />;
}
