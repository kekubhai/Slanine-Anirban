import { Search } from 'lucide-react'
import React from 'react'
import { UserButton } from '@clerk/nextjs'

const Header = () => {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-center m-auto items-center'>
        
    <div className='flex gap-4'>
    <UserButton />
        <h2 className='mt-0.5 bg-blue-400 p-1 rounded text-xs text-white px-2 hidden md:block lg:block w-fit h-fit'>Join Membership for just $7.99/month
          🔥🔥
        </h2>
    </div>
    
    </div>
  )
}

export default Header