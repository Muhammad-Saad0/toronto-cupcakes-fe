import Occasion from '@/components/Occasion'
import React from 'react'
import Image from 'next/image'
import BackToTop from '@/components/Shared/BackToTop'

function page() {
  return (
    <div>
      <main className='h-fit w-full p-10'>
        <h2 className='text-[#D14D72] font-medium text-3xl md:text-4xl text-center font-averia mb-5'>Occasions</h2>

        <section className='max-w-[800px] flex justify-center items-center m-auto mb-20 border-l-8 border-r-8 border-[#3D0C11] rounded-3xl'>
          <section className='flex flex-col gap-2'>
            <section className='p-5'>
              <h1 className='font-lobster text-center my-4 text-3xl md:text-4xl text-[#D14D72]'>A celebration of life, love, and all of life's memorable events</h1>
            </section>
            <p className='text-lg md:text-2xl text-[#3D0C11] text-justify px-4 md:px-32 font-marcellus'>
              Toronto Cupcake would love to help make your special occasion one to remember.
            </p>

            <p className='text-lg md:text-2xl text-[#3D0C11] text-justify px-4 md:px-32 font-marcellus'>
              <span className='font-bold'>Wedding and Engagements</span> - we have over 1500 different
              combinations with our standard offerings but if you want something
              special we would love to make it happen. We have many different sized
              and shaped cupcake stands available for your use or we can design and make one just for you.
            </p>

            <p className='text-lg md:text-2xl text-[#3D0C11] text-justify px-4 md:px-32 font-marcellus'>
              <span className='font-bold'>Birthdays/Anniversaries </span> - Themed birthdays or anniversaries are all the rage. From Cookie Monster to The Bachelorette we have done them all.
            </p>
          </section>
        </section>

        <h2 className='text-[#D14D72] font-medium text-3xl md:text-4xl text-center mt-4 font-averia p-5'>Weddings & Engagements</h2>
        <section className='mt-10 max-w-[1200px] m-auto border-l-2 border-r-2 border-[#3D0C11] rounded-xl '>
          <Occasion />
        </section>

        <h2 className='text-[#D14D72] font-medium text-3xl md:text-4xl text-center mt-4 font-averia p-5'>Birthdays/Anniversaries</h2>
        <section className='mt-10 max-w-[1200px] m-auto border-l-2 border-r-2 border-[#3D0C11] rounded-xl p-5'>
          <div className='flex flex-col md:flex-row gap-5 justify-center items-center p-4'>
            <Image
              src='/assets/BD.jpg'
              alt='ALT'
              width={250}
              height={50}
              className='rounded-br-3xl rounded-tl-3xl'
            />

            <div className='flex justify-center items-center'>
              <p className='text-xl lg:text-2xl text-[#3D0C11] text-justify font-marcellus'>
                We will work with you to create a personalized display tailored to match the size
                and style of your party. We can also create a unique multi-layered birthday/anniversary
                cake to be placed on the top tier.
              </p>
            </div>
          </div>
          <hr className='border-b-2 border-[#D14D72] mt-10'></hr>
        </section>
      </main>
      <BackToTop />
    </div>
  )
}

export default page