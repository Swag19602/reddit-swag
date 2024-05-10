import React from 'react'
import Image from 'next/image'
import { BeakerIcon, ChevronDownIcon, HomeIcon } from "@heroicons/react/16/solid";
import { StarIcon } from "@heroicons/react/16/solid";
function Header() {
  return (
    <div className='flex'>
    <div className='relative h-10 w-20 flex-shrink-0 cursor-pointer'>
      <Image
        src="/reddit.jpg" 
        alt="hello" 
        objectFit='contain'
        layout='fill'
      />
    </div>
      <div className='flex items-center mx- 7'>
      <HomeIcon className='h-5 w-5'/>
      <p>Home</p>
      <ChevronDownIcon/>
      </div>
    </div>
  )
}

export default Header
