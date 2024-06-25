import React from 'react'
import Image from 'next/image'
import FadeFromOutofScreen from './Shared/FadeFromOutofScreen'

function About() {
    return (
        <section>
            <div className="grid grid-cols-1 xl:grid-cols-2 h-fit">
                <div className="bg-[#D14D72] px-12 pt-32 pb-40 md:px-32 xl:py-64 xl:px-32">
                    <FadeFromOutofScreen direction='right'>
                        <h1 className="text-[#FFE4D6] font-extrabold text-4xl md:text-6xl font-averia">About <br />
                            Toronto <br />
                            Cupcake</h1>
                        <p className="text-white text-normal text-2xl md:text-3xl pt-3 md:pt-6 font-medium font-marcellus">
                            "We are driven by loving what we do and what we make everyday.
                            We get to use the finest ingredients to make what we believe are
                            the tastiest treats around. And.. we love the idea that our treats
                            are making people happy every time they bite into one. How much
                            fun is that!"
                        </p>
                        <div className="flex items-center space-x-2">
                            <span className="text-2xl">🧁</span>
                            <span className="text-2xl">🥳</span>
                            <span className="text-2xl">&#x1F389;</span>
                        </div>
                    </FadeFromOutofScreen>
                </div>


                <div className="px-3 md:px-20 xl:py-64 xl:px-12">
                    <div id="cards" className="rounded-lg flex justify-center items-center border py-5 px-6 md:py-2 md:px-16 -mt-6 bg-white xl:-ml-24 xl:pl-8 xl:rounded-xl">
                        <section className='flex flex-col md:flex-row justify-center items-center gap-4'>
                            <div className='flex gap-6'>
                                <div className="w-8 h-8 bg-[#D14D72] md:w-16 md:h-16 rounded-full"></div>
                                <p className="text-xl pt-1 font-semibold md:text-2xl md:pt-4 md:mr-6 font-averia text-[#3D0C11]">“Meet the Owner!”</p>
                            </div>

                            <Image src="/assets/Michelle.jpg" width={300} height={300} alt={'Owner of Toronto Cupcakes'}
                                className='rounded-tl-[50px] shadow-lg shadow-[#342B38]' />
                        </section>
                    </div>


                    <div id="cards" className="rounded-lg flex border py-5 px-6 md:py-8 md:px-16 mt-6 md:mt-12 bg-white xl:pl-8 xl:rounded-xl">
                        <div className="w-12 h-24 bg-[#D14D72] rounded-full"></div>
                        <p className=" ml-4 text-xl pt-1 font-semibold md:text-2xl md:pt-4 font-marcellus text-[#3D0C11]">“
                            Toronto Cupcake was created by Michelle Harrison so she could pursue her love of baking.
                            A lifelong baker, inspired by her mother, Michelle opened Toronto Cupcake in August 2010
                            as one of Canada's first gourmet cupcakeries.”</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About