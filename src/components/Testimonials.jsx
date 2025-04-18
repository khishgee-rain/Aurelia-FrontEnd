import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Calm, Serene, Retro – What a way to relax and enjoy.",
    name: "Mr. and Mrs. Baxter",
    country: "UK",
    rating: 5,
  },
  {
    quote: "Absolutely loved the food and ambiance. Highly recommended!",
    name: "Sophia Chen",
    country: "Singapore",
    rating: 4,
  },
  {
    quote: "An unforgettable experience. The chef is truly world-class.",
    name: "James Rodriguez",
    country: "USA",
    rating: 5,
  },
];

const StarRating = ({ count }) => (
  <div className="flex justify-center mb-2">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < count ? "text-[#c29e66]" : "text-gray-600"}`}
        fill={i < count ? "currentColor" : "none"}
      />
    ))}
  </div>
);

const Testimonials = () => (
  <section className="bg-black-900 py-16 px-4 text-white">
    <div className="max-w-6xl mx-auto text-center">
      <h3 className="text-3xl font-bold mb-12 text-[#c29e66]">
        What Our Guests Say
      </h3>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-2xl shadow-xl relative"
          >
            <Quote className="absolute top-4 left-4 text-[#c29e66] w-6 h-6" />
            <p className="italic text-base leading-relaxed mb-4">"{t.quote}"</p>
            <p className="text-sm text-gray-400 mb-1">
              - {t.name}, {t.country}
            </p>
            <StarRating count={t.rating} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
