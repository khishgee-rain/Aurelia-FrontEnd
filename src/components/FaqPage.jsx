import React from "react";
import Navbar from "./NavBar";

const faqData = [
  {
    question: "What time is check-in and check-out?",
    answer: "Check-in is from 2:00 PM and check-out is until 12:00 PM.",
  },
  {
    question: "Is breakfast included in the room price?",
    answer: "Yes, breakfast is included and is served from 7:00 AM to 10:00 AM.",
  },
  {
    question: "Do you have free Wi-Fi?",
    answer: "Yes, we offer free Wi-Fi throughout the hotel. The password is available at the front desk.",
  },
  {
    question: "Is there parking available?",
    answer: "Yes, we have free parking for all our guests.",
  },
  {
    question: "Do you accept credit cards?",
    answer: "Yes, we accept all major credit cards including Visa, MasterCard, and American Express.",
  },
  {
    question: "Are pets allowed in the hotel?",
    answer: "Yes, we are pet-friendly with a small additional fee of $20 per night.",
  },
  {
    question: "Do you have a swimming pool?",
    answer: "Yes, we have an indoor heated pool open from 8:00 AM to 10:00 PM daily.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "Cancellations must be made 48 hours prior to arrival to avoid a one-night charge.",
  },
  {
    question: "Do you have room service?",
    answer: "Yes, room service is available from 7:00 AM to 11:00 PM daily.",
  },
  {
    question: "Are there any restaurants on site?",
    answer: "We have one restaurant serving breakfast, lunch, and dinner, plus a lounge bar.",
  }
];

const FaqPage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* FAQ Section */}
      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-20 mt-[60px]">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#C19D69] mb-10">FAQ</h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-[#2b2b2b] text-gray-100 rounded-lg px-6 py-5 shadow-sm"
            >
              <p className="font-semibold mb-1">Q: {item.question}</p>
              <p className="text-sm">
                <span className="font-semibold text-white">A:</span> {item.answer}
              </p>
            </div>
          ))}
        </div>
      </main>

    </div>
  );
};

export default FaqPage;
