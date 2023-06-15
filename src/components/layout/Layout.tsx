import * as React from 'react';

import Header from './Header';
import Footer from './Footer/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      {/* wrapping the header and footer so it only has to be defined once to be able to be used on the whole app */}
      <Header />
      <main className='layout'>{children}</main>
      <Footer />
    </React.Fragment>
  );
}
