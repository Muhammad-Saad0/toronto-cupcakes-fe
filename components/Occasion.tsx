import React from 'react'
import occasions from '@/constants/OccasionsConstants'
import Image from 'next/image'
import Link from 'next/link'

function Occasion() {
    return (
        <div>
            {occasions.map(occasion => {
                return (
                    <section key={occasion.description} className='p-5'>
                        <div className='flex flex-col md:flex-row gap-5 justify-center items-center p-4'>
                            <Image
                                src={occasion.imgPath}
                                alt={occasion.description}
                                width={250}
                                height={50}
                                className='rounded-br-3xl rounded-tl-3xl'
                            />

                            <div className='flex justify-center items-center'>
                                <p className='text-xl lg:text-2xl text-[#3D0C11] text-justify font-marcellus'>
                                    {occasion.description}
                                </p>
                            </div>
                        </div>
                    <hr className='border-b-2 border-[#D14D72] mt-10'></hr>
                    </section>
                )
            })}
        </div>
    )
}

export default Occasion