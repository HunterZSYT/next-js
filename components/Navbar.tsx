import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='flex-center fixed top-0 z-50
    w-full boarder-b-2 boarder-black-200 py-7 text-white'>
        <div className="flex-between mx-auto w-full max-w-screen-2xl
        px-6 xs:px-8 sm:px-16">
            
            <Link href="/">
                <Image 
                src="/jsm-logo.svg" 
                alt="logo" 
                width={55} 
                height={40} />
            </Link>
            
            <Image
                src="/hamburger-menu.svg" 
                width={30}
                height={30}
                alt='menu'
                className='block md:hidden'
                />
            
            <ul className='flex-center 
            gap-x-3 max-md:hidden md:gap-x-10'>
              
              <li className='body-text text-gradient_blue-purple !font-normal'>
                <Link href="https://www.jsmastery.pro/next13"
                target='_blank'>
                  Next.js 13.4 Course
                </Link>
              </li>

              <li className='body-text !font-normal'>
                <Link href="https://www.jsmastery.pro/masterclass"
                target='_blank'>
                  Master Class
                </Link>
              </li>
              
            </ul>
        </div>

    </nav>
  )
}

export default Navbar