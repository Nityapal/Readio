import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate= useNavigate();
    function handleClick1(){
        navigate('/favourites')
    }
    function handleClick2(){
        navigate('/reviews')
    }

  return (
    <div className='flex min-h-screen'>
      <Navbar/>
      <div className='flex-1 ml-72 p-10 flex flex-col items-center justify-center bg-gray-900 text-amber-200'>
        {/* Central Card */}
            
        <h2 className=" text-3xl font-bold text-amber-200 mb-4">Welcome to Readio</h2>
        <div className='bg-amber-100 rounded-3xl'>
            <p className="text-amber-800 text-md p-5">
                Discover, review, and share your favorite books, movies, podcasts, and more. Let’s make every experience memorable!
            </p>
            <div className='flex justify-center m-3'>
                <button onClick={handleClick1} className='p-2 m-1 bg-amber-800'>Explore Favourites</button>
                <button onClick={handleClick2} className='p-2 m-1 bg-amber-800'>Post Reviews</button>
            </div>
        </div>

        {/* Optional subtle footer text */}
        <p className='text-shadow-amber-900 font-medium font-mono mt-10'>Made with ❤️ by Nitya</p>
      </div>
    </div>
  )
}

export default Home
