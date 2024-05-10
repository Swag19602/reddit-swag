import React from 'react'
import Image from 'next/image'
import { Bars2Icon, Bars3Icon, BeakerIcon, BellIcon, ChatBubbleLeftIcon, ChevronDownIcon, GlobeAltIcon, HomeIcon, MagnifyingGlassCircleIcon, PlusIcon, SparklesIcon, UserCircleIcon, VideoCameraIcon } from "@heroicons/react/16/solid";
import { StarIcon } from "@heroicons/react/16/solid";
import { SpeakerWaveIcon } from '@heroicons/react/20/solid';
function Header() {
  return (
    <div className='sticky top-0 z-50 flex bg-white px=4 py-2 shadow-sm'>
    <div className='relative h-10 w-20 flex-shrink-0 cursor-pointer'>
      <Image
        src="/reddit.jpg" 
        alt="hello" 
        objectFit='contain'
        layout='fill'
      />
    </div>
      <div className='mx-7 flex items-center xl:min-w-[300px]'>
      <HomeIcon className='h-5 w-5'/>
      <p className='ml-2 flex-1 hidden lg:inline'>Home</p>
      <ChevronDownIcon className='h-5 w-5'/>
      </div>
      {/* Search box */}
      <form className='flex flex-1 items-center space-x-2 rounded-sm border border-gray-200 bg-gray-100 px-3 py-1'>
        <MagnifyingGlassCircleIcon className='h-6 w-6 text-gray-400'/>
        <input className='flex-1 bg-transparent outline-none' type="text" placeholder='Search Reddit'/>
        <button hidden type='submit'></button>
      </form>
      <div className='mx-5 hidden items-center space-x-2 text-gray-500 lg:inline-flex'>
        <SparklesIcon className='icon'/>
        <GlobeAltIcon className='icon'/>
        <VideoCameraIcon className='icon'/>
        <hr className='h-10 border border-gray-100'/>
        <ChatBubbleLeftIcon className='icon'/>
        <BellIcon className='icon'/>
        <PlusIcon className='icon'/>
        <SpeakerWaveIcon className='icon'/>
      </div>
      <div className='ml-5 flex items-center lg:hidden'>
        <Bars3Icon className='icon'/>
      </div>
      {/* SignIn */}
      <div className='hidden cursor-pointer lg:flex items-center space-x-2 border-gray-200 p-2'>
        <UserCircleIcon className='icon relative flex-shrink-0'/>
        <p className='text-gray-400'>Sign In</p>
      </div>

    </div>
  )
}

export default Header
