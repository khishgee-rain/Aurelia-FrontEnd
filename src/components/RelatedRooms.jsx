import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "./Card";
import "../App.css"

export default function RelatedRooms({ excludeRoomId }) {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await fetch("http://localhost:3003/rooms");
        const data = await res.json();
        setRooms(data);
      } catch (err) {
        console.error("Failed to fetch rooms", err);
      }
    };
    fetchRooms();
  }, []);

  const related = rooms.filter((room) => room.id !== excludeRoomId);

  const scroll = (dir) => {
  if (scrollRef.current) {
    const { scrollLeft } = scrollRef.current;
    const scrollAmount = 300; 
    const newPos = dir === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
    scrollRef.current.scrollTo({ left: newPos, behavior: "smooth" });
  }
};


  return (
    <div className="relative mt-16 px-4 bg-black text-white">
      <h2 className="text-3xl font-semibold text-center mb-10 text-[#bfa370] tracking-wide">
        OUR ROOMS
      </h2>

      {/* Navigation Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-[-20px] top-[50%] transform -translate-y-1/2 z-10 bg-white text-[#bfa370] border border-[#bfa370] w-10 h-10 rounded-full flex items-center justify-center shadow hover:bg-[#bfa370] hover:text-white transition"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-[-20px] top-[50%] transform -translate-y-1/2 z-10 bg-white text-[#bfa370] border border-[#bfa370] w-10 h-10 rounded-full flex items-center justify-center shadow hover:bg-[#bfa370] hover:text-white transition"
      >
        <ChevronRight />
      </button>

      {/* Scrollable Card Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-8 scroll-smooth no-scrollbar pb-4"
      >
        {related.map((room) => (
          <div
            key={room.id}
            className="min-w-[350px] max-w-[380px] flex-shrink-0 cursor-pointer"
            onClick={() => navigate(`/rooms/${room.id}`)}
          >
            <Card className="bg-[#111] border border-[#333] rounded-2xl overflow-hidden hover:shadow-xl transition">
              <CardContent className="p-0">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-[260px] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-[#d9b882] uppercase">
                    {room.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                        {room.capacity} Guest • {room.bedType || "King Sized"} • {room.roomSize ? `${room.roomSize} m²` : "Size not specified"}
                  </p>

                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
