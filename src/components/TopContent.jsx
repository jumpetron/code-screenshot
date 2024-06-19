import Image from 'next/image'
import React from 'react'
import Logo from './../../public/logo.png'
import Link from 'next/link'

const TopContent = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center'>
      <div className='w-[268px] h-[65px]'>
        <Link href={'/'}>
          <Image
            width={'100'}
            height={'100'}
            src='https://snapcode.optimarko.com/logo.png'
            alt='logo'
            className='w-full object-cover'
          />
        </Link>
      </div>
      <h1 className='xl:text-xl lg:text-lg text-base  mt-5 md:w-[70%] sm:w-[70%] w-full'>
        Easily turn your source code into visually appealing images. Just enter
        your code or upload a file to get started with Snapcode.
      </h1>
    </div>
  )
}

export default TopContent
