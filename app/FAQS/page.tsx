import FAQ from '@/components/FAQ'
import React from 'react'
import FAQS from '../../constants/FAQSConstants'
import BackToTop from '@/components/Shared/BackToTop'

function page() {
    return (
        <div>
            <BackToTop />
            <div className="py-24 max-w-screen-md mx-auto">
                <div className="text-center mb-16">
                    <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-[#3D0C11]">
                        Frequently Asked <span className="text-[#D14D72]">Questions</span>
                    </h3>
                </div>

                <div className="px-10 sm:px-16">
                    <FAQ />
                </div>

            </div>
        </div>
    )
}

export default page