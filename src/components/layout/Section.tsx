import React from 'react';
import Image from 'next/image';

export default function Section() {
  return (
    <>
      <div className='mt-12 grid grid-cols-4 md:mt-32'>
        <div className='col-span-4 ml-12 mr-12 grid justify-end md:ml-24 md:mr-24'>
          {/* Section logo */}
          <Image
            id='animated-logo'
            className='ml-4 h-24 w-24 sm:w-32 md:h-12 md:w-40 lg:w-48 xl:w-56'
            src='/svg/logo.svg'
            alt='navbar-logo'
            height={12}
            width={12}
          />
        </div>
        <div className='col-span-4 ml-12 mr-12 grid justify-start md:ml-24 md:mr-24'>
          {/* Section title */}
          <h1 id='undefined' className='text-2xl text-orange md:ml-4'>
            - OUR MISSION
          </h1>
        </div>
        <div
          data-aos='fade-left'
          className='col-span-4 ml-12 mr-12 mt-14 grid justify-start md:ml-40 md:mr-40 md:mt-24'
        >
          {/* Section text */}
          <h1 className='text-3xl leading-3 text-gray-600 md:ml-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod{' '}
            <span role='img' aria-label='alien'>
              👾
            </span>
            , unde omnis iste natus error sit voluptatem accusantium veritatis
            et quasi architecto beatae vitae dicta explicabo. Nemo enim ipsam
            voluptatem
          </h1>
        </div>
        {/* black thin border-line */}
        <div className='col-span-4 ml-12 mr-12 mt-24 grid md:ml-24 md:mr-24'>
          <div className='border-t border-black'></div>
        </div>
      </div>
    </>
  );
}
