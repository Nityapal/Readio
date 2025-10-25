import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  

  return (
    <div className="flex min-h-screen">
      <Navbar />

      {/* Home Content */}
      <div className="flex-1 ml-72 relative bg-gradient-to-br from-[#2f1f1f] via-[#46322b] to-[#7c5a4b] text-[#f9e7d7] flex flex-col items-center justify-center p-10 overflow-hidden">

        {/* Welcome Text */}
        <div className="relative text-center z-10 mb-10">
          <h1 className="text-5xl font-extrabold text-[#f8e8d3] drop-shadow-lg mb-3">Welcome to <span className="text-amber-300">Readio</span></h1>
          <p className="max-w-2xl mx-auto text-[#f9e7d7]/90 text-lg font-light">
            Your cozy corner for stories, reviews, and favourites — books, films, or memories that shaped your vibe.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {/* Review Card */}
          <div
            onClick={() => navigate("/reviews")}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 cursor-pointer hover:bg-white/20 hover:scale-105 transition-all duration-300 ease-in-out shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-amber-200 mb-2"> Reviews</h2>
            <p className="text-sm text-[#f9e7d7]/90">
              Share your reflections and let words do the storytelling.
            </p>
          </div>

          {/* Travel Card */}
          <div
            onClick={() => navigate("/trip")}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 cursor-pointer hover:bg-white/20 hover:scale-105 transition-all duration-300 ease-in-out shadow-lg">
            <h2 className="text-2xl font-semibold text-amber-200 mb-2">Travel</h2>
            <p className="text-sm text-[#f9e7d7]/90">
              Capture memories, and let the world unfold through your stories.
            </p>
          </div>

          {/* Favourites Card */}
          {/* <div
            onClick={() => navigate("/favourites")}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 cursor-pointer hover:bg-white/20 hover:scale-105 transition-all duration-300 ease-in-out shadow-lg">
            <h2 className="text-2xl font-semibold text-amber-200 mb-2">Favourites</h2>
            <p className="text-sm text-[#f9e7d7]/90">
              Collect and revisit your comfort picks — the gems that stay close.
            </p>
          </div> */}
        </div>

        {/* Login / Signup Section */}
        <div className="relative z-10 mt-14 text-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 w-full max-w-md shadow-lg">
          <p className="text-[#f9e7d7]/90 text-sm">
            Ready to begin your journey? <br />
            <span className="text-amber-200 font-medium">Login or Sign Up</span> to start exploring.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <button className="px-4 py-2 rounded-full bg-amber-200 text-gray-800 hover:bg-amber-300 transition-all duration-200">
              Login
            </button>
            <button className="px-4 py-2 rounded-full bg-amber-200 text-gray-800 hover:bg-amber-300 transition-all duration-200">
              Sign Up
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="relative z-10 mt-10 text-sm text-[#f9e7d7]/70 font-mono">
          made with ❤️ & chaos by Nitya ✨
        </p>
      </div>
    </div>
  );
};

export default Home;
