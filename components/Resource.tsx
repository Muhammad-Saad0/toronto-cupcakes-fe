import React from 'react'
import resources from '../constants/ResourcesConstants'
import Image from 'next/image'
import Link from 'next/link'

function Resource() {
    return (
        <div>
            {resources.map(resource => {
                return (
                    <section key={resource.resourceName} className='border-l-4 border-r-4 border-[#3D0C11] rounded-xl p-5'>
                        <h2 className='text-[#D14D72] font-medium text-3xl md:text-4xl text-center mt-4 font-averia p-5'>{resource.resourceName}</h2>
                        <div className='flex flex-col md:flex-row gap-5 justify-center items-center p-4'>
                            <Image
                                src={resource.imgPath}
                                alt={resource.resourceName}
                                width={250}
                                height={100}
                                className="rounded-lg"
                                objectFit='cover'
                                objectPosition='center'
                            />

                            <div className='flex justify-center items-center'>
                                <p className='text-xl lg:text-2xl text-[#3D0C11] text-justify font-marcellus'><Link href={resource.url} className="underline text-[#BD4B4B] hover:text-[#3D0C11]">
                                    {resource.resourceName}
                                </Link>{resource.description}</p>
                            </div>
                        </div>

                    </section>
                )
            })}
        </div>
    )
}

export default Resource