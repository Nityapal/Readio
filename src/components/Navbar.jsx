import React from 'react'
import {FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='flex flex-col justify-between h-screen w-72 bg-fuchsia-200' style={{background: 'linear-gradient(to top, #BABDE2, #BABDE2)',}}>
      <div className='flex flex-col h-3/4'>
        <h2 className='p-10 m-10 text-center text-4xl text-gray-900 font-bold'>Readio</h2>
        <ul className='text-xl flex flex-col items-center text-gray-900'>
            <li className='items-center font-bold font-mono'>
                <img className='w-20 h-20 rounded-full ' src="https://i.pinimg.com/1200x/17/04/53/170453c5eb46d7e376807032b550a65b.jpg" alt="" />
                <p className='pl-3 mb-5'>nitya </p>
            </li>
            <li className='m-1 p-1'>Account</li>
            <li className='m-1 p-1'>Notifications</li>
            <li className='m-1 p-1'>Reviews</li>
            <li className='m-1 p-1'>Favourites</li>
            <li className='m-1 p-1'>Settings</li>
        </ul>
      </div>
      <div className='flex justify-center gap-4 p-5 text-xl'>
        <FaInstagram className='w-9 h-9 text-pink-600 hover:text-pink-400 cursor-pointer'/>
        <FaTwitter className='w-9 h-9 text-sky-600 hover:text-sky-400 cursor-pointer'/>
        <FaYoutube className='w-9 h-9 text-red-600 hover:text-red-400 cursor-pointer' />
      </div>
    </div>
  )
}

export default Navbar
