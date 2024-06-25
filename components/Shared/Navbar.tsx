"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import ScrollProgress from './ScrollProgress'
import { usePathname } from 'next/navigation'

function Navbar() {
    const [menubtn, setMenuBtn] = useState(false)
    const pathname = usePathname()

    function handleClick() {
        setMenuBtn(!menubtn)
    }

    const getLinkClass = (path: string) => (
        pathname === path ? 'text-[#D14D72] scale-[1.1]' : 'text-[#3D0C11] hover:text-[#3D0C11] duration-500'
    )

    const getMobileLinkClass = (path: string) => (
        pathname === path ? 'text-pink-600' : 'hover:text-pink-600 duration-700'
    )

    return (
        <>
            <nav className='fixed top-0 left-0 right-0 bg-[#FAFAFA] z-50 md:px-10 px-2 py-3 h-fit flex justify-between items-center shadow-md'>
                <Link href='/' className='flex items-center gap-4 text-[#A87676]'>
                    <Image src='/assets/Logo.png' alt='Logo' width={80} height={80} />
                    <h1 className='font-bold text-[#3D0C11] text-4xl font-Satisfy'>Toronto Cupcake</h1>
                </Link>

                {/* Desktop menu */}
                <ul className='hidden lg:flex gap-5 font-averia'>
                    <li className={`text-2xl font-medium active:text-white ${getLinkClass('/')}`}>
                        <Link href="/">
                            <motion.div whileHover={{ scale: 1.07 }}>
                                Home
                            </motion.div>
                        </Link>
                    </li>
                    <li className={`text-2xl font-medium active:text-white ${getLinkClass('/Cupcakes')}`}>
                        <Link href="/Cupcakes">
                            <motion.div whileHover={{ scale: 1.07 }}>
                                Cupcakes
                            </motion.div>
                        </Link>
                    </li>
                    <li className={`text-2xl font-medium active:text-white ${getLinkClass('/Employment')}`}>
                        <Link href="/Employment">
                            <motion.div whileHover={{ scale: 1.07 }}>
                                Employment
                            </motion.div>
                        </Link>
                    </li>
                    <li className={`text-2xl font-medium active:text-white ${getLinkClass('/Occasions')}`}>
                        <Link href="/Occasions">
                            <motion.div whileHover={{ scale: 1.07 }}>
                                Occasions
                            </motion.div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Cart" className={`flex flex-col items-center active:text-white ${getLinkClass('/Cart')}`}>
                            <motion.div whileHover={{ scale: 1.07 }}>
                                <svg className='w-10 h-10 text-2xl font-medium' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                                </svg>
                            </motion.div>
                        </Link>
                    </li>
                </ul>

                {/* Hamburger menu button */}
                <div className={`lg:hidden z-20 fixed right-0 mr-6 ${menubtn ? 'fixed' : 'sticky'}`} onClick={handleClick}>
                    {menubtn ? (
                        <svg className="w-10 h-10 text-gray-800 hover:cursor-pointer hover:scale-75 hover:duration-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                        </svg>
                    ) : (
                        <svg className="w-10 h-10 text-gray-800 hover:cursor-pointer hover:scale-75 hover:duration-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
                        </svg>
                    )}
                </div>

                {/* Mobile menu */}
                <ul className={menubtn ? 'fixed font-averia top-0 left-0 z-10 w-screen duration-500 h-screen bg-[#c9c8aa] flex flex-col justify-center items-center' : 'hidden'}>
                    <Link href='/' className='flex items-center gap-4'>
                        <Image src='/assets/Logo.png' alt='Logo' width={80} height={80} />
                        <p className='font-bold text-4xl font-Satisfy'>Toronto Cupcake</p>
                    </Link>
                    <li className={`py-6 text-4xl active:text-white ${getMobileLinkClass('/')}`}>
                        <Link onClick={handleClick} href="/">
                            <motion.div whileHover={{ scale: 1.07 }}>
                                Home
                            </motion.div>
                        </Link>
                    </li>
                    <li className={`py-6 text-4xl active:text-white ${getMobileLinkClass('/Cupcakes')}`}>
                        <Link onClick={handleClick} href="/Cupcakes">
                            <motion.div whileHover={{ scale: 1.07 }}>
                                Cupcakes
                            </motion.div>
                        </Link>
                    </li>
                    <li className={`py-6 text-4xl active:text-white ${getMobileLinkClass('/Employment')}`}>
                        <Link onClick={handleClick} href="/Employment">
                            <motion.div whileHover={{ scale: 1.07 }}>
                                Employment
                            </motion.div>
                        </Link>
                    </li>
                    <li className={`py-6 text-4xl active:text-white ${getMobileLinkClass('/Occasions')}`}>
                        <Link onClick={handleClick} href="/Occasions">
                            <motion.div whileHover={{ scale: 1.07 }}>
                                Occasions
                            </motion.div>
                        </Link>
                    </li>
                    <li>
                        <motion.div whileHover={{ scale: 1.07 }}>
                            <Link href="/Cart" onClick={handleClick} className={`flex gap-2 items-center active:text-white ${getMobileLinkClass('/Cart')}`}>
                                <button className='py-6 text-2xl font-medium flex gap-3 justify-center items-center'>
                                    <svg className='w-10 h-10 text-2xl font-medium' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                                    </svg>
                                    View Cart
                                </button>
                            </Link>
                        </motion.div>
                    </li>
                </ul>
            </nav>
            <ScrollProgress />

        </>
    )
}

export default Navbar
