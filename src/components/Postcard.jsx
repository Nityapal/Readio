import React,{useState} from 'react'

const Postcard = ({type, title, oneLiner, rating, fullContent, image, tags,color, onDelete, onUpdate }) => {

    const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all" style={{backgroundColor: color}}>

        <div className="flex justify-end gap-2">
            <button onClick={onUpdate} className="text-blue-600 hover:underline">✏️</button>
            <button onClick={onDelete} className="text-red-600 hover:underline">❌</button>
        </div>

      <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide">
        {type || "Untitled"}
      </p>
      <p className="text-md text-blue-500 font-semibold uppercase tracking-wide">
        {title || "Untitled"}
      </p>
      <p className="text-lg font-medium text-gray-900 mt-1">
        {oneLiner || "No description provided"}
      </p>
      <p className="text-yellow-600 font-bold mt-2">⭐ {rating || 0}/5</p>

        {/* collapsed read more button */}

      {!expanded && (
        <div>
        <div className="mt-3 flex">
          {image && (
            <img
              src={image}
              alt={title}
              className="w-20 h-20 object-cover rounded-lg shadow-sm float-right"
            />
          )}
          </div>
          <button
            onClick={() => setExpanded(true)}
            className="text-blue-900 font-semibold hover:underline font-mono mt-1"
          >
            Read More →
          </button>
        </div>
        
        )}

        {/* expanded show less button */}

        {expanded && (
            <div className="mt-4 flex flex-col items-center">
                    {/* Optional image */}
                    {image && <img src={image} alt={title} className="w-40 rounded-lg mb-3" />}

                    {/* Full content */}
                    <p className="text-gray-800">{fullContent}</p>

                    {/* Tags/Genres */}
                    <div className="flex flex-wrap gap-2 mt-3">
                        {tags?.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 rounded-full bg-purple-200 text-purple-800 text-sm">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <button
                        onClick={() => setExpanded(false)}
                        className="text-red-900 hover:underline mt-3 font-mono">
                        Show Less
                    </button>
                </div>

        // <div>
        //     <p>Full content will appear here...</p>
        //     <button onClick={() => setExpanded(false)}>Show Less</button>
        // </div>
        )}
    </div>
  )
}

export default Postcard
