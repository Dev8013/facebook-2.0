import React from 'react'

const RightMenu = () => {
  return (
    <div className='flex flex-col  items-center gap-2'>
      {/* Groups */}
      <div>
          <span className='text-xl text-gray-600 font-semibold'>Group conversation</span>
      </div>
      
      <div className='flex items-center gap-4 p-2 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300'>
          <button className=' p-2 rounded-full'>+</button>
          <span>Create New Group</span>
      </div>

    </div>
  )
}

export default RightMenu
