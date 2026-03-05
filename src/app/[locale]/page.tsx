import { Hero } from '@/components/sections/Hero';
import { ProofStrip } from '@/components/sections/ProofStrip';
import { WhatWeBuild } from '@/components/sections/WhatWeBuild';
import { AutomationMap } from '@/components/sections/AutomationMap';
import { CaseStudiesPreview } from '@/components/sections/CaseStudiesPreview';
import { Packages } from '@/components/sections/Packages';
import { ProcessSnapshot } from '@/components/sections/ProcessSnapshot';
import { ROICalculator } from '@/components/sections/ROICalculator';
import { FAQ } from '@/components/sections/FAQ';
import { CTABlock } from '@/components/sections/CTABlock';
import { ForNotFor } from '@/components/sections/ForNotFor';

type Props = {
  params: { locale: string };
};

export default async function HomePage({ params }: Props) {
  const { locale } = await Promise.resolve(params);

  return (
    <>
      <Hero />
      <ProofStrip />
      <WhatWeBuild />
      <AutomationMap />
      <CaseStudiesPreview locale={locale} />
      <Packages />
      <ProcessSnapshot />
      <ROICalculator />
      <ForNotFor />
      <FAQ />
      <CTABlock />
    </>
  );
}
