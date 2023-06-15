import Image from 'next/image';

export default function Page() {
  return (
    <>
      {/* Project title */}
      <div className='mt-24 grid grid-cols-4'>
        <div className='col-span-4 grid justify-center'>
          <h1 className='text-5xl text-black md:text-8xl'>Square Logistics</h1>
        </div>
      </div>

      {/* seperation lines */}
      <div className='mt-12 grid grid-cols-3 md:mt-40'>
        {/* Timeline  */}
        <div className='col-span-3 mt-12 grid justify-center md:col-span-1 md:mt-0 md:justify-end'>
          <p className='grid justify-center font-bold'>Timeline</p>
          <div className='w-52 border-t border-black'>
            <p className='mt-2 grid justify-center font-bold text-orange'>
              4 weeks
            </p>
          </div>
        </div>

        {/* Service */}
        <div className='col-span-3 mt-12 grid justify-center md:col-span-1 md:mt-0'>
          <p className='grid justify-center font-bold'>Service</p>
          <div className='w-52 border-t border-black'>
            <p className='mt-2 grid justify-center font-bold text-orange'>
              Brand design
            </p>
          </div>
        </div>

        {/* Clients */}
        <div className='col-span-3 mt-12 grid justify-center md:col-span-1 md:mt-0 md:justify-start'>
          <p className='grid justify-center font-bold'>Client</p>
          <div className='w-52 border-t border-black'>
            <p className='mt-2 grid justify-center font-bold text-orange'>
              Square Logistics
            </p>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className='ml-8 mr-8 mt-24 grid grid-cols-2 md:ml-0 md:mr-0'>
        <div className='col-span-2 grid justify-center'>
          <Image
            width={100}
            height={100}
            layout='responsive'
            alt='client-image'
            className='rounded-lg'
            src='/images/company1.jpg'
          />
        </div>
      </div>

      {/*Text  */}
      <div className='mt-12 grid grid-cols-6'>
        <div className='col-span-4 col-start-2 grid justify-start'>
          <h1 className='text-5xl'>Lorem ipsum</h1>
        </div>
        <div className='col-span-4 col-start-2 mt-12 grid justify-center'>
          The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum." Section 1.10.32 of "de Finibus Bonorum et
          Malorum", written by Cicero in 45 BC "Sed ut perspiciatis unde omnis
          iste natus error sit voluptatem accusantium doloremque laudantium,
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
          quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
          voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
          enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?"
        </div>
      </div>
    </>
  );
}
