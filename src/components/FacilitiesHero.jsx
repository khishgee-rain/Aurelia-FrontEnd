import React from "react";
import Faci from "../photos/faci.png";

const FacilitiesHero = () => {
    return (
        <section
            role="img"
            aria-label="A scenic view representing our facilities"
            className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
            style={{ backgroundImage: `url(${Faci})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center px-4">
                <h2 className="text-lg uppercase mb-2 text-white">Our</h2>
                <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-white">
                    Facilities <span className="text-yellow-400">& Services</span>
                </h1>
                <p className="mb-6 text-gray-300 max-w-xl">
                    Discover our world-class amenities designed for your comfort and enjoyment.
                </p>
                <div className="absolute bottom-8 text-white text-3xl animate-bounce">
        ▼
      </div>
            </div>
        </section>
    );
};

export default FacilitiesHero;
