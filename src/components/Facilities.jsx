import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar";
import gym from "../photos/gym.png";
import poolsideBar from "../photos/poolside-bar.png";
import restaurant from "../photos/restaurant.png";
import FacilitiesHero from "./FacilitiesHero";

const facilities = [
  {
    title: "POOLSIDE BAR",
    image: poolsideBar,
    route: "/bar",
  },
  {
    title: "RESTAURANT",
    image: restaurant,
    route: "/food",
  },
  {
    title: "THE GYM",
    image: gym,
    route: "/gym",
  },
];

const Facilities = () => {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <FacilitiesHero />

      <section className="text-white py-20 px-6 flex-grow">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-wide text-[#D4A373] mt-[30px]">
            FACILITIES
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed">
            Whether you want to stay fit, unwind with a cocktail, or enjoy a gourmet meal — our facilities are designed to elevate your stay at Aurelia Hotel.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {facilities.map((facility) => (
            <div
              key={facility.title}
              className="group cursor-pointer transform transition duration-300 hover:scale-105"
              onClick={() => handleClick(facility.route)}
            >
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-72 object-cover group-hover:brightness-110 group-hover:scale-105 transition duration-300"
                />
                <div className="bg-[#D4A373] py-4 text-center">
                  <h3 className="text-xl font-bold text-black tracking-wider">
                    {facility.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Facilities;
