import React from "react";

const LocationSection = () => {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-12 mt-[110px]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold uppercase">Our Location</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-300">
            We're located in downtown Ulaanbaatar, within walking distance to several key attractions:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.669753678075!2d106.91173205202516!3d47.915337690758044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96924f997b53b9%3A0xb2200710fb6b176c!2z0KHTqdKv0LvQuNC50L0g0LPRg9C00LDQvNC2IDE2LCDQodCR0JQgLSAxINGF0L7RgNC-0L4sINCj0LvQsNCw0L3QsdCw0LDRgtCw0YA!5e1!3m2!1smn!2smn!4v1744688016586!5m2!1smn!2smn"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
              title="Google Maps Location"
            />
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4 text-[#D4A373]">
              Aurelia Hotel
            </h3>
            <p className="text-lg mb-2">Sukhbaatar District, Ulaanbaatar</p>
            <p className="text-lg mb-6">Seoul Street 16-22, Near State Department Store</p>

            <ul className="text-left text-gray-300 text-sm mb-6 list-disc pl-5 space-y-1">
              <li><strong>Sukhbaatar Square</strong> – 7 minutes walk</li>
              <li><strong>National History Museum</strong> – 9 minutes walk</li>
              <li><strong>State Department Store</strong> – 3 minutes walk</li>
              <li><strong>Choijin Lama Temple Museum</strong> – 10 minutes walk</li>
              <li><strong>Shangri-La Mall</strong> – 12 minutes walk</li>
            </ul>
            
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=47.9153377,106.9139208"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#D4A373] text-black font-bold py-2 px-6 uppercase tracking-wide hover:bg-[#c19d69] transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
