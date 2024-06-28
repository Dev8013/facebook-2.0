import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AddPosts = () => {
  return (
    <div className='bg-white shadow-md rounded-lg'>
      <div className='flex flex-col'>
        <div className='flex items-center gap-4 p-4'>
            <div className='p-2'>
              <UserButton />
            </div>
            <input placeholder="What's on your mind ? " className='outline-none bg-slate-100 hover:bg-gray-200 p-4 rounded-full w-full'/>
        </div>
        <div className='h-0.5 w-full bg-gray-300 justify-center flex items-center self-center'></div>
        <div className='flex items-center justify-center p-4 gap-8 text-gray-500'>
            <div className='flex items-center gap-4 hover:bg-gray-300 cursor-pointer p-2 rounded-full'>
                <Link href='/'>
                  <Image src='/videos.png' alt='' width={20} height={20} />
                </Link>
                <span>Live Video</span>
            </div>
            <div className='flex items-center gap-4 hover:bg-gray-300 cursor-pointer p-2 rounded-full'>
                <Link href='/'>
                  <Image src='/albums.png' alt='' width={20} height={20} />
                </Link>
                <span>Photos</span>
            </div>
            <div className='flex items-center gap-4 hover:bg-gray-300 cursor-pointer p-2 rounded-full'>
                <Link href='/'>
                  <Image src='/activity.png' alt='' width={20} height={20} />
                </Link>
                <span>Activity</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddPosts
