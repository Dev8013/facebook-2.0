import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LeftMenu = () => {
  return (
    <div>
        <div className='flex flex-col gap-4 overflow-y-auto'>
          <div className='flex items-center gap-4 bg-gray-200 p-4 rounded-lg'>
              <Link href='/'>
                    <Image src='https://images.pexels.com/photos/19481490/pexels-photo-19481490/free-photo-of-view-of-a-shipwreck-and-waves-on-the-sea.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load' alt='' width={40} height={40} className='rounded-full w-10 h-10'/>
              </Link>
              <span className='text-lg'>Dev Bhardwaj</span>
          </div>

          <div className='flex items-center gap-4 bg-gray-200 p-4 rounded-lg'>
              <Link href='/'>
                    <Image src='/friends.png' alt='' width={40} height={40} className='rounded-full w-10 h-10'/>
              </Link>
              <span className='text-lg'>Friends</span>
          </div>

          <div className='flex items-center gap-4 bg-gray-200 p-4 rounded-lg'>
              <Link href='/'>
                    <Image src='/market.png' alt='' width={40} height={40} className='rounded-full w-10 h-10'/>
              </Link>
              <span className='text-lg'>Marketplace</span>
          </div>

          <div className='flex items-center gap-4 bg-gray-200 p-4 rounded-lg'>
              <Link href='/'>
                    <Image src='/videos.png' alt='' width={40} height={40} className='rounded-full w-10 h-10'/>
              </Link>
              <span className='text-lg'>Videos</span>
          </div>

          <div className='flex items-center gap-4 bg-gray-200 p-4 rounded-lg'>
              <Link href='/'>
                    <Image src='/news.png' alt='' width={40} height={40} className='rounded-full w-10 h-10'/>
              </Link>
              <span className='text-lg'>News</span>
          </div>

          <div className='flex items-center gap-4 bg-gray-200 p-4 rounded-lg'>
              <Link href='/'>
                    <Image src='/gift.png' alt='' width={40} height={40} className='rounded-full w-10 h-10'/>
              </Link>
              <span className='text-lg'>Gifts</span>
          </div>

          <div className='flex items-center gap-4 bg-gray-200 p-4 rounded-lg'>
              <Link href='/'>
                    <Image src='/events.png' alt='' width={40} height={40} className='rounded-full w-10 h-10'/>
              </Link>
              <span className='text-lg'>Events</span>
          </div>

          <div className='flex items-center gap-4 bg-gray-200 p-4 rounded-lg'>
              <Link href='/'>
                    <Image src='/poll.png' alt='' width={40} height={40} className='rounded-full w-10 h-10'/>
              </Link>
              <span className='text-lg'>Polls</span>
          </div>

          <div className='flex items-center gap-4 bg-gray-200 p-4 rounded-lg'>
              <Link href='/'>
                    <Image src='/groups.png' alt='' width={40} height={40} className='rounded-full w-10 h-10'/>
              </Link>
              <span className='text-lg'>Groups</span>
          </div>

          <div className='flex items-center gap-4 bg-gray-200 p-4 rounded-lg'>
              <Link href='/'>
                    <Image src='/activity.png' alt='' width={40} height={40} className='rounded-full w-10 h-10'/>
              </Link>
              <span className='text-lg'>Activities</span>
          </div>

          <div className='flex items-center gap-4 bg-gray-200 p-4 rounded-lg'>
              <Link href='/'>
                    <Image src='/settings.png' alt='' width={40} height={40} className='rounded-full w-10 h-10'/>
              </Link>
              <span className='text-lg'>Settings</span>
          </div>
            
        </div>
    </div>
  )
}

export default LeftMenu
