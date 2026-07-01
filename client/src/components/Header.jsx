import { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaSearch,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { name: "होम", path: "/" },
  { name: "हमारे बारे में", path: "/about" },
  { name: "सेवाएं", path: "/services" },
  { name: "गैलरी", path: "/gallery" },
  { name: "ब्लॉग", path: "/blog" },
  { name: "संपर्क", path: "/contact" },
];

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const [showHeader, setShowHeader] = useState(true);

  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide Header On Scroll Down
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show Header On Scroll Up
      if (currentScrollY < lastScrollY) {
        setShowHeader(true);
      }

      // Hide Header On Scroll Down
      else if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      }

      // Always Show At Top
      if (currentScrollY < 80) {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          showHeader
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        {/* Top Bar */}
        <div className="bg-[#021B49]/95 backdrop-blur-md text-white border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between h-14">
              
              {/* Translate Button */}
              <button className="bg-yellow-500 hover:bg-yellow-400 transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full flex items-center gap-2 text-black font-medium shadow-lg hover:shadow-yellow-400/40">
                <FaGlobe />
                Translate
              </button>

              {/* Desktop Contact */}
              <div className="hidden lg:flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2 hover:text-yellow-400 transition">
                  <FaPhoneAlt className="text-yellow-400" />
                  <span>+91 7470567335</span>
                </div>

                <div className="flex items-center gap-2 hover:text-yellow-400 transition">
                  <FaEnvelope className="text-yellow-400" />
                  <span>7405673az@gmail.com</span>
                </div>
              </div>

              {/* Mobile Icons */}
              <div className="flex lg:hidden items-center gap-4 text-lg">
                <FaPhoneAlt />
                <FaEnvelope />
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="bg-[#032766]/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between h-20">

              {/* Logo */}
              <Link to="/" className="flex items-center group">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-yellow-400 transition duration-500 group-hover:scale-105">
                  Deepak
                  <span className="text-white">ji</span>
                </h1>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-10">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `relative text-lg font-medium transition duration-300 ${
                        isActive
                          ? "text-yellow-400"
                          : "text-white hover:text-yellow-300"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span className="relative">
                          {link.name}

                          {/* Animated Underline */}
                          <span
                            className={`absolute left-0 -bottom-2 h-[3px] bg-yellow-400 rounded-full transition-all duration-500 ${
                              isActive
                                ? "w-full"
                                : "w-0 group-hover:w-full"
                            }`}
                          ></span>
                        </span>
                      </>
                    )}
                  </NavLink>
                ))}
              </nav>

              {/* Right Icons */}
              <div className="hidden lg:flex items-center gap-6 text-white text-2xl">
                
               

                {/* Book Button */}
                <Link to='/booking'>
                <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold transition duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,197,66,0.5)]">
                  पूजा बुक करें
                </button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="lg:hidden text-white text-3xl transition duration-300 hover:text-yellow-400"
              >
                {mobileMenu ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-[80%] bg-[#021B49] z-[60] transform transition-transform duration-500 lg:hidden ${
          mobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-5 border-b border-blue-800">
          <h2 className="text-3xl font-bold text-yellow-400">
            Deepak
            <span className="text-white">ji</span>
          </h2>

          <button
            onClick={() => setMobileMenu(false)}
            className="text-white text-3xl hover:text-yellow-400 transition"
          >
            <FaTimes />
          </button>
        </div>

        {/* Mobile Nav */}
        <nav className="flex flex-col p-6 gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenu(false)}
              className={({ isActive }) =>
                `text-lg font-medium transition duration-300 ${
                  isActive
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-300"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Bottom Contact */}
        <div className="absolute bottom-10 left-6 text-white space-y-4 text-sm">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-yellow-400" />
            +91 7470567335
          </div>

          <div className="flex items-center gap-2">
            <FaEnvelope className="text-yellow-400" />
            7405673az@gmail.com
          </div>
        </div>
      </div>

      {/* Overlay */}
      {mobileMenu && (
        <div
          onClick={() => setMobileMenu(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
        ></div>
      )}
    </>
  );
}

export default Header;