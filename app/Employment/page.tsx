import FadeFromOutofScreen from '@/components/Shared/FadeFromOutofScreen'
import React from 'react'
import Image from 'next/image'

function page() {
    return (
        <div className="mt-5">
            <div className="grid grid-cols-1 xl:grid-cols-2 h-fit">
                <div className="relative xl:py-64 xl:px-32 h-[500px] xl:h-auto -z-50">
                    <Image
                        src="/assets/employmentPic.jpg"
                        layout="fill"
                        objectFit="cover"
                        alt={'Owner of Toronto Cupcakes'}
                        className='absolute inset-0' />
                </div>
                <div className="px-3 md:px-20 xl:py-64 xl:px-12">

                    <FadeFromOutofScreen direction='left'>
                        <div id="cards" className="rounded-lg border-l-8 border-[#D14D72] py-5 px-6 md:py-2 md:px-16 -mt-6 bg-white xl:-ml-24 xl:pl-8 xl:rounded-xl">
                            <section className='flex flex-col gap-4 p-5'>
                                <h1 className="text-2xl pt-1 font-semibold md:text-4xl md:pt-4 md:mr-6 font-averia text-[#3D0C11]">Employment/Careers</h1>
                                <h2 className='text-xl md:text-2xl font-marcellus text-[#D14D72] font-extrabold'>Come Grow with Us</h2>
                            </section>
                        </div>
                    </FadeFromOutofScreen>
                    <div id="cards" className="rounded-lg flex border py-5 px-6 md:py-8 md:px-16 mt-6 md:mt-12 bg-white xl:pl-8 xl:rounded-xl">
                        <p className=" ml-4 text-xl pt-1 font-semibold md:text-2xl md:pt-4 font-marcellus text-[#3D0C11] border-l-4 border-[#D14D72] p-5">
                            “Toronto Cupcake is always interested in discussing our work with anyone who would like to help us in
                            making Toronto Cupcake more successful. In turn, we provide an environment where you can
                            grow and succeed. Benefits include extended Health, Dental and Drug insurance, paid personal
                            days, invitations to special events, and free cupcakes! In addition, Toronto Cupcake's associate
                            recognition programme offers awards and bonuses for individuals who deliver on our reputation
                            for outstanding quality and superior customer service.”</p>
                    </div>
                    <FadeFromOutofScreen direction='left'>
                        <div id="cards" className="rounded-lg border-l-8 border-[#D14D72] py-5 px-6 md:py-2 md:px-16 bg-white mt-6 md:mt-12 xl:-ml-24 xl:pl-8 xl:rounded-xl">
                            <section className='flex flex-col gap-4 p-5'>
                                <h2 className='text-2xl md:text-4xl font-averia text-[#D14D72] font-extrabold'>Store Associate Position:</h2>
                                <p className=" ml-4 text-xl pt-1 font-semibold md:text-2xl md:pt-4 font-marcellus text-[#3D0C11] border-l-4 border-[#D14D72] p-5">
                                    Every day customers turn to Toronto Cupcake to help them have a little ray of sunshine in their life.
                                    Which means that as a Toronto Cupcake Store Associate your work is as much about getting the customer
                                    to smile as it is about assisting clients in cupcake selection. Store Associate positions offer flexible
                                    hours in a fun and dynamic work environment with exciting career growth possibilities for
                                    outstanding performers.</p>
                            </section>
                        </div>
                    </FadeFromOutofScreen>
                </div>
            </div>
        </div>
    )
}

export default page
