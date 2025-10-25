import React, { useState } from 'react';
import Navbar from './Navbar';
import TripCard from './TripCard';

const Trip = () => {
  const [popup, setPopup] = useState(false);
  //const [trips, setTrips] = useState([]);
  const [trips, setTrips] = useState([
    {
        destination: "Paris",
        location: "France",
        shortDesc: "City of lights and croissants 🥐✨",
        rating: 5,
        experience:
        "Strolling by the Seine, watching the Eiffel Tower sparkle, and sipping coffee at a cozy corner café — every moment felt cinematic.",
        image: "data:image/jpeg;base64,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",
        season: "Spring",
        color: "#fde2e4",
    },
    {
        destination: "Manali",
        location: "India",
        shortDesc: "Snow, serenity, and steaming maggi in the hills 🌨️🍜",
        rating: 4,
        experience:
        "Manali felt like another world — surrounded by white peaks and pine-scented air. The sound of Beas river, endless chai, and slow mornings were pure peace.",
        image: "data:image/jpeg;base64,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",
        season: "Winter",
        color: "#faedcd",
    },
    ]);

  const [editingIndex, setEditingIndex] = useState(null);

  const [form, setForm] = useState({
    destination: '',
    location: '',
    shortDesc: '',
    rating: 0,
    experience: '',
    image: '',
    season: '',
    color: '#ffffff',
  });

  const handleDelete = (index) => {
    const newTrips = trips.filter((_, i) => i !== index);
    setTrips(newTrips);
  };

  const handleUpdate = (index) => {
    setForm(trips[index]);
    setEditingIndex(index);
    setPopup(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updatedTrips = [...trips];
      updatedTrips[editingIndex] = form;
      setTrips(updatedTrips);
      setEditingIndex(null);
    } else {
      setTrips([...trips, form]);
    }
    setForm({
      destination: '',
      location: '',
      shortDesc: '',
      rating: 0,
      experience: '',
      image: '',
      season: '',
      color: '#ffffff',
    });
    setPopup(false);
  };

  return (
    <div className="flex">
      <Navbar />
      <div className="flex-1 ml-72 h-screen overflow-y-auto p-10 bg-gradient-to-br from-[#3b2f2f] via-[#5c3d2e] to-[#9d6b53] text-amber-200">
        {/* Add Button */}
        <h1 className='font-bold text-center text-3xl mt-3 mb-5 text-amber-200'>Trip/Travel Reviews</h1>
        <button
          onClick={() => setPopup(true)}
          className="fixed bottom-10 right-10 text-3xl rounded-full w-14 h-14 shadow-lg bg-amber-200 text-gray-900 transition-all"
        >
          +
        </button>

        {/* Trip cards */}
        <div className="grid grid-cols-1 gap-6">
          {trips.map((trip, index) => (
            <TripCard
              key={index}
              {...trip}
              onDelete={() => handleDelete(index)}
              onUpdate={() => handleUpdate(index)}
            />
          ))}
        </div>

        {/* Popup Modal */}
        {popup && (
          <div className="fixed inset-0 bg-[#00000066] ml-72 flex items-center justify-center">
            <div className="bg-[#fff3e6] p-6 rounded-2xl shadow-2xl w-80">
              <h2 className="text-lg font-bold mb-3 text-center font-serif text-[#5a3e36]">
                Add Trip Memory 🌍
              </h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-[#5a3e36]">
                <input
                  name="destination"
                  placeholder="Destination (e.g. Bali, Paris)"
                  value={form.destination}
                  onChange={handleChange}
                  className="border-b-2 border-[#d4a373] p-1 bg-transparent focus:outline-none"
                />
                <input
                  name="location"
                  placeholder="Location / Country"
                  value={form.location}
                  onChange={handleChange}
                  className="border-b-2 border-[#d4a373] p-1 bg-transparent focus:outline-none"
                />
                <input
                  name="shortDesc"
                  placeholder="Short caption or one-liner"
                  value={form.shortDesc}
                  onChange={handleChange}
                  className="border-b-2 border-[#d4a373] p-1 bg-transparent focus:outline-none"
                />
                <input
                  name="rating"
                  type="number"
                  placeholder="Rating (1–5)"
                  value={form.rating}
                  onChange={handleChange}
                  className="border-b-2 border-[#d4a373] p-1 bg-transparent focus:outline-none"
                />
                <textarea
                  name="experience"
                  placeholder="Describe your experience..."
                  value={form.experience}
                  onChange={handleChange}
                  className="border-b-2 border-[#d4a373] p-1 bg-transparent focus:outline-none"
                />
                <input
                  name="image"
                  placeholder="Image URL"
                  value={form.image}
                  onChange={handleChange}
                  className="border-b-2 border-[#d4a373] p-1 bg-transparent focus:outline-none"
                />
                <input
                  name="season"
                  placeholder="Best season to visit"
                  value={form.season}
                  onChange={handleChange}
                  className="border-b-2 border-[#d4a373] p-1 bg-transparent focus:outline-none"
                />
                <div className="flex items-center gap-3 mt-2">
                  <label className="text-sm font-mono">Card Color:</label>
                  <input
                    type="color"
                    name="color"
                    value={form.color}
                    onChange={handleChange}
                    className="w-10 h-10 rounded cursor-pointer"
                  />
                </div>
                <div className="flex justify-end gap-2 mt-3">
                  <button
                    type="button"
                    onClick={() => setPopup(false)}
                    className="px-3 py-1 bg-[#ffddd2] rounded font-mono"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-3 py-1 bg-[#fcd5ce] rounded font-mono"
                  >
                    {editingIndex !== null ? 'Save' : 'Add'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Trip;
