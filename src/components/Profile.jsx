import React, { useState } from 'react';
import Navbar from './Navbar';
import { FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

const Profile = () => {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Nitya',
    nickname: 'Nits ♡',
    bio: 'Dreamer, writer, coffee lover ☕✨ — documenting life, thoughts & travels.',
    profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDohG9dmF_fMVPNLMZ8Ti02h7RLJmu2JN-wg&s',
  });

  const [temp, setTemp] = useState({ ...profile });

  const handleSave = () => {
    setProfile(temp);
    setEditing(false);
  };

  return (
    <div className="flex">
      <Navbar />
      <div className="flex-1 ml-72 min-h-screen overflow-y-auto p-10 bg-gradient-to-br from-[#3b2f2f] via-[#5c3d2e] to-[#9d6b53] text-[#fbecf5] flex flex-col items-center">
        {/* Profile card */}
        <h1 className='font-bold text-center text-3xl mt-3 mb-15 text-amber-200'>My Profile</h1>
        <div className="bg-[#fbecf5]/10 backdrop-blur-lg shadow-xl border border-[#fbecf5]/20 rounded-2xl p-8 w-full max-w-md flex flex-col items-center text-center">
          <img
            src={profile.profilePic}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-[#fbecf5] object-cover mb-4 shadow-md"
          />
          <h2 className="text-2xl font-bold text-amber-200">{profile.name}</h2>
          <p className="italic text-[#fcd5ce]">{profile.nickname}</p>
          <p className="text-sm mt-3 text-[#fbecf5]/90 leading-relaxed">{profile.bio}</p>

          {/* Social links */}
          <div className="flex gap-5 mt-6 text-2xl">
            <a href="#" className="hover:text-[#d7b960] transition"><FaInstagram /></a>
            <a href="#" className="hover:text-[#d7b960] transition"><FaTwitter /></a>
            <a href="#" className="hover:text-[#d7b960] transition"><FaGithub /></a>
          </div>

          {/* Edit Button */}
          <button
            onClick={() => setEditing(true)}
            className="mt-6 px-5 py-2 rounded-full bg-[#fbecf5]/20 border border-[#fbecf5]/30 hover:bg-[#fbecf5]/30 transition font-semibold text-sm"
          >
            Edit Profile
          </button>
        </div>

        {/* Contact card */}
        <div className="mt-10 bg-[#fbecf5]/10 backdrop-blur-md border border-[#fbecf5]/20 rounded-2xl p-6 w-full max-w-md text-center">
          <h3 className="text-2xl font-semibold mb-2 text-amber-200">Let’s Connect</h3>
          <p className="text-sm text-[#fcd5ce] mb-3">
            Drop a message or say hi! I'm always open to collabs or random good convos.
          </p>
          <button className="px-4 py-2 bg-[#fbecf5]/20 border border-[#fbecf5]/30 rounded-full hover:bg-[#fbecf5]/30 text-sm transition">
            Contact Me
          </button>
        </div>

        {/* Edit Modal */}
        {editing && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-[#fbecf5] text-[#5c3d2e] rounded-2xl p-6 shadow-lg w-80">
              <h2 className="text-lg font-bold mb-3 text-center">Edit Profile 🖋️</h2>
              <div className="flex flex-col gap-3">
                <input
                  name="name"
                  value={temp.name}
                  onChange={(e) => setTemp({ ...temp, name: e.target.value })}
                  placeholder="Your name"
                  className="border-b-2 border-[#a59389] p-1 bg-transparent focus:outline-none"
                />
                <input
                  name="nickname"
                  value={temp.nickname}
                  onChange={(e) => setTemp({ ...temp, nickname: e.target.value })}
                  placeholder="Nickname"
                  className="border-b-2 border-[#a59389] p-1 bg-transparent focus:outline-none"
                />
                <textarea
                  name="bio"
                  value={temp.bio}
                  onChange={(e) => setTemp({ ...temp, bio: e.target.value })}
                  placeholder="Short bio"
                  className="border-b-2 border-[#a59389] p-1 bg-transparent focus:outline-none"
                />
                <input
                  name="profilePic"
                  value={temp.profilePic}
                  onChange={(e) => setTemp({ ...temp, profilePic: e.target.value })}
                  placeholder="Profile image URL"
                  className="border-b-2 border-[#a59389] p-1 bg-transparent focus:outline-none"
                />
              </div>
              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={() => setEditing(false)}
                  className="px-3 py-1 rounded bg-[#faedcd] text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-3 py-1 rounded bg-[#fde2e4] text-sm"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
