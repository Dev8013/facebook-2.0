import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Posts = () => {
    return (
        <div className='bg-white shadow-md rounded-lg flex flex-col gap-4'>
            {/* Top */}
            <div className='p-4 flex justify-between'>

                <div className='flex gap-2'>
                    <Image src='https://images.pexels.com/photos/15301144/pexels-photo-15301144/free-photo-of-foamy-waves-on-the-shore-and-skyscrapers-of-a-coastal-city-in-distance.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' width={40} height={40} className='w-10 h-10 rounded-full ring-2 ring-blue-500 cursor-pointer' />

                    <div className='flex flex-col'>
                        <span className='text-sm font-bold'>Dev Bhardwaj <span className='text-blue-600 cursor-pointer'>.Follow</span></span>
                        <span className='text-sm text-gray-500'>25 June at 9:30 am</span>
                    </div>


                </div>

                <div className='flex gap-4'>
                    <Link href='' className='hover:bg-gray-200 p-2 rounded-full'>
                        <Image src='/more.png' alt='' width={20} height={20} />
                    </Link>
                    <Link href='' className='hover:bg-gray-200 p-2 rounded-full'>
                        <Image src='/reject.png' alt='' width={20} height={20} />
                    </Link>

                </div>


            </div>

            {/* Center */}
            <div className='flex flex-col gap-2'>

                <div className='max-h-[400px] w-[100%] relative'>

                    <img src='https://images.pexels.com/photos/19977228/pexels-photo-19977228/free-photo-of-view-of-waves-on-a-sea-from-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' className='object-cover w-[100%] max-h-[400px]'/>

                </div>

            </div>

            {/* Bottom */}
            <div className='p-4'>

                <div className='flex items-center justify-between pl-4 pr-4'>
                    <div className='flex items-center gap-6'>
                       <Image src='/emoji.png' alt='' height={20} width={20} className='cursor-pointer' /> 
                       <Image src='/like.png' alt='' height={20} width={20} className='cursor-pointer'/>
                       <span className='text-sm text-gray-500'>2.7K</span> 
                    </div>

                    <div className='flex items-center gap-6'>
                       <Image src='/comment.png' alt='' height={20} width={20} className='cursor-pointer' /> 
                       <Image src='/share.png' alt='' height={20} width={20} className='cursor-pointer'/> 
                    </div>

                </div>

                <hr className='bg-gray-700 w-full mt-4' />

                <div className='mt-4 pl-4 pr-4 flex items-center gap-8 justify-center'>
                
                    <div className='flex items-center gap-2'>

                        <Image src='/like.png' alt='' height={20} width={20} className='cursor-pointer'/>
                        <span>Likes</span>

                    </div>

                    <div className='flex items-center gap-2'>

                        <Image src='/comment.png' alt='' height={20} width={20} className='cursor-pointer'/>
                        <span>Comments</span>

                    </div>

                    <div className='flex items-center gap-2'>

                        <Image src='/messages.png' alt='' height={20} width={20} className='cursor-pointer'/>
                        <span>Messages</span>

                    </div>

                    <div className='flex items-center gap-2'>

                        <Image src='/map.png' alt='' height={20} width={20} className='cursor-pointer'/>
                        <span>Map</span>

                    </div>

                    <div className='flex items-center gap-2'>

                        <Image src='/share.png' alt='' height={20} width={20} className='cursor-pointer'/>
                        <span>Share</span>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Posts
