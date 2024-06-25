import React from 'react'
import FAQS from '@/constants/FAQSConstants'

function FAQ() {
    return (
        <div>
            {FAQS.map(category => (
                <section key={category.faqName}>
                     <div className="py-3 my-5 text-2xl text-gray-500 font-medium font-averia">
                     {category.faqName}                        
                    </div>
                    {category.faqs.map(faq => (
                        <button key={faq.question} className="w-full border-b-2 border-gray-300 pb-6 text-left group font-marcellus focus:outline-none">
                            <div className="text-xl md:text-2xl font-semibold text-[#3D0C11] hover:scale-[1.08] hover:duration-200">Q. {faq.question}</div>
                            <div className="mt-3 hidden text-lg md:text-xl text-[#3D0C11] font-medium group-focus:flex">
                                <p>{faq.answer}</p>
                            </div>
                        </button>
                    ))}
                </section>
            ))}
        </div>
    )
}

export default FAQ
