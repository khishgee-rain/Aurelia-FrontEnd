import React from "react";
import Navbar from "./NavBar";

const AboutUs = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* About Us Section */}
      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-20 mt-[60px]">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#C19D69] mb-10">About Us</h2>

        <div className="max-w-3xl mx-auto space-y-10">
          {/* General Intro */}
          <div className="bg-[#2b2b2b] text-gray-100 rounded-lg px-6 py-8 shadow">
            <p>
              <span className="text-white font-semibold">Aurelia Hotel</span> is a luxury urban retreat located in the heart of Ulaanbaatar. Founded in 2020, we are committed to offering elegant comfort, modern amenities, and exceptional service to our valued guests.
            </p>

            <p className="mt-4">
              Whether you’re here for business or leisure, our prime location places you within walking distance of Sukhbaatar Square, the National History Museum, and premium shopping destinations.
            </p>

            <p className="mt-4">
              Our mission is to provide a serene and memorable stay with Mongolian hospitality at its finest. Each room is thoughtfully designed for relaxation and style, while our restaurant and spa complete the perfect getaway experience.
            </p>
          </div>

          {/* Our Story */}
          <div className="bg-[#2b2b2b] text-gray-100 rounded-lg px-6 py-8 shadow">
            <h3 className="text-2xl font-semibold text-[#C19D69] mb-4">Our Story</h3>
            <p>
              Aurelia Hotel was born from a dream to create a space where local tradition meets modern luxury. Established by a family passionate about hospitality, we transformed a historic building into a boutique destination for travelers seeking comfort and culture.
            </p>
            <p className="mt-4">
              From humble beginnings, our team has grown into a tight-knit family dedicated to making every guest feel at home. Over the years, we’ve welcomed visitors from all over the world, and we continue to evolve while staying true to our Mongolian roots.
            </p>
          </div>

          {/* Our Mission */}
          <div className="bg-[#2b2b2b] text-gray-100 rounded-lg px-6 py-8 shadow">
            <h3 className="text-2xl font-semibold text-[#C19D69] mb-4">Our Mission</h3>
            <p>
              Our mission is to redefine urban hospitality in Mongolia by offering world-class service, sustainable practices, and unforgettable experiences.
            </p>
            <p className="mt-4">
              We aim to be a place of warmth, connection, and cultural appreciation — a hotel that feels like home but inspires discovery.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
