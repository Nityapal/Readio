import React,{useState} from 'react'
import Postcard from './Postcard'
import Navbar from './Navbar'

const Post = () => {

    const [popup, setPopup] = useState(false)
    const [posts, setPosts] = useState([])

    const [form, setForm] = useState({
        type: "",
        title: "",
        oneLiner: "",
        rating: 0,
    })

    const handleChange= (e)=>{
        const {name,value}= e.target
        setForm({...form,[name]:value})
    }

    const handleSubmit= (e)=>{
        e.preventDefault()
        setPosts([...posts,form])
        setForm({type:"",title:"",oneLiner:"",rating:0})
        setPopup(false)

    }

  return (
    <div className='flex'>
        <Navbar/>
        <div className='flex-1  min-h-screen p-10 text-black' style={{background: 'linear-gradient(to top, #FFFCF5, #FFFCF5)'}}>
            {/* add button */}
            <button onClick={()=> setPopup(true)} className='fixed bottom-10 right-10 bg-amber-200 text-gray-950 text-3xl rounded-full w-14 h-14 shadow-lg hover:bg-amber-600 transition-all'>+</button>

            {/* posts grid */}
            <div className='grid grid-cols-1 gap-6'>
                {posts.map((post,index)=>(<Postcard key={index}{...post} />))}
            </div>

            {/* popup modal */}
            {popup && (
                <div className='fixed inset-0 bg-pink-200 ml-72 bg-opacity-40 flex items-center justify-center'>
                    <div className="bg-fuchsia-200 p-6 rounded-xl shadow-lg w-80">
                        <h2 className="text-lg font-bold mb-3 text-center font-mono">Add Review</h2>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                            <input
                            name="type"
                            placeholder="Category (Book/Movie/Podcast)"
                            value={form.type}
                            onChange={handleChange}
                            className="border p-2 rounded"
                            />
                            <input
                            name="title"
                            placeholder="Title"
                            value={form.title}
                            onChange={handleChange}
                            className="border p-2 rounded"
                            />
                            <input
                            name="oneLiner"
                            placeholder="One-liner"
                            value={form.oneLiner}
                            onChange={handleChange}
                            className="border p-2 rounded"
                            />
                            <input
                            name="rating"
                            type="number"
                            placeholder="Rating (1–5)"
                            value={form.rating}
                            onChange={handleChange}
                            className="border p-2 rounded"
                            />
                            <div className="flex justify-end gap-2">
                            <button
                                type="button"
                                onClick={() => setPopup(false)}
                                className="px-3 py-1 bg-blue-300 font-mono rounded">
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-3 py-1 bg-amber-300 font-mono rounded">
                                Add
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Post
