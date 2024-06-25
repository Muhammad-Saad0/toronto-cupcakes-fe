"use client"
import React, { useEffect, useState } from 'react'

function BackToTop() {

    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) { // Adjust the scroll position as needed
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    return (
        <div>
            <button
                className={`!fixed ${isVisible ? 'block' : 'hidden'} bottom-5 end-5 rounded-full bg-[#D14D72] hover:-translate-y-2 hover:bg-[#3D0C11] duration-200 p-5 text-lg font-medium uppercase leading-tight text-white active:bg-white active:text-{#3D0C11}`}
                id="btn-back-to-top"
                onClick={scrollToTop}>
                <span className="[&>svg]:w-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="3"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                    </svg>
                </span>
            </button>
        </div>
    )
}

export default BackToTop