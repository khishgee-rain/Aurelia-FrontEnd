import React from "react";
import Beef from "../photos/beef.png"; 
import FoodHero from "../components/FoodHero";
import zaal from "../photos/zaal.png";
import chef2 from "../photos/chef2.png";

const FoodSection = () => {
  return (
    <section className="bg-black-900 text-white py-16 px-4 md:px-8">
      <div className="text-center mb-12">
        <FoodHero />
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-8 mb-6 relative inline-block">
          <span className="relative z-10 px-4">RESTAURANT</span>
          <span className="absolute bottom-[-5px] left-0 w-full h-3 bg-[#c29e66] z-0 transform translate-y-1"></span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Culinary excellence meets elegant dining in our premium restaurant
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Beef Dish */}
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:transform hover:-translate-y-2 transition-all duration-300 group">
          <div className="h-48 overflow-hidden relative">
            <img
              src={Beef}
              alt="Beef Dish"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-all duration-300"></div>
          </div>
          <div className="p-6">
            <div className="flex items-center mb-3">
              <div className="w-8 h-1 bg-[#c29e66] mr-3"></div>
              <h3 className="text-xl font-bold text-[#c29e66]">PREMIUM CUISINE</h3>
            </div>
            <p className="text-gray-300">
              Indulge in exquisite dishes crafted by our internationally-trained chef, featuring modern flair on classic favorites with perfect harmony of flavor and presentation.
            </p>
          </div>
        </div>

        {/* Restaurant Interior */}
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:transform hover:-translate-y-2 transition-all duration-300 group">
          <div className="h-48 overflow-hidden relative">
            <img
              src={zaal}
              alt="Restaurant Interior"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-all duration-300"></div>
          </div>
          <div className="p-6">
            <div className="flex items-center mb-3">
              <div className="w-8 h-1 bg-[#c29e66] mr-3"></div>
              <h3 className="text-xl font-bold text-[#c29e66]">LUXURIOUS AMBIENCE</h3>
            </div>
            <p className="text-gray-300">
              Experience dining in our beautifully designed setting - stylish yet relaxing, perfect for romantic dinners or celebrations with a refined, welcoming atmosphere.
            </p>
          </div>
        </div>

        {/* Chef */}
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:transform hover:-translate-y-2 transition-all duration-300 group">
          <div className="h-48 overflow-hidden relative">
            <img
              src={chef2}
              alt="Chef"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-all duration-300"></div>
          </div>
          <div className="p-6">
            <div className="flex items-center mb-3">
              <div className="w-8 h-1 bg-[#c29e66] mr-3"></div>
              <h3 className="text-xl font-bold text-[#c29e66]">MASTER CHEF</h3>
            </div>
            <p className="text-gray-300">
              Our world-class American chef brings creative expertise to every dish, crafting memorable dining experiences through signature entrees and innovative specials.
            </p>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default FoodSection;