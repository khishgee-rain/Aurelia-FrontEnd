import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const InfoSection = () => {
  const navigate = useNavigate();
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const res = await fetch("http://localhost:3003/infosections");
        if (!res.ok) throw new Error("Failed to fetch info sections");
        const data = await res.json();
        setSections(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSections();
  }, []);

  if (loading) {
    return <div className="text-white text-center py-20">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-20">Error: {error}</div>;
  }

  return (
    <section className="py-24 px-6 space-y-32 text-white bg-black-900">
      {sections.map((sec, index) => (
        <div
          key={index}
          className={`flex flex-col ${sec.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-16 md:gap-24`}
        >
          <div className="md:w-1/2 space-y-8 text-center md:text-left flex flex-col items-center md:items-start">
            <h3 className="text-5xl sm:text-6xl font-extrabold text-white">
              {sec.title}
            </h3>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              {sec.description}
            </p>
            <button
              onClick={() => navigate("/rooms")}
              className="bg-[#c29e66] hover:bg-[#b38f59] transition px-10 py-4 rounded-lg text-xl font-semibold text-black shadow-md hover:shadow-lg"
            >
              Explore
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src={sec.image}
              alt={sec.title}
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default InfoSection;
