import React from 'react'
import Image from 'next/image'
import FadeFromOutofScreen from '@/components/Shared/FadeFromOutofScreen'

function page() {
    return (
        <section>
            <div>
                <div className="grid grid-cols-1 xl:grid-cols-2 h-fit">
                    <div className="bg-[#e6b1c0] p-5 xl:py-20 xl:px-10 h-fit xl:h-auto -z-50">
                        <h1 className="text-[#3D0C11] font-extrabold text-4xl md:text-6xl font-averia">Some
                            of <br />
                            Our Clients</h1>
                        <p className="text-[#451221] text-normal text-2xl mb-5 md:text-3xl pt-3 md:pt-6 font-medium font-marcellus">
                            (Direct or through others)
                        </p>
                        <Image
                            src="/assets/corporate.png"
                            width={650}
                            height={800}
                            alt={'Owner of Toronto Cupcakes'}
                            className='rounded-3xl' />

                        <h2 className='text-[#3D0C11] font-medium text-3xl md:text-4xl text-center mt-4 font-averia p-5'>Our Logo Cupcakes</h2>

                        {/* IBM section */}
                        <FadeFromOutofScreen direction='left'>
                            <section className='mt-10'>
                                <h2 className='text-[#D14D72] font-medium text-3xl md:text-4xl text-center mt-4 font-averia p-5'>IBM Logo</h2>
                                <div className='flex flex-col md:flex-row gap-5 justify-center items-center pr-6'>
                                    <Image
                                        src='/assets/logo1.jpg'
                                        alt='ALT'
                                        width={100}
                                        height={50}
                                        className='rounded-br-3xl rounded-tl-3xl w-40 h-40'
                                    />

                                    <div className='flex justify-center items-center'>
                                        <p className='text-xl lg:text-2xl text-[#3D0C11] text-justify font-marcellus'>
                                            IBM uses Toronto Cupcakes for Customer meetings and Thank you gifts.
                                            We package messages in boxes of 12, 6, 4 or 1 depending on your needs.
                                        </p>
                                    </div>
                                </div>
                                <hr className='border-b-2 border-[#D14D72] mt-10'></hr>
                            </section>
                        </FadeFromOutofScreen>

                        {/* Android section */}
                        <FadeFromOutofScreen direction='left'>
                            <section className='mt-10'>
                                <h2 className='text-[#D14D72] font-medium text-3xl md:text-4xl text-center mt-4 font-averia p-5'>Android Logo</h2>
                                <div className='flex flex-col md:flex-row gap-5 justify-center items-center pr-6'>
                                    <Image
                                        src='/assets/logo2.jpg'
                                        alt='ALT'
                                        width={100}
                                        height={50}
                                        className='rounded-br-3xl rounded-tl-3xl w-40 h-40'
                                    />

                                    <div className='flex justify-center items-center'>
                                        <p className='text-xl lg:text-2xl text-[#3D0C11] text-justify font-marcellus'>
                                            Our friends at the local cell phone store ordered these die-cut droids
                                            for a 2 day event celebrating the most recent incarnation of Android.
                                        </p>
                                    </div>
                                </div>
                                <hr className='border-b-2 border-[#D14D72] mt-10'></hr>
                            </section>
                        </FadeFromOutofScreen>

                        {/* Always On call section */}
                        <FadeFromOutofScreen direction='left'>
                            <section className='mt-10'>
                                <h2 className='text-[#D14D72] font-medium text-3xl md:text-4xl text-center mt-4 font-averia p-5'>Always On Call Logo</h2>
                                <div className='flex flex-col md:flex-row gap-5 justify-center items-center pr-6'>
                                    <Image
                                        src='/assets/logo3.jpg'
                                        alt='ALT'
                                        width={100}
                                        height={50}
                                        className='rounded-br-3xl rounded-tl-3xl w-40 h-40'
                                    />

                                    <div className='flex justify-center items-center'>
                                        <p className='text-xl lg:text-2xl text-[#3D0C11] text-justify font-marcellus'>
                                            Always on Call wanted to thank their clients for choosing Always on Call for
                                            their on the road support needs.
                                        </p>
                                    </div>
                                </div>
                                <hr className='border-b-2 border-[#D14D72] mt-10'></hr>
                            </section>
                        </FadeFromOutofScreen>

                        {/* Display Stand section */}
                        <FadeFromOutofScreen direction='left'>
                            <section className='mt-10'>
                                <h2 className='text-[#D14D72] font-medium text-3xl md:text-4xl text-center mt-4 font-averia p-5'>Event Displays</h2>
                                <div className='flex flex-col md:flex-row gap-5 justify-center items-center pr-6'>
                                    <Image
                                        src='/assets/logo4.jpg'
                                        alt='ALT'
                                        width={100}
                                        height={50}
                                        className='rounded-br-3xl rounded-tl-3xl w-40 h-40'
                                    />

                                    <div className='flex justify-center items-center'>
                                        <p className='text-xl lg:text-2xl text-[#3D0C11] text-justify font-marcellus'>
                                            We can use one of our many display stands or build one to your specs to display your
                                            theme cupcakes and wow your audience.
                                        </p>
                                    </div>
                                </div>
                                <hr className='border-b-2 border-[#D14D72] mt-10'></hr>
                            </section>
                        </FadeFromOutofScreen>
                    </div>

                    {/* Right Section */}

                    <div className="px-3 md:px-20 xl:my-auto xl:px-12">
                        <FadeFromOutofScreen direction='left'>
                            <div id="cards" className="rounded-lg border-l-8 border-[#D14D72] border py-5 px-6 md:py-2 md:px-16 -mt-6 bg-white xl:-ml-24 xl:pl-8 xl:rounded-xl flex justify-center items-center">
                                <section className='flex flex-col gap-4 p-5'>
                                    <h1 className="text-2xl pt-1 font-semibold md:text-4xl md:pt-4 md:mr-6 font-averia text-[#3D0C11]">Corporate and Marketing Events</h1>
                                    <h2 className='text-xl md:text-2xl font-marcellus text-[#D14D72] font-extrabold'>Creating Uniqueness</h2>
                                </section>
                            </div>
                        </FadeFromOutofScreen>
                        <div id="cards" className="rounded-lg flex border py-5 px-6 md:py-8 md:px-16 mt-6 md:mt-12 bg-white xl:pl-8 xl:rounded-xl">
                            <p className="text-justify ml-4 text-xl pt-1 font-semibold md:text-2xl md:pt-4 font-marcellus text-[#3D0C11] border-l-4 border-[#D14D72] p-5">
                                “From Product/Brand Launch to Customer Appreciation, Toronto Cupcake is able to provide you custom decorating to match that winning campaign.
                                Our Graphics Department will work with you to reproduce Logos, Icons, Slogans , etc on an edible fondant disc or hand pressed lettering on a fondant disc. Our frostings can be made to mimic your theme colours or to use as a neutral backdrop.
                                Our graphics are crystal clear and because we mount them on fondant they look great and are edible!”</p>
                        </div>
                        <div id="cards" className="rounded-lg border-l-8 border-[#D14D72] py-5 px-6 md:py-2 md:px-16 bg-white mt-6 md:mt-12 xl:-ml-24 xl:pl-8 xl:rounded-xl">
                            <section className='flex flex-col gap-4 p-5'>
                                <h2 className='text-2xl md:text-4xl font-averia text-[#D14D72] font-extrabold'>How can you send us what you require?</h2>
                                <p className="text-justify ml-4 text-xl pt-1 font-semibold md:text-2xl md:pt-4 font-marcellus text-[#3D0C11] border-l-4 border-[#D14D72] p-5">
                                    "You can send us your graphics in almost any format (jpg, png, gif, bmp, svg, etc) and we will take it from there.
                                    We will work with you on special delivery requests and packaging if needed.
                                    We will deliver your marketing materials along with our cupcakes."</p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page