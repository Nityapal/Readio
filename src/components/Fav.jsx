import React from 'react'
import Navbar from './Navbar'

const Fav = () => {
  return (
    <div className='flex'>
        <Navbar/>
        <div className='flex-1 ml-72 h-screen overflow-y-auto p-10 text-amber-200 bg-gradient-to-br from-[#3b2f2f] via-[#5c3d2e] to-[#9d6b53] text-[#fbecf5]'>
            <h1 className='font-bold text-center text-3xl mt-3 mb-5 text-amber-200'>My favvv</h1>
        </div>
    </div>
  )
}

export default Fav
