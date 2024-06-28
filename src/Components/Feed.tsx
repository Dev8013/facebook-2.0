import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Posts from './Posts'

const Feed = () => {
  return (
   <div className='flex flex-col shadow-md bg-white rounded-lg gap-4'>
      <div className='' >
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        
      </div>
   </div>
  )
}

export default Feed
