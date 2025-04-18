import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import hero1 from "../photos/hero.jpg";
import hero2 from "../photos/room1.jpg";
import hero3 from "../photos/room2.jpg";

const images = [hero1, hero2, hero3];

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-center transition-all duration-1000"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center px-6">
        <h2 className="text-white text-2xl sm:text-3xl uppercase tracking-[0.3em] mb-3 font-medium">
          Welcome to
        </h2>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-1 drop-shadow-lg">
          <span className="text-[#f5d398]">Aurelia</span>
        </h1>

        <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-[0.25em] text-white font-light mb-6">
          HOTELS
        </h2>

        <p className="mb-8 text-gray-200 text-lg sm:text-xl max-w-2xl leading-relaxed">
          Book your stay and enjoy luxury redefined — where elegance meets comfort at the most affordable rates.
        </p>

        <button
          onClick={() => navigate("/rooms")}
          className="bg-[#c29e66] hover:bg-[#b38f59] transition px-8 py-4 rounded-lg text-lg font-semibold text-black shadow-md hover:shadow-lg"
        >
          BOOK NOW
        </button>
      </div>

      {/* Arrow Down */}
      <div className="absolute bottom-8 text-white text-3xl animate-bounce">
        ▼
      </div>
    </section>
  );
};

export default HeroSection;
