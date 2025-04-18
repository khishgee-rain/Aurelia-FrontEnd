import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const AMENITIES_LIST = [
  "wifi", "coffee", "tv", "airConditioning", "desk", "minibar",
  "bathtub", "balcony", "juicebar", "humidifier", "fan", "Spa"
];

const initialRoomForm = {
  title: "",
  image: "",
  rating: "",
  capacity: "",
  bedType: "",
  roomSize: "",
  checkIn: "",
  checkOut: "",
  type: "",
  price: "",
  amenities: [],
};

const initialSection = {
  title: "",
  description: "",
  image: "",
  reverse: false,
};

const AdminPanel = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialRoomForm);
  const [rooms, setRooms] = useState([]);
  const [editRoomId, setEditRoomId] = useState(null);

  const [sectionForm, setSectionForm] = useState(initialSection);
  const [infoSections, setInfoSections] = useState([]);
  const [editSectionId, setEditSectionId] = useState(null);

  const [activeTab, setActiveTab] = useState("rooms");

  useEffect(() => {
    if (!isLoggedIn) navigate("/login");
    else {
      fetchRooms();
      fetchInfoSections();
    }
  }, [isLoggedIn, navigate]);

  const fetchRooms = async () => {
    const res = await fetch("http://localhost:3003/rooms");
    const data = await res.json();
    setRooms(data);
  };

  const fetchInfoSections = async () => {
    const res = await fetch("http://localhost:3003/infosections");
    const data = await res.json();
    setInfoSections(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAmenityToggle = (amenity) => {
    setFormData(prev => {
      const isIncluded = prev.amenities.includes(amenity);
      return {
        ...prev,
        amenities: isIncluded
          ? prev.amenities.filter(a => a !== amenity)
          : [...prev.amenities, amenity]
      };
    });
  };

  const handleClear = () => {
    setFormData(initialRoomForm);
    setEditRoomId(null);
  };

  const handleSubmit = async () => {
    const method = editRoomId ? "PUT" : "POST";
    const url = editRoomId
      ? `http://localhost:3003/rooms/${editRoomId}`
      : "http://localhost:3003/rooms";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      handleClear();
      fetchRooms();
    }
  };

  const handleEditClick = (room) => {
    setFormData({
      ...room,
      checkIn: room.checkIn?.substring(0, 10),
      checkOut: room.checkOut?.substring(0, 10),
    });
    setEditRoomId(room.id);
    setActiveTab("rooms");
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this room?")) {
      await fetch(`http://localhost:3003/rooms/${id}`, {
        method: "DELETE",
      });
      fetchRooms();
    }
  };

  const handleSectionChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSectionForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSectionClear = () => {
    setSectionForm(initialSection);
    setEditSectionId(null);
  };

  const handleSectionSubmit = async () => {
    const method = editSectionId ? "PUT" : "POST";
    const url = editSectionId
      ? `http://localhost:3003/infosections/${editSectionId}`
      : "http://localhost:3003/infosections";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sectionForm),
    });

    if (res.ok) {
      handleSectionClear();
      fetchInfoSections();
    }
  };

  const handleEditSection = (section) => {
    setSectionForm(section);
    setEditSectionId(section.id);
    setActiveTab("sections");
  };

  const handleDeleteSection = async (id) => {
    if (window.confirm("Are you sure you want to delete this section?")) {
      await fetch(`http://localhost:3003/infosections/${id}`, {
        method: "DELETE",
      });
      fetchInfoSections();
    }
  };

  return (
    <div
  className="min-h-screen pt-28 bg-cover bg-center mt-[60px] mb-[60px]"
  style={{ backgroundImage: "url('/your-background-image.jpg')" }}
>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-black text-white px-6 py-4">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <p className="text-gray-300">Manage rooms and information sections</p>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200 text-gray-500">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab("rooms")}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${activeTab === "rooms" ? "border-[#C19D69] text-[#C19D69]" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
              >
                Rooms
              </button>
              <button
                onClick={() => setActiveTab("sections")}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${activeTab === "sections" ? "border-[#C19D69] text-[#C19D69]" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
              >
                Info Sections
              </button>
            </nav>
          </div>

          <div className="p-6">
            {/* Rooms Tab Content */}
            {activeTab === "rooms" && (
              <>
                {/* Room Form */}
                <div className="bg-[#f8f5f0] p-6 rounded-lg mb-8 border border-[#C19D69] text-black">
                  <h2 className="text-xl font-semibold mb-4 text-[#C19D69]">
                    {editRoomId ? "Edit Room" : "Add New Room"}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                    {Object.entries(formData).map(([key, value]) =>
                      key !== "amenities" ? (
                        <div key={key} className="space-y-1">
                          <label className="block text-sm font-medium text-gray-700 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </label>
                          <input
                            name={key}
                            value={value}
                            placeholder={key.replace(/([A-Z])/g, ' $1').trim()}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-[#C19D69] focus:border-[#C19D69]"
                          />
                        </div>
                      ) : null
                    )}
                  </div>

                  <div className="mb-6">
                    <h3 className="block text-sm font-medium text-gray-700 mb-2">Amenities</h3>
                    <div className="flex flex-wrap gap-2">
                      {AMENITIES_LIST.map((amenity) => (
                        <label
                          key={amenity}
                          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                            formData.amenities.includes(amenity)
                              ? "bg-[#C19D69] text-white"
                              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={formData.amenities.includes(amenity)}
                            onChange={() => handleAmenityToggle(amenity)}
                            className="hidden"
                          />
                          {amenity.replace(/([A-Z])/g, ' $1').trim()}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end gap-3">
                    <button
                      onClick={handleClear}
                      className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Clear
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-[#C19D69] hover:bg-[#B08D59] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C19D69]"
                    >
                      {editRoomId ? "Update Room" : "Add Room"}
                    </button>
                  </div>
                </div>

                {/* Room List */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">Room List</h2>
                    <span className="text-sm text-gray-500">{rooms.length} rooms</span>
                  </div>

                  {rooms.length === 0 ? (
                    <div className="text-center py-8 bg-gray-50 rounded-lg">
                      <p className="text-gray-500">No rooms found. Add your first room!</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {rooms.map((room) => (
                        <div key={room.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                          {room.image && (
                            <div className="h-48 overflow-hidden">
                              <img src={room.image} alt={room.title} className="w-full h-full object-cover" />
                            </div>
                          )}
                          <div className="p-4">
                            <div className="flex justify-between items-start">
                              <h3 className="font-bold text-lg text-gray-800">{room.title}</h3>
                              <span className="bg-[#C19D69] text-white text-xs px-2 py-1 rounded-full">
                                ${room.price}
                              </span>
                            </div>
                            <div className="mt-2 text-sm text-gray-600 space-y-1">
                              <p><span className="font-medium">Type:</span> {room.type}</p>
                              <p><span className="font-medium">Capacity:</span> {room.capacity}</p>
                              <p><span className="font-medium">Size:</span> {room.roomSize} sqft</p>
                              {room.amenities?.length > 0 && (
                                <p className="truncate">
                                  <span className="font-medium">Amenities:</span> {room.amenities.join(", ")}
                                </p>
                              )}
                            </div>
                            <div className="mt-4 flex gap-2">
                              <button
                                onClick={() => handleEditClick(room)}
                                className="flex-1 bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 transition-colors"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDelete(room.id)}
                                className="flex-1 bg-red-600 text-white px-3 py-1 rounded-md text-sm hover:bg-red-700 transition-colors"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}

            {/* Sections Tab Content */}
            {activeTab === "sections" && (
              <>
                {/* Section Form */}
                <div className="bg-[#f8f5f0] p-6 rounded-lg mb-8 border border-[#C19D69]">
                  <h2 className="text-xl font-semibold mb-4 text-[#C19D69]">
                    {editSectionId ? "Edit Section" : "Add New Section"}
                  </h2>
                  <div className="grid grid-cols-1 gap-4 mb-4 text-black">
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">Title</label>
                      <input
                        name="title"
                        placeholder="Section Title"
                        value={sectionForm.title}
                        onChange={handleSectionChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-[#C19D69] focus:border-[#C19D69]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">Description</label>
                      <textarea
                        name="description"
                        placeholder="Section Description"
                        value={sectionForm.description}
                        onChange={handleSectionChange}
                        rows={3}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-[#C19D69] focus:border-[#C19D69]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">Image URL</label>
                      <input
                        name="image"
                        placeholder="Image URL"
                        value={sectionForm.image}
                        onChange={handleSectionChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-[#C19D69] focus:border-[#C19D69]"
                      />
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="reverse"
                        checked={sectionForm.reverse}
                        onChange={handleSectionChange}
                        className="h-4 w-4 text-[#C19D69] focus:ring-[#C19D69] border-gray-300 rounded"
                      />
                      <label className="ml-2 block text-sm text-gray-700">Reverse Layout</label>
                    </div>
                  </div>
                  <div className="flex justify-end gap-3">
                    <button
                      onClick={handleSectionClear}
                      className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Clear
                    </button>
                    <button
                      onClick={handleSectionSubmit}
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-[#C19D69] hover:bg-[#B08D59] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C19D69]"
                    >
                      {editSectionId ? "Update Section" : "Add Section"}
                    </button>
                  </div>
                </div>

                {/* Section List */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">Information Sections</h2>
                    <span className="text-sm text-gray-500">{infoSections.length} sections</span>
                  </div>

                  {infoSections.length === 0 ? (
                    <div className="text-center py-8 bg-gray-50 rounded-lg">
                      <p className="text-gray-500">No sections found. Add your first section!</p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {infoSections.map((sec) => (
                        <div key={sec.id} className={`bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 ${sec.reverse ? "bg-gray-50" : ""}`}>
                          <div className={`flex flex-col ${sec.reverse ? "md:flex-row-reverse" : "md:flex-row"}`}>
                            {sec.image && (
                              <div className="md:w-1/3 h-48 md:h-auto">
                                <img src={sec.image} alt={sec.title} className="w-full h-full object-cover" />
                              </div>
                            )}
                            <div className="p-6 md:w-2/3">
                              <h3 className="text-xl font-bold text-gray-800 mb-2">{sec.title}</h3>
                              <p className="text-gray-600 mb-4">{sec.description}</p>
                              <div className="flex items-center text-sm text-gray-500 mb-4">
                                <span className={`inline-block w-3 h-3 rounded-full mr-2 ${sec.reverse ? "bg-[#C19D69]" : "bg-gray-400"}`}></span>
                                Layout: {sec.reverse ? "Reversed" : "Standard"}
                              </div>
                              <div className="flex gap-2">
                                <button
                                  onClick={() => handleEditSection(sec)}
                                  className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 transition-colors"
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={() => handleDeleteSection(sec.id)}
                                  className="bg-red-600 text-white px-3 py-1 rounded-md text-sm hover:bg-red-700 transition-colors"
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;