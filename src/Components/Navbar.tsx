import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <div className='w-full bg-white p-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
      <div className='h-24 flex items-center justify-between'>
        {/* left */}
        <div className='flex items-center gap-4'>
                <Link href='/' className='text-blue-600 text-2xl font-bold hover:'>facebook 2.0</Link>
                <input placeholder='Search facebook' className='hidden md:block outline-none p-4 rounded-full bg-gray-200' />
        </div>
        {/* center */}
        <div className='hidden md:flex'>
            <div className='flex items-center gap-8 justify-center self-center'>
                <div className='flex items-center gap-2 p-2 rounded-full hover:bg-gray-300'>
                <Link href='/'>
                    <Image src='/home.png' alt='' width={20} height={20} className='w-5 h-5'/>
                </Link>
                <span>Home</span>
                </div>
                <div className='flex items-center gap-2 p-2 rounded-full hover:bg-gray-300'>
                <Link href='/'>
                    <Image src='/friends.png' alt='' width={20} height={20} className='w-5 h-5'/>
                    
                </Link>
                <span>Friends</span>
                </div>
               <div className='flex items-center gap-2 p-2 rounded-full hover:bg-gray-300'>
               <Link href='/'>
                    <Image src='/videos.png' alt='' width={20} height={20} className='w-5 h-5'/>
                    
                </Link>
                <span>Videos</span>
               </div>
               <div className='flex items-center gap-2 p-2 rounded-full hover:bg-gray-300'>
               <Link href='/'>
                    <Image src='/market.png' alt='' width={20} height={20} className='w-5 h-5'/>
                    
                </Link>
                <span>Marketplace</span>
                </div>
                <div className='flex items-center gap-2 p-2 rounded-full hover:bg-gray-300'>
                <Link href='/'>
                    <Image src='/groups.png' alt='' width={20} height={20} className='w-5 h-5'/>
                    
                </Link>
                <span>Groups</span>
                </div>
                
                <div>
                    </div>             
                
                
               
            </div>
        </div>
        {/* Right */}
        <div className='flex items-center gap-4 xl:gap-8 justify-end'>
                <MobileMenu />
                <div className='lg:flex items-center gap-8 justify-end hidden'>
                    <Link href='/' className='p-4 hover:bg-gray-300 rounded-full' >
                        <Image src='/messages.png' alt='' width={20} height={20}/>
                    </Link>
                    <Link href='/' className='p-4 hover:bg-gray-300 rounded-full'>
                        <Image src='/notifications.png' alt='' width={20} height={20}/>
                    </Link>
                    <div className=''>
                        <UserButton/>
                    </div>
                    
                </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
