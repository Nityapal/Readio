import React,{useState} from 'react'
import Postcard from './Postcard'
import Navbar from './Navbar'

const Post = () => {

    const [popup, setPopup] = useState(false)
    const [posts, setPosts] = useState([])
    const [editingIndex, setEditingIndex] = useState(null);

    const [form, setForm] = useState({
        type: "",
        title: "",
        oneLiner: "",
        rating: 0,
        fullContent:"",
        image: "",
        tags: [],
        color: "#ffffff",
    })

    const handleDelete = (index) => {
    const newPosts = posts.filter((_, i) => i !== index);
    setPosts(newPosts);
    };

    // Update a post
    const handleUpdate = (index) => {
    // Prefill the form with selected post data and open popup
    setForm(posts[index]);
    setEditingIndex(index);
    setPopup(true);
    };

    const handleChange= (e)=>{
        const {name,value}= e.target
        setForm({...form,[name]:value})
    }

    const handleSubmit= (e)=>{
        e.preventDefault()
        if(editingIndex!==null){
            const updatedPosts = [...posts];
            updatedPosts[editingIndex] = form;
            setPosts(updatedPosts);
            setEditingIndex(null);
        }
        else{
            setPosts([...posts,form])
        }
        setForm({type:"",title:"",oneLiner:"",rating:0, fullContent: "", image:"", tags:[], color: "#ffffff"})
        setPopup(false)
    }

  return (
    <div className='flex'>
        <Navbar/>
        <div className='flex-1 ml-72 h-screen overflow-y-auto p-10 text-amber-800 bg-gray-900'>
            {/* add button */}
            <h1 className='font-bold text-center text-3xl mt-3 mb-5 text-amber-200'>Movie/Book/Podcast Reviews</h1>
            <button onClick={()=> setPopup(true)} className='fixed bottom-10 right-10  text-3xl rounded-full w-14 h-14 shadow-lg hover:bg-amber-600 bg-amber-200 text-gray-900 transition-all'>+</button>
            {/* posts grid */}
            <div className='grid grid-cols-1 gap-6'>
                {posts.map((post,index)=>(<Postcard key={index}{...post} onDelete={()=> handleDelete(index)} onUpdate={()=> handleUpdate(index)} />))}
            </div>

            {/* popup modal */}
            {popup && (
                <div className='fixed inset-0 bg-blue-200 ml-72 bg-opacity-40 flex items-center justify-center'>
                    <div className="bg-fuchsia-100 p-6 rounded-xl shadow-lg w-80">
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
                            <input
                                name="fullContent"
                                placeholder="Full content / description"
                                value={form.fullContent}
                                onChange={handleChange}
                                className="border p-2 rounded"
                            />

                            <input
                                name="image"
                                placeholder="Image URL"
                                value={form.image}
                                onChange={handleChange}
                                className="border p-2 rounded"
                            />

                            <input
                                name="tags"
                                placeholder="Tags (comma separated)"
                                value={form.tags.join(',')}
                                onChange={(e) => setForm({ ...form, tags: e.target.value.split(',') })}
                                className="border p-2 rounded"
                            />
                            <div className="flex items-center gap-3">
                                <label className="text-sm font-mono">Card Color:</label>
                                <input
                                    type="color"
                                    name="color"
                                    value={form.color}
                                    onChange={handleChange}
                                    className="w-10 h-10 border-3 border-gray-600 rounded cursor-pointer"
                                />
                            </div>
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
                                {editingIndex!==null? 'Save' : 'Add'}
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
