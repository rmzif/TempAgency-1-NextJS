import { Dialog, Popover } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const headerArray = [
  {
    id: 1,
    title: 'About Us',
    href: '/About',
  },
  {
    id: 2,
    title: 'Clients',
    href: '/Clients',
  },
  {
    id: 3,
    title: 'Contact',
    href: '/Contact',
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      // header animation when user loads up on the website
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='sticky top-4 z-10 ml-4 mr-4 rounded-lg bg-orange sm:mt-8 md:ml-12 md:mr-12'
    >
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-2 lg:p-4'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <Link href='/'>
            <span className='sr-only'>Your Company</span>
            <Image
              className='h-12 w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56'
              src='/svg/LogoHeader.svg'
              alt='Your Company'
              id='imageId'
              width={12}
              height={12}
            />
          </Link>
        </div>
        <div className='flex lg:hidden'>
          {/* responsive button for mobile users to open header */}
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        {/*  */}
        {/* DESKTOP PC HEADER*/}
        <Popover.Group className='hidden lg:flex lg:gap-x-12'>
          {headerArray.map(({ id, title, href }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.4 * id }}
            >
              <Link href={href} className='leading-6 text-white'>
                {title}
              </Link>
            </motion.div>
          ))}
        </Popover.Group>
        {/*  */}
      </nav>
      <Dialog
        as='div'
        className='lg:hidden '
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <Link href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <Image
                className='h-12 w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56'
                src='svg/Logo.svg'
                id='imageId'
                alt='header-logo'
                width={12}
                height={12}
              />
            </Link>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-black'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6 ' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root '>
            <div className='-my-6 divide-y divide-gray-500/10'>
              {/* MOBILE MENU HEADER*/}
              <div className='space-y-2 py-6'>
                {headerArray.map(({ id, title, href }) => {
                  return (
                    <Link
                      href={href}
                      className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-orange hover:bg-gray-50 '
                      key={id}
                      onClick={() => {
                        setMobileMenuOpen(false); // Close the header for mobile users
                      }}
                    >
                      {title}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </motion.header>
  );
}
