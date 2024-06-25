"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { motion, useScroll } from "framer-motion"

const Breadcrumbs: React.FC = () => {
    const pathname = usePathname();

    const paths = pathname.split('/').filter(path => path);

    return (
        <nav className="flex px-5 py-8 bg-[#FFD0D0] font-averia text-xl" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                <motion.div whileHover={{ scale: 1.1 }}>
                    <Link href="/" className="inline-flex items-center font-medium text-[#A87676] underline hover:text-[#3D0C11] duration-500">
                        <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                        </svg>
                        Home
                    </Link>
                    </motion.div>
                </li>

                {paths.map((path, index) => {
                    const href = `/${paths.slice(0, index + 1).join('/')}`;
                    const isLast = index === paths.length - 1;

                    return (
                        <li key={index} className="inline-flex items-center">
                            <svg className="rtl:rotate-180 block w-3 h-3 mx-1 text-[#3D0C11] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            {!isLast ? (
                                <motion.div whileHover={{ scale: 1.1 }}>
                                <Link href={href} className="ms-1 font-medium text-[#A87676] underline md:ms-2 capitalize hover:text-[#3D0C11] duration-500">
                                    {path.replace(/-/g, ' ')}
                                </Link>
                                </motion.div>
                            ) : (
                                <span className="ms-1 font-medium text-[#3D0C11] cursor-default md:ms-2 capitalize">{path.replace(/-/g, ' ')}</span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
