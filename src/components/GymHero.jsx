import React from "react";
import Navbar from "./NavBar";

const GymHero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
      style={{
        backgroundImage:
          "url('https://www.glofox.com/wp-content/uploads/2021/08/shutterstock_721723381.jpg')",
      }}
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
          GYM & FITNESS
        </h2>
        <p className="mb-6 text-gray-200 text-lg max-w-xl">
          Stay fit and energized during your stay with our state-of-the-art gym and personal training services.
        </p>
        
        <div className="absolute bottom-8 text-white text-3xl animate-bounce">
          ▼
        </div>
      </div>
    </section>
  );
};

export default GymHero;
