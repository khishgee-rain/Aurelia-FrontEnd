import React from "react";
import GymHero from "./GymHero";

const GymSection = () => {
  return (
    <section className="bg-black-900 text-white py-16 px-4 md:px-8">
      <div className="text-center mb-12">
        <GymHero />
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-8 mb-6 relative inline-block">
          <span className="relative z-10 px-4">THE GYM</span>
          <span className="absolute bottom-[-5px] left-0 w-full h-3 bg-[#c29e66] z-0 transform translate-y-1"></span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Premium fitness experience with world-class facilities and expert guidance
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Gym Room */}
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:transform hover:-translate-y-2 transition-all duration-300">
          <div className="h-48 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80"
              alt="Gym Room"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center mb-3">
              <div className="w-8 h-1 bg-[#c29e66] mr-3"></div>
              <h3 className="text-xl font-bold text-[#c29e66]">STATE-OF-THE-ART FACILITY</h3>
            </div>
            <p className="text-gray-300">
              Our gym features cutting-edge equipment from leading brands to support every workout style - from cardio to strength training.
            </p>
          </div>
        </div>

        {/* Personal Trainer */}
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:transform hover:-translate-y-2 transition-all duration-300">
          <div className="h-48 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Personal Trainer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center mb-3">
              <div className="w-8 h-1 bg-[#c29e66] mr-3"></div>
              <h3 className="text-xl font-bold text-[#c29e66]">CERTIFIED TRAINERS</h3>
            </div>
            <p className="text-gray-300">
              Our experienced professionals hold top certifications and are dedicated to helping you reach your personal fitness goals.
            </p>
          </div>
        </div>

        {/* Weights Section */}
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:transform hover:-translate-y-2 transition-all duration-300">
          <div className="h-48 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1581009137042-c552e485697a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Weights"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center mb-3">
              <div className="w-8 h-1 bg-[#c29e66] mr-3"></div>
              <h3 className="text-xl font-bold text-[#c29e66]">COMPREHENSIVE EQUIPMENT</h3>
            </div>
            <p className="text-gray-300">
              From free weights to functional training gear, we offer all the tools you need for a complete workout experience.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default GymSection;