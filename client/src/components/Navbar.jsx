import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        {/* Brand Name */}
        <a href="#" className="text-2xl font-bold text-gray-800">
          MyApp
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/home" className="text-gray-700 hover:text-blue-600 transition">
            Home
          </Link>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">
            Features
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">
            Pricing
          </a>
        </div>

        {/* User Profile + Mobile Menu */}
        <div className="flex items-center space-x-4">
          <FaUserCircle className="text-3xl text-gray-600 cursor-pointer hover:text-blue-600" />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl text-gray-600 hover:text-blue-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <a href="#" className="block py-2 px-6 text-gray-700 hover:bg-gray-100">
            Home
          </a>
          <a href="#" className="block py-2 px-6 text-gray-700 hover:bg-gray-100">
            Features
          </a>
          <a href="#" className="block py-2 px-6 text-gray-700 hover:bg-gray-100">
            Pricing
          </a>
        </div>
      )}
    </nav>
  );
}
