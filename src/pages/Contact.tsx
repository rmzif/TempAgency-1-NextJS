export default function Contact() {
  return (
    <>
      <div className='grid grid-cols-4'>
        <div className='col-span-4 ml-2  mt-32 grid md:col-span-3 '>
          <h1 className='text-5xl text-black md:ml-12 md:text-8xl'>
            Want to drink <span className='text-orange'>coffee</span> with us?
          </h1>
        </div>
      </div>
      <section className='bg-white'>
        <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5'>
            <div className='lg:col-span-2 lg:py-12'>
              <p className='max-w-xl text-lg'>
                At the same time, the fact that we are wholly owned and totally
                independent from manufacturer and other group control gives you
                confidence that we will only recommend what is right for you.
              </p>

              <div className='mt-8'>
                <a href='' className='text-2xl font-bold text-orange'>
                  0151 475 4450
                </a>

                <address className='mt-2 not-italic'>
                  282 Kevin Brook, Imogeneborough, CA 58517
                </address>
              </div>
            </div>

            <div className='rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12'>
              <form action='' className='space-y-4'>
                <div>
                  <label className='sr-only' htmlFor='name'>
                    Name
                  </label>
                  <input
                    className='w-full rounded-lg border-gray-200 p-3 text-sm'
                    placeholder='Name'
                    type='text'
                    id='name'
                  />
                </div>

                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                  <div>
                    <label className='sr-only' htmlFor='email'>
                      Email
                    </label>
                    <input
                      className='w-full rounded-lg border-gray-200 p-3 text-sm'
                      placeholder='Email address'
                      type='email'
                      id='email'
                    />
                  </div>

                  <div>
                    <label className='sr-only' htmlFor='phone'>
                      Phone
                    </label>
                    <input
                      className='w-full rounded-lg border-gray-200 p-3 text-sm'
                      placeholder='Phone Number'
                      type='tel'
                      id='phone'
                    />
                  </div>
                </div>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
                  <div className='col-span-3 grid justify-center text-sm'>
                    Budget
                  </div>
                </div>
                <div className='grid grid-cols-1 gap-4 text-center sm:grid-cols-3'>
                  <div>
                    <input
                      className='peer sr-only'
                      id='option1'
                      type='radio'
                      tabIndex={-1}
                      name='option'
                    />

                    <label
                      htmlFor='option1'
                      className='block w-full rounded-lg border border-gray-200 p-3 hover:border-orange peer-checked:border-black peer-checked:bg-orange peer-checked:text-white'
                      tabIndex={0}
                    >
                      <span className='text-sm font-medium'> 10/20K </span>
                    </label>
                  </div>

                  <div>
                    <input
                      className='peer sr-only'
                      id='option2'
                      type='radio'
                      tabIndex={-1}
                      name='option'
                    />

                    <label
                      htmlFor='option2'
                      className='block w-full rounded-lg border border-gray-200 p-3 hover:border-orange peer-checked:border-black peer-checked:bg-orange peer-checked:text-white'
                      tabIndex={0}
                    >
                      <span className='text-sm font-medium'> 20/50K </span>
                    </label>
                  </div>

                  <div>
                    <input
                      className='peer sr-only'
                      id='option3'
                      type='radio'
                      tabIndex={-1}
                      name='option'
                    />

                    <label
                      htmlFor='option3'
                      className='block w-full rounded-lg border border-gray-200 p-3 hover:border-orange peer-checked:border-black peer-checked:bg-orange peer-checked:text-white'
                      tabIndex={0}
                    >
                      <span className='text-sm font-medium'> 50/100K </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className='sr-only' htmlFor='message'>
                    Message
                  </label>

                  <textarea
                    className='w-full rounded-lg border-gray-200 p-3 text-sm'
                    placeholder='Message'
                    rows={8}
                    id='message'
                  ></textarea>
                </div>

                <div className='mt-4'>
                  <button
                    type='submit'
                    className='inline-block w-full rounded-lg bg-orange px-5 py-3 font-medium text-white sm:w-auto'
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
