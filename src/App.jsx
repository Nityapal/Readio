import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Post from './components/Post'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Postcard from './components/Postcard'
import Trip from './components/Trip'
import Fav from './components/Fav'
import Profile from './components/Profile'

const router= createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/reviews", element: <Post /> },
  { path: "/trip", element: <Trip/> },
  { path: "/favourites", element: <Fav/> },
  { path: "/profile", element: <Profile/>}
])

function App() {
  
  return (
     <RouterProvider router={router}>
      <div className="flex">
        <Navbar />
        <div className="flex-1 ml-72">
          {/* router content automatically rendered by RouterProvider */}
        </div>
      </div>
    </RouterProvider>
  )
}

export default App
