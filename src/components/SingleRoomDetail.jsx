import React, { useEffect, useState } from "react";
import RelatedRooms from "./RelatedRooms";
import { useParams } from "react-router-dom";
import { Card, CardContent } from "./Card";
import { Button } from "./Button";
import {
  Wifi, Briefcase, Monitor, Coffee, Tv, Snowflake, Bath,
  Leaf, CupSoda, Droplets, Wind, Flower,
} from "lucide-react";
import PayInfo from "./PayInfo";

export default function RoomDetail() {
  const { id } = useParams();
  const [roomData, setRoomData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const res = await fetch(`http://localhost:3003/rooms/${id}`);
        if (!res.ok) throw new Error("Room not found");
        const data = await res.json();
        setRoomData(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchRoom();
  }, [id]);

  const description = "This room is designed to offer the perfect blend of comfort and style.";

  const amenityIcons = {
    wifi: { label: "Wi-Fi", icon: <Wifi size={16} /> },
    desk: { label: "Work Desk", icon: <Briefcase size={16} /> },
    minibar: { label: "Mini Bar", icon: <Monitor size={16} /> },
    airConditioning: { label: "Air Conditioning", icon: <Snowflake size={16} /> },
    coffee: { label: "Complimentary Coffee & Tea", icon: <Coffee size={16} /> },
    tv: { label: '42" LED TV', icon: <Tv size={16} /> },
    bathtub: { label: "Bath Tub", icon: <Bath size={16} /> },
    balcony: { label: "Balcony", icon: <Leaf size={16} /> },
    juicebar: { label: "Juice Bar", icon: <CupSoda size={16} /> },
    humidifier: { label: "Humidifier", icon: <Droplets size={16} /> },
    fan: { label: "Ceiling Fan", icon: <Wind size={16} /> },
    Spa: { label: "Spa", icon: <Flower size={16} /> },
  };

  const policies = {
    checkInTime: "After 14:00",
    checkOutTime: "Before 12:00",
    frontDesk: "24/7",
    breakfast: {
      type: "Buffet breakfast",
      time: "07:00–10:00",
      note: "Breakfast is complimentary with the stay.",
    },
  };

  if (loading) return <div className="text-center p-10 text-gray-300">Loading room details...</div>;
  if (error || !roomData) return <div className="text-center p-10 text-red-500">Room not found</div>;

  return (
    <div className="flex flex-col min-h-screen mt-20 md:mt-32 px-4 sm:px-6 lg:px-8 xl:px-20 mt-[60px]">
      <div className="p-4 sm:p-6 w-full max-w-7xl mx-auto space-y-8 md:space-y-10 flex-grow">
        {/* Header */}
        <div className="text-center space-y-2 md:space-y-3 mt-[50px]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{roomData.title}</h1>
          <p className="text-muted-foreground text-sm sm:text-md md:text-lg">{description}</p>
        </div>

        {/* Main Room Info */}
        <Card>
          <CardContent className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {/* Left - Image and Info */}
            <div className="space-y-3 sm:space-y-4">
              <img 
                src={roomData.image} 
                alt={roomData.title} 
                className="w-full h-auto rounded-lg sm:rounded-xl object-cover" 
              />
              <div className="text-sm sm:text-base space-y-2 sm:space-y-3 text-white">

                {/* Room Info Cards */}
  <div className="grid grid-cols-2 gap-2 sm:gap-4">
    <div className="bg-white/10 p-3 rounded-lg">
      <p className="text-gray-300 font-medium text-center">Capacity</p>
      <p className="text-lg font-semibold text-center">{roomData.capacity} {roomData.capacity > 1 ? 'People' : 'Person'}</p>
    </div>
    
    <div className="bg-white/10 p-3 rounded-lg">
      <p className="text-gray-300 font-medium text-center">Bed Type</p>
      <p className="text-lg font-semibold text-center">{roomData.bedType}</p>
    </div>
    
    <div className="bg-white/10 p-3 rounded-lg">
      <p className="text-gray-300 font-medium text-center">Room Size</p>
      <p className="text-lg font-semibold text-center">{roomData.roomSize}m²</p>
    </div>
    
    <div className="bg-white/10 p-3 rounded-lg">
      <p className="text-gray-300 font-medium text-center">Rating</p>
      <div className="flex items-center">
        <span className="text-yellow-400 text-lg text-center" >★</span>
        <p className="text-lg font-semibold ml-1 text-center" >{roomData.rating}</p>
      </div>
    </div>
  </div>
  
  <div className="bg-white/10 p-4 rounded-lg">
    <p className="text-gray-300 font-medium text-center">Price</p>
    <p className="text-2xl font-bold text-blue-300 text-center">${roomData.price}<span className="text-sm font-normal text-gray-300"> / night</span></p>
  </div>
</div>
            </div>

            {/* Right - Amenities */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 text-white justify-items-center">
              {roomData.amenities.map((key, idx) => {
                const item = amenityIcons[key];
                if (!item) return null;
                return (
                  <div key={idx} className="flex flex-col items-center text-center space-y-1">
                    <span className="text-[#c29e66]">{item.icon}</span>
                    <span className="text-xs sm:text-sm">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Booking & Policies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Booking */}
          <Card className="bg-black text-white">
            <CardContent className="p-4 sm:p-6">
              <h2 className="text-md sm:text-lg font-semibold mb-3 sm:mb-4">Available Now</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-black transition text-xs sm:text-sm">
                  Check In<br />
                  <span className="text-xs sm:text-sm font-normal">
                    {new Date(roomData.checkIn).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </Button>
                <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-black transition text-xs sm:text-sm">
                  Check Out<br />
                  <span className="text-xs sm:text-sm font-normal">
                    {new Date(roomData.checkOut).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </Button>
              </div>
              <div className="flex justify-center">
                <Button className="w-full sm:w-auto px-6 sm:px-10 py-2 sm:py-3 bg-[#c29e66] text-white font-semibold rounded-lg shadow-lg hover:bg-[#1E1E1E] hover:text-[#c29e66] border border-[#c29e66] transition text-sm sm:text-base">
                  Book Now
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Policies */}
          <Card className="bg-black text-white">
            <CardContent className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h3 className="text-md sm:text-lg font-semibold mb-1 sm:mb-2">Check-in and Check-out Times</h3>
                <ul className="text-xs sm:text-sm space-y-1 list-disc ml-4 sm:ml-5">
                  <li>Check-in: {policies.checkInTime}</li>
                  <li>Check-out: {policies.checkOutTime}</li>
                  <li>Front desk: {policies.frontDesk}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-md sm:text-lg font-semibold mb-1 sm:mb-2">Breakfast</h3>
                <ul className="text-xs sm:text-sm space-y-1 list-disc ml-4 sm:ml-5">
                  <li>Type: {policies.breakfast.type}</li>
                  <li>Opening hours: {policies.breakfast.time}</li>
                  <li>{policies.breakfast.note}</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Related and Payment Info */}
        <RelatedRooms excludeRoomId={roomData.id} />
        <PayInfo />
      </div>
    </div>
  );
}