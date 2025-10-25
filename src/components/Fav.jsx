import React from 'react'
import Navbar from './Navbar'

const Fav = () => {
  return (
    <div className='flex'>
        <Navbar/>
        <div className='flex-1 ml-72 h-screen overflow-y-auto p-10 text-amber-200 bg-gray-900'>
            <h1 className='font-bold text-center text-3xl mt-3 mb-5 text-amber-200'>My favvv</h1>
        </div>
    </div>
  )
}

export default Fav
