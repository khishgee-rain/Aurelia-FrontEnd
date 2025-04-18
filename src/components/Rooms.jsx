import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import Navbar from "./NavBar";
import heroRoom from "../photos/roomHero.png";

const Rooms = () => {
  const { addToCart } = useCart();
  const [rooms, setRooms] = useState([]);

  // fetch rooms from backend
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await fetch("http://localhost:3003/rooms");
        const data = await res.json();
        setRooms(data);
      } catch (error) {
        console.error("Failed to fetch rooms:", error);
      }
    };

    fetchRooms();
  }, []);

const handleBookNow = (room) => {
  addToCart(room);
};

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section
        className="h-[80vh] bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: `url(${heroRoom})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
        <div className="text-center px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            WELCOME TO <span className="text-[#C19D69]">Aurelia</span> HOTELS
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Book your perfect stay now with our elegant rooms.
          </p>
          
        </div>
      </section>

      {/* Rooms */}
      <section className="py-16 px-6 max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">ROOMS AND RATES</h2>
          <p className="mt-4 max-w-xl mx-auto text-gray-400">
            Choose from a variety of rooms designed for comfort and elegance. Experience top-class service and cozy vibes.
          </p>
        </div>

        {rooms.length === 0 ? (
          <p className="text-center text-gray-400">Loading rooms...</p>
        ) : (
          <div className="space-y-12">
            {rooms.map((room) => (
              <div key={room.id} className="bg-[#1c1c1c] rounded-lg overflow-hidden shadow-lg">
                <img src={room.image} alt={room.title} className="w-full h-auto" />
                <div className="p-6 flex justify-between items-center flex-wrap gap-4">
                  <h3 className="text-xl font-semibold">{room.title}</h3>
                  <div className="flex gap-4">
                    <Link to={`/rooms/${room.id}`}>
                      <button className="bg-transparent border border-[#C19D69] text-[#C19D69] px-4 py-2 hover:bg-[#C19D69] hover:text-black transition">
                        View Room Details
                      </button>
                    </Link>
                    <button
                      onClick={() => handleBookNow(room)}
                      className="bg-[#C19D69] text-black px-4 py-2 hover:bg-[#b68a4d] transition"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Testimonials */}
      <section className="text-center py-16 px-6 text-gray-400">
        <h2 className="text-2xl mb-4">Testimonials</h2>
        <p className="italic">"Calm, luxurious, modern — what more can you ask for?"</p>
        <div className="mt-4 flex justify-center gap-4 text-xl">
          <i className="fab fa-facebook-f" />
          <i className="fab fa-twitter" />
          <i className="fab fa-instagram" />
        </div>
      </section>
    </div>
  );
};

export default Rooms;
