import React from "react";
import alcoholCocktail from "../photos/cocktail.png";
import alcoholBeer from "../photos/beer.png";
import alcoholWine from "../photos/wine.png";
import HeroSectionA from "./AlcoholHero";

const AlcoholSection = () => {
    return (
    <section className="bg-black-900 text-white py-16 px-4 md:px-8">
      <div className="text-center mb-12">
        <HeroSectionA />
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-8 mb-6 relative inline-block">
          <span className="relative z-10 px-4">PREMIUM DRINKS</span>
          <span className="absolute bottom-[-5px] left-0 w-full h-3 bg-[#c29e66] z-0 transform translate-y-1"></span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Crafted cocktails, fine wines, and premium beers to elevate your experience
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cocktail */}
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:transform hover:-translate-y-2 transition-all duration-300 group">
          <div className="h-48 overflow-hidden relative">
            <img
              src={alcoholCocktail}
              alt="Cocktail"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
            <div className="absolute bottom-4 right-4 bg-[#c29e66] text-gray-900 font-bold px-4 py-1 rounded-full text-sm">
              $4.99
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center mb-3">
              <div className="w-8 h-1 bg-[#c29e66] mr-3"></div>
              <h3 className="text-xl font-bold text-[#c29e66]">SIGNATURE COCKTAILS</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Handcrafted blends of premium spirits and fresh ingredients, designed to impress both the eye and palate.
            </p>
           
          </div>
        </div>

        {/* Draft Beer */}
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:transform hover:-translate-y-2 transition-all duration-300 group">
          <div className="h-48 overflow-hidden relative">
            <img
              src={alcoholBeer}
              alt="Draft Beer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
            <div className="absolute bottom-4 right-4 bg-[#c29e66] text-gray-900 font-bold px-4 py-1 rounded-full text-sm">
              $2.99
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center mb-3">
              <div className="w-8 h-1 bg-[#c29e66] mr-3"></div>
              <h3 className="text-xl font-bold text-[#c29e66]">CRAFT BEERS</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Served cold and fresh from the tap, our selection offers smooth taste and crisp satisfaction for every occasion.
            </p>
           
          </div>
        </div>

        {/* Wine */}
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:transform hover:-translate-y-2 transition-all duration-300 group">
          <div className="h-48 overflow-hidden relative">
            <img
              src={alcoholWine}
              alt="Wine"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
            <div className="absolute bottom-4 right-4 bg-[#c29e66] text-gray-900 font-bold px-4 py-1 rounded-full text-sm">
              $7.99
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center mb-3">
              <div className="w-8 h-1 bg-[#c29e66] mr-3"></div>
              <h3 className="text-xl font-bold text-[#c29e66]">FINE WINES</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Carefully curated collection ranging from rich reds to refreshing whites, perfect for romantic dinners or quiet evenings.
            </p>
           
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default AlcoholSection;