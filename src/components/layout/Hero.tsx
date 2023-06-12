import React from 'react';

export default function Hero() {
  return (
    <div className='mt-32 grid grid-cols-4 '>
      <div className='col-span-4 ml-12 mr-12 grid justify-center md:justify-start'>
        {/* Hero main text */}
        <h1
          id='animted-hero-text'
          className='text-3xl text-black sm:text-4xl md:ml-12 md:text-6xl'
          style={{ lineHeight: '1.3' }}
        >
          Wij zijn <span className='text-orange'>Pixelperfectie</span> -<br />
          Jouw webdesign + branding Bureau uit München.
        </h1>
      </div>
      <div className='col-span-4 ml-4 mr-4 mt-32 grid md:ml-12 md:mt-32 '>
        <div className='relative grid justify-center grayscale-[20%]'>
          {/* Hero image */}
          <img
            className='h-full w-full object-cover'
            id='imageId'
            alt='hero-image'
            src='images/cube.png'
          />
        </div>
      </div>
    </div>
  );
}
