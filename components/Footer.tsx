import React from 'react'

const Footer = () => {
  return (
    <footer className='text-white-800 flex-between body-text w-full
    gap-y-10 boarder-t boarder-black-400 bg-black-100
    px-20 py-1 max-md:flex-col'>
      <p>
        &copy; {new Date().getFullYear()} Find Doctors. All Rights Reserved.

      </p>
    </footer>
  )
}

export default Footer