import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../photos/logo.png";
import { AuthContext } from "../AuthContext";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const { isLoggedIn, logout, ordersCount, userRole } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const isActive = (path) =>
    location.pathname === path
      ? "text-[#c29e66] font-semibold"
      : "hover:text-[#c29e66] transition";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close sidebar when clicking on a link
  const closeSidebar = () => setMenuOpen(false);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.sidebar') && !event.target.closest('.menu-button')) {
        closeSidebar();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
        } text-white`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 lg:px-10">
          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="Aurelia Hotel"
              className="w-[200px] h-[120px] rounded-b-[30px]"
            />
          </Link>

          {/* Burger Icon */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMenu} 
              aria-label="Toggle menu"
              className="menu-button z-50"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex lg:flex-row lg:items-center lg:space-x-8 lg:ml-auto">
            <li className={isActive("/")}>
              <Link to="/">Home</Link>
            </li>
            <li className={isActive("/facilities")}>
              <Link to="/facilities">Facilities</Link>
            </li>
            <li className={isActive("/rooms")}>
              <Link to="/rooms">Rooms</Link>
            </li>

            {!isLoggedIn && (
              <>
                <li className={isActive("/login")}>
                  <Link to="/login">Login</Link>
                </li>
                <li className={isActive("/signup")}>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </>
            )}

            {isLoggedIn && (
              <>
                <li className={isActive("/orders")}>
                  <Link to="/orders" className="flex items-center justify-center gap-1">
                    Orders
                    {ordersCount > 0 && (
                      <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {ordersCount}
                      </span>
                    )}
                  </Link>
                </li>
                <li>
                  <button
                    onClick={logout}
                    className="hover:text-yellow-300 transition"
                  >
                    Logout
                  </button>
                </li>
                {userRole === "admin" && (
                  <li className={isActive("/admin/panel")}>
                    <Link to="/admin/panel">Admin Panel</Link>
                  </li>
                )}
              </>
            )}
          </ul>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-black/95 backdrop-blur-lg z-40 transform transition-transform duration-300 ease-in-out shadow-2xl sidebar ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="flex flex-col h-full justify-center items-center text-center px-6 space-y-6">

          <Link
            to="/"
            onClick={closeSidebar}
            className={`text-xl ${isActive("/")} py-2 border-b border-gray-700`}
          >
            Home
          </Link>
          <Link
            to="/facilities"
            onClick={closeSidebar}
            className={`text-xl ${isActive("/facilities")} py-2 border-b border-gray-700`}
          >
            Facilities
          </Link>
          <Link
            to="/rooms"
            onClick={closeSidebar}
            className={`text-xl ${isActive("/rooms")} py-2 border-b border-gray-700`}
          >
            Rooms
          </Link>

          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                onClick={closeSidebar}
                className={`text-xl ${isActive("/login")} py-2 border-b border-gray-700`}
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={closeSidebar}
                className={`text-xl ${isActive("/signup")} py-2 border-b border-gray-700`}
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/orders"
                onClick={closeSidebar}
                className={`text-xl ${isActive("/orders")} py-2 border-b border-gray-700 flex items-center`}
              >
                Orders
                {ordersCount > 0 && (
                  <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs ml-2">
                    {ordersCount}
                  </span>
                )}
              </Link>
              {userRole === "admin" && (
                <Link
                  to="/admin/panel"
                  onClick={closeSidebar}
                  className={`text-xl ${isActive("/admin/panel")} py-2 border-b border-gray-700`}
                >
                  Admin Panel
                </Link>
              )}
              <button
                onClick={() => {
                  logout();
                  closeSidebar();
                }}
                className="text-xl text-left hover:text-yellow-300 transition py-2 border-b border-gray-700"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={closeSidebar}></div>
      )}
    </>
  );
};

export default Navbar;