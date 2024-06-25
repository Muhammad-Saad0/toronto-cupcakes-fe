import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <div>
      <footer className="bg-[#FAFAFA] min-h-36">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-xl text-[#3D0C11] sm:text-center">© 2024 <p className="hover:underline">FSSM™</p>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-lg font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <Link href="/FAQS" className="hover:underline me-4 md:me-6 text-[#3D0C11]">FAQs</Link>
            <Link href="/PrivacyPolicy" className="hover:underline me-4 md:me-6 text-[#3D0C11]">Privacy Policy</Link>
            <Link href="/Resources" className="hover:underline me-4 md:me-6 text-[#3D0C11]">Resources</Link>
            <Link href="/Corporate" className="hover:underline text-[#3D0C11]" >Corporate logo cupcakes</Link>
          </ul>
        </div>
        <svg viewBox="0 -20 700 110" width="100%" height="110" preserveAspectRatio="none">
          <path transform="translate(0, -20)" d="M0,10 c80,-22 240,0 350,18 c90,17 260,7.5 350,-20 v50 h-700" fill="#3D0C11" />
          <path d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z" fill="#E6E7E9" />
        </svg>
      </footer>

    </div>
  )
}

export default Footer