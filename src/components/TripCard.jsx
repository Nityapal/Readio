import React, { useState } from 'react';

const TripCard = ({ destination, location, shortDesc, rating, experience, image, season, color, onDelete, onUpdate }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="rounded-xl p-5 shadow-md hover:shadow-xl transition-all"
      style={{ backgroundColor: color }}
    >
      <div className="flex justify-end gap-2 text-lg">
        <button onClick={onUpdate} className="hover:scale-110 transition">✏️</button>
        <button onClick={onDelete} className="hover:scale-110 transition">❌</button>
      </div>

      <p className="text-sm uppercase font-semibold text-[#6b4226]">{location}</p>
      <h3 className="text-2xl font-bold text-[#5a3e36] mt-1">{destination}</h3>
      <p className="text-md text-[#4a3c32] mt-1 italic">“{shortDesc}”</p>
      <p className="text-yellow-700 font-bold mt-2">⭐ {rating || 0}/5</p>

      {!expanded ? (
        <div>
          {image && <img src={image} alt={destination} className="w-24 h-24 object-cover rounded-lg mt-3" />}
          <button
            onClick={() => setExpanded(true)}
            className="text-[#3a3a3a] font-semibold hover:underline mt-3 block"
          >
            Read More →
          </button>
        </div>
      ) : (
        <div className="mt-4">
          {image && <img src={image} alt={destination} className="w-40 rounded-lg mb-3" />}
          <p className="text-[#3a2f28]">{experience}</p>
          <p className="text-sm text-[#6b4226] mt-2">🌤️ Best Season: {season || 'N/A'}</p>
          <button
            onClick={() => setExpanded(false)}
            className="text-red-900 hover:underline mt-3 font-mono"
          >
            Show Less
          </button>
        </div>
      )}
    </div>
  );
};

export default TripCard;
