import * as React from 'react';

import Clients from '@/components/layout/Clients';
import Footer from '@/components/layout/Footer/Footer';
import Section from '@/components/layout/Section';
import Services from '@/components/layout/Services';
import Seo from '@/components/Seo';

import Header from '../components/layout/Header';
import Hero from '../components/layout/Hero';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <React.Fragment>
      <Seo templateTitle='Home' />
      <Seo />
      <Header />
      <Hero />
      <Section />
      <Clients />
      <Services />
      {/* <Contact /> */}
      <Footer />
    </React.Fragment>
  );
}
