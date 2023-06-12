import {
  CodeBracketIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid';
import { useEffect, useRef } from 'react';

const servicesArray = [
  {
    name: 'Web developement.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Digital Marketing.',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: GlobeAltIcon,
  },
  {
    name: 'SEO',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: MagnifyingGlassIcon,
  },
];

export default function Services() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.play();
      videoElement.loop = true;
    }
  }, []);

  return (
    <div className='overflow-hidden py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
          <div className='lg:pr-8 lg:pt-4'>
            <div className='lg:max-w-lg'>
              <h2 className='text-base font-semibold leading-7 text-orange md:text-2xl'>
                We thrive on success
              </h2>
              <p className='mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-7xl'>
                Our Services
              </p>
              <p className='mt-6 text-lg leading-8 text-black'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
              <dl className='mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none'>
                {servicesArray.map((feature) => (
                  <div key={feature.name} className='relative pl-9'>
                    <dt className='inline font-semibold text-gray-900'>
                      <feature.icon
                        className='absolute left-1 top-1 h-5 w-5 text-orange'
                        aria-hidden='true'
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className='inline'>{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src='/images/agency-pic.jpg'
            className='w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0'
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
