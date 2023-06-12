import { Button } from '@/components/buttons/Button';

export default function Clients() {
  const clientArray = [
    {
      id: 1,
      clientName: 'The House',
      projectTitle: 'Junction',
      href: '/client',
      image: 'images/company1.jpg',
      imageAlt: 'image-1',
    },
    {
      id: 2,
      clientName: 'TechGurus',
      projectTitle: 'Revolutionizing the Tech Industry',
      href: '/client',
      image: 'images/company2.jpg',
      imageAlt: 'image-2',
    },
    {
      id: 3,
      clientName: 'FashionFusion',
      projectTitle: 'Blending Fashion with Technology',
      href: '/client',
      image: 'images/company3.jpg',
      imageAlt: 'image-3',
    },
    {
      id: 4,
      clientName: 'FoodMaster',
      projectTitle: 'Exploring Culinary Delights',
      href: '/client',
      image: 'images/company4.jpg',
      imageAlt: 'image-4',
    },
  ];

  return (
    <>
      {/* main text above client section */}
      <div className='mt-32 grid grid-cols-1 '>
        <h1 className='ml-10 text-5xl text-black sm:text-4xl md:ml-20 md:text-8xl '>
          Our <span className='text-orange'>Featured</span> Work
          <br />
        </h1>
      </div>

      {/* client list */}
      <div className='ml-9 mr-9 mt-24 grid grid-cols-2 gap-12 md:ml-32 md:mr-32 md:mt-48'>
        {clientArray.map(
          ({ id, imageAlt, clientName, projectTitle, href, image }) => (
            <div key={id} className='relative col-span-2 grid md:col-span-1'>
              <img className='brightness-50  ' src={image} alt={imageAlt} />
              <div className='absolute bottom-2 left-4 flex items-center  justify-center text-white md:bottom-12    md:left-8 '>
                <h1 className='text-xl text-white md:text-5xl'>{clientName}</h1>
              </div>
            </div>
          )
        )}
        <div className='relative col-span-2 grid justify-center'>
          <div className='flex items-center pt-8'>
            <Button buttonLink='/' buttonText='See more' textColor='orange' />
          </div>
        </div>
        <div className='col-span-2 mt-12 grid border-t border-black'></div>
      </div>
    </>
  );
}
