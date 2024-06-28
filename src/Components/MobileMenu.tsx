"use client"
import Link from 'next/link';
import React, { useState } from 'react'

const MobileMenu = () => {
    const [isOpen,setIsOpen] = useState(false);
  return (
    <div className='md:hidden'>
        <div className='flex flex-col gap-1 cursor-pointer'
        onClick={()=>setIsOpen((prev)=>!prev)}
        >
            <div className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? "rotate-45" : ""} origin-left ease-in-out duration-500` }/>
            <div className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? "opacity-0" : ""}` }/>
            <div className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? "-rotate-45" : ""} origin-left ease-in-out duration-500` }/>
        </div>
        {isOpen && (
            <div className='absolute left-0 top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center gap-8 text-xl z-10 font-medium'>
               <button className='bg-blue-200 p-2 w-40 rounded-md hover:bg-blue-100 ring-1 ring-blue-500'><Link href='/'>Home</Link></button>
               <button className='bg-blue-200 p-2 w-40 rounded-md hover:bg-blue-100 ring-1 ring-blue-500'><Link href='/'>Friends</Link> </button>
               <button className='bg-blue-200 p-2 w-40 rounded-md hover:bg-blue-100 ring-1 ring-blue-500'><Link href='/'>Groups</Link></button>
                <button className='bg-blue-200 p-2 w-40 rounded-md hover:bg-blue-100 ring-1 ring-blue-500'><Link href='/'>Stories</Link> </button>
               <button className='bg-blue-200 p-2 w-40 rounded-md hover:bg-blue-100 ring-1 ring-blue-500'><Link href='/'>Settings</Link></button>
               <button className='bg-red-200 p-2 w-40 rounded-md hover:bg-red-100 ring-1 ring-red-500'><Link href='/'>Logout</Link></button>
                 
            </div>
        )}
      
    </div>
  )
}

export default MobileMenu
