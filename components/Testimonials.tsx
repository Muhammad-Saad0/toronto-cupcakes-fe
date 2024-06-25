import React from 'react'
import FadeFromOutofScreen from './Shared/FadeFromOutofScreen'

function Testimonials() {
    return (
        <div className='bg-[#FFB4C2]'>
            <section className="my-8">
                <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
                    <h1 className="text-4xl font-semibold leading-none text-center font-averia text-[#3D0C11]">What our customers are saying about us</h1>
                </div>
                <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-10 md:px-10 md:pb-10 lg:grid-cols-2 p-5">
                    <div className="flex flex-col items-center shadow-md shadow-[#3D0C11] bg-white rounded-md p-5 text-xl font-medium">
                            <div className="relative text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-6 h-6 dark:text-gray-300">
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>
                                <p className="px-6 py-1 italic">These cupcakes are a little piece of heaven! Each bite is pure bliss—moist cake, perfectly creamy frosting. I'm in love! I've never tasted cupcakes this good before! They're not just desserts; they're edible happiness.</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-6 h-6 dark:text-gray-300">
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </div>

                        <span className="w-12 h-1 my-2 rounded-lg"></span>
                        <p>Leroy Jenkins</p>
                    </div>
                        <div className="flex flex-col items-center shadow-md shadow-[#3D0C11] bg-white rounded-md p-5 text-xl font-medium">
                            <div className="relative text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute top-0 left-0 w-6 h-6 dark:text-gray-300">
                                    <path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>
                                <p className="px-6 py-1 italic">These cupcakes are my guilty pleasure! Whenever I need a pick-me-up, I know where to turn. Simply divine! From the first bite to the last crumb, these cupcakes are perfection. Hands down the best cupcakes in town! </p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute bottom-0 right-0 w-6 h-6 dark:text-gray-300">
                                    <path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </div>
                            <span className="w-12 h-1 my-2 rounded-lg"></span>
                            <p>Jane Doe</p>
                        </div>

                </div>
            </section>
        </div>
    )
}

export default Testimonials