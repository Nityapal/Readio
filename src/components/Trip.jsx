import React, { useState } from 'react';
import Navbar from './Navbar';
import TripCard from './TripCard';

const Trip = () => {
  const [popup, setPopup] = useState(false);
  const [trips, setTrips] = useState([]);
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
      <div className="flex-1 ml-72 h-screen overflow-y-auto p-10 bg-gray-900 text-amber-200">
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
