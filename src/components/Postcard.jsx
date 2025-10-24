import React,{useState} from 'react'

const Postcard = ({type, title, oneLiner, rating}) => {

    const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all">
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

        {/* read more button */}

      {!expanded && (
        <button onClick={() => setExpanded(true)}>Read More</button>
        )}

        {/* expanded show less button */}

        {expanded && (
        <div>
            <p>Full content will appear here...</p>
            <button onClick={() => setExpanded(false)}>Show Less</button>
        </div>
        )}
    </div>
  )
}

export default Postcard
