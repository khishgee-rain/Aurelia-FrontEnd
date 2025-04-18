import React from "react";
import { useCart } from "./CartContext";
import { X } from "lucide-react";

const Orders = () => {
  const { cartItems, removeFromCart } = useCart();
  
  if (cartItems.length === 0) {
    return <div className="text-white p-10 text-center text-lg mt-[300px]">No rooms in cart.</div>;
  }

  return (
<div className="bg-black text-white min-h-screen py-10 px-4 mt-[60px]">
      <h1 className="text-2xl font-bold text-center mb-8">Order Summary</h1>

      <div className="space-y-4 max-w-xl mx-auto">
        {cartItems.map((room, index) => (
          <div
            key={index}
            className="bg-[#1c1c1c] p-4 rounded-lg shadow flex items-start space-x-4 relative"
          >
            <img
              src={room.image}
              alt={room.title}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{room.title}</h2>
              <p className="text-sm text-gray-400">Capacity: {room.capacity}</p>
              <p className="text-sm text-gray-400">Bed Type: {room.bedType}</p>
              <p className="text-sm text-gray-400">Room Size: {room.roomSize}</p>
              <p className="text-sm font-bold mt-1">Price:$ {room.price}</p>
            </div>

            <button
              onClick={() => removeFromCart(room.id)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition"
              title="Remove"
            >
              <X size={18} />
            </button>
          </div>
        ))}
      </div>

      {/* Buy Now button */}
   {/* Buy Now button */}
<div className="max-w-xl mx-auto mt-10 text-center">
  <button
    onClick={() => alert("Proceeding to payment...")}
    className="bg-[#c29e66] text-black px-10 py-4 text-lg rounded-md font-bold hover:bg-[#b38f59] transition"
  >
    Buy Now
  </button>
</div>



    </div>
  );
};

export default Orders;
