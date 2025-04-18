import React from "react";
import Navbar from "./NavBar";
import chef from "../photos/chef.png"

const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${chef})` }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center px-4">
        <h2 className="text-white text-xl uppercase tracking-widest mb-2">
          Welcome to
        </h2>
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-1">
          <span className="text-white">Aurelia</span>
        </h1>
        <h2 className="text-4xl md:text-5xl tracking-widest text-white mb-4">
          HOTELS
        </h2>
        <p className="mb-6 text-gray-200 text-lg max-w-xl">
          Book your stay and enjoy luxury redefined at the most affordable rates.
        </p>
        <button className="bg-[#c29e66] text-black px-6 py-3 rounded-md font-semibold hover:bg-[#b38f59] transition">
          BOOK NOW
        </button>
        <div className="absolute bottom-8 text-white text-3xl animate-bounce">
        ▼
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
