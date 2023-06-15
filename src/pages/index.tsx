import * as React from 'react';

import Clients from '@/components/layout/Clients';
import Section from '@/components/layout/Section';
import Services from '@/components/layout/Services';
import Seo from '@/components/Seo';
import Hero from '@/components/layout/Hero';

export default function HomePage() {
  return (
    <div>
      <Seo templateTitle='Home' />
      <Hero />
      <Section />
      <Clients />
      <Services />
    </div>
  );
}
