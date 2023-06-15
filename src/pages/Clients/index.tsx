import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  // array defining data for the Clients page
  const clientArray = [
    {
      id: 1,
      clientName: 'The House',

      href: '/client',
      image: '/images/company1.jpg',
      imageAlt: 'image-1',
    },
    {
      id: 2,
      clientName: 'TechGurus',
      href: '/client',
      image: '/images/company2.jpg',
      imageAlt: 'image-2',
    },
    {
      id: 3,
      clientName: 'FashionFusion',
      href: '/client',
      image: '/images/company3.jpg',
      imageAlt: 'image-3',
    },
    {
      id: 4,
      clientName: 'FoodMaster',
      href: '/client',
      image: '/images/company4.jpg',
      imageAlt: 'image-4',
    },
  ];

  return (
    <>
      <div className='mt-32 grid grid-cols-1 '>
        <h1 className='ml-10 text-5xl text-black sm:text-4xl md:ml-20 md:text-8xl '>
          Our <span className='text-orange'>clients</span>
          <br />
        </h1>
      </div>

      {/* client list */}
      <div className='ml-9 mr-9 mt-24 grid grid-cols-2 gap-12 md:ml-32 md:mr-32 md:mt-48'>
        {clientArray.map(({ id, imageAlt, clientName, image }) => (
          <div key={id} className='relative col-span-2 grid md:col-span-1'>
            <Link href={`/Clients/${id}`}>
              <Image
                layout='responsive'
                width={24}
                height={12}
                className='brightness-50'
                src={image}
                alt={imageAlt}
              />
              <div className='absolute bottom-2 left-4 flex items-center  justify-center text-white md:bottom-12    md:left-8 '>
                <h1 className='text-xl text-white md:text-5xl'>{clientName}</h1>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
