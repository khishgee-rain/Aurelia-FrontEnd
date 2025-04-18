import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Facilities from "./components/Facilities";
import Navbar from "./components/NavBar";
import Rooms from "./components/Rooms.jsx";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import RoomDetail from "./components/SingleRoomDetail.jsx";
import AlcoholSection from "./components/AlcoholSection";
import FoodSection from "./components/FoodSection";
import Orders from "./components/Orders.jsx";
import { CartProvider } from "./components/CartContext.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import AuthProvider from "./AuthContext";
import AdminPanel from "./components/AdminPanel.jsx";
import FaqPage from "./components/FaqPage";
import LocationSection from "./components/LocationSection.jsx";
import AboutUs from "./components/AboutUs.jsx";


import "./App.css";
import GymSection from "./components/GymSection.jsx";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="font-sans bg-black text-white min-h-screen flex flex-col">
            {/* Navbar always on top */}
            <Navbar />

            {/* Main Content grows to fill space */}
            <div className="flex-grow">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <HeroSection />
                      <InfoSection />
                      <Testimonials />
                    </>
                  }
                />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/location" element={<LocationSection />} />  
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/facilities" element={<Facilities />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route
                  path="/login"
                  element={
                    <ProtectedRoute requiresAuth={false}>
                      <LoginPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/signup"
                  element={
                    <ProtectedRoute requiresAuth={false}>
                      <SignUpPage />
                    </ProtectedRoute>
                  }
                />
                <Route path="/rooms/:id" element={<RoomDetail />} />
                <Route path="/food" element={<FoodSection />} />
                <Route path="/bar" element={<AlcoholSection />} />
                <Route path="/gym" element={<GymSection />} />
                <Route
                  path="/orders"
                  element={
                    <ProtectedRoute>
                      <Orders />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/panel"
                  element={
                    <ProtectedRoute adminOnly={true}>
                      <AdminPanel />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </div>

            {/* Footer always at the bottom */}
            <Footer />
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
