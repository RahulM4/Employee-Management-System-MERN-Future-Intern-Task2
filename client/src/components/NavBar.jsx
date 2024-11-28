import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/addnew");
  };
  

  return (
    <nav className="bg-black">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="text-xl font-bold text-white">
          <a href="/" className="hover:text-cyan-400">
            Home
          </a>
        </div>

        {/* Menu Button for Mobile */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          <a
            href="/dashboard"
            className="px-4 py-2 text-white rounded-lg hover:bg-cyan-500"
          >
            Dashboard
          </a>
          <button
            onClick={handleRegister}
            className="px-4 py-2 text-white rounded-lg hover:bg-cyan-500"
          >
            Add New Employee
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col px-4 py-4 space-y-2 bg-gray-900">
            <a
              href="/dashboard"
              className="px-4 py-2 text-white rounded-lg hover:bg-cyan-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </a>
            <button
              onClick={() => {
                handleRegister();
                setIsMenuOpen(false);
              }}
              className="px-4 py-2 text-white rounded-lg hover:bg-cyan-500"
            >
              Add New Employee
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
