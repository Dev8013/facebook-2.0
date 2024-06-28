import React from 'react'

const Stories = () => {
  return (
    <div className='bg-white shadow-md rounded-lg'>
      <div className='flex items-center hover:bg-gray-200 m-2 rounded-lg'>
            <div className='flex  m-2 p-4 rounded-full bg-blue-200 cursor-pointer'>
                <span className='text-blue-600 text-center text-2xl w-10 h-10 '>+</span>
            </div>
            <div className='flex flex-col '>
                <span className='text-xl'>Create Story</span>
                <span className='text-gray-500'>Share a photo or write something</span>
            </div>
      </div>
    </div>
  )
}

export default Stories
