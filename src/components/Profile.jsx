import React from 'react'
import Navbar from './Navbar'

const Profile = () => {
  return (
    <div className='flex'>
        <Navbar/>
        <div className='flex-1 ml-72 h-screen overflow-y-auto p-10 text-amber-200 bg-gray-900' >
            <h1 className='flex flex-col items-center text-3xl font-extrabold'>Moiiii</h1>
        </div>
    </div>
  )
}

export default Profile
