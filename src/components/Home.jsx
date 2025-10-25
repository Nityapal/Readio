import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div className='flex min-h-screen'>
      <Navbar/>
      <div className='flex-1 ml-72 p-10 flex flex-col items-center justify-center bg-gray-900 text-amber-200'>
        {/* Central Card */}
            
        <h2 className="text-3xl font-bold text-amber-200 mb-4">Welcome to Readio</h2>
        <div className='bg-amber-100'>
            <p className="text-amber-800 text-md p-5">
                Discover, review, and share your favorite books, movies, podcasts, and more. Let’s make every experience memorable!
            </p>
        </div>

        {/* Optional subtle footer text */}
        <p className='text-shadow-amber-900 font-medium font-mono mt-10'>Made with ❤️ by Nitya</p>
      </div>
    </div>
  )
}

export default Home
