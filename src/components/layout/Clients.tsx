import Link from 'next/link';
import Image from 'next/image';

export default function Clients() {
  const clientArray = [
    {
      id: 1,
      clientName: 'The House',
      projectTitle: 'Veradd',
      href: '/Clients/1',
      image: '/images/company1.jpg',
      imageAlt: 'image-1',
    },
    {
      id: 2,
      clientName: 'TechGurus',
      projectTitle: 'Revolutionizing the Tech Industry',
      href: '/Clients/1',
      image: '/images/company2.jpg',
      imageAlt: 'image-2',
    },
    {
      id: 3,
      clientName: 'FashionFusion',
      projectTitle: 'Blending Fashion with Technology',
      href: '/Clients/1',
      image: '/images/company3.jpg',
      imageAlt: 'image-3',
    },
    {
      id: 4,
      clientName: 'FoodMaster',
      projectTitle: 'Exploring Culinary Delights',
      href: '/Clients/1',
      image: '/images/company4.jpg',
      imageAlt: 'image-4',
    },
  ];

  return (
    <div>
      {/* main text above client section */}
      <div className='mt-32 grid grid-cols-1 '>
        <h1 className='ml-10 text-5xl text-black sm:text-4xl md:ml-20 md:text-8xl '>
          Our <span className='text-orange'>Featured</span> Work
          <br />
        </h1>
      </div>

      {/* client list */}
      <div className='ml-9 mr-9 mt-24 grid grid-cols-2 gap-12 md:ml-32 md:mr-32 md:mt-48'>
        {clientArray.map(({ id, imageAlt, clientName, href, image }) => (
          <div key={id} className='relative col-span-2 grid md:col-span-1'>
            <Link href={href}>
              <div>
                <Image
                  layout='responsive'
                  width={24}
                  height={12}
                  className='brightness-50'
                  src={image}
                  alt={imageAlt}
                />
                <div className='absolute bottom-2 left-4 flex items-center justify-center text-white md:bottom-12 md:left-8'>
                  <h1 className='text-xl text-white md:text-5xl'>
                    {clientName}
                  </h1>
                </div>
              </div>
            </Link>
          </div>
        ))}
        <div className='relative col-span-2 grid justify-center'>
          <div className='flex items-center pt-8'>
            <Link href='/Clients'>
              <button className='group relative inline-flex items-center overflow-hidden rounded border border-current border-orange px-8 py-3 focus:outline-none focus:ring active:text-white'>
                <span className='absolute -end-full transition-all group-hover:end-4'>
                  <svg
                    className='h-5 w-5 rtl:rotate-180'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M17 8l4 4m0 0l-4 4m4-4H3'
                    />
                  </svg>
                </span>
                <span className='text-sm font-medium text-orange transition-all group-hover:me-4'>
                  See more
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className='col-span-2 mt-12 grid border-t border-black'></div>
      </div>
    </div>
  );
}
