// import React from "react";
// import { Link } from "react-router-dom";
// import Button from "./Button";
// const Navbar = () => {
//   return (
//     <nav className="flex items-center justify-between py-4 px-[5%] ">
//       {/* ===== THE LOGO ===== ARJUNA WHEN YOU GET THE ACTUAL LOGO REPLACE IT HERE ======= */}
//       <div>
//         <Link to="/">
//           <h1 className="text-[#F3481A]">Suffolk Resort</h1>
//         </Link>
//       </div>
//       <div>
//         <ul className="flex items-center gap-4">
//           <li className="font-bold text-base cursor-pointer hover:text-[#F3481A]">
//             About
//           </li>
//           <li className="font-bold text-base cursor-pointer hover:text-[#F3481A]">
//             Places
//           </li>
//           <li className="font-bold text-base cursor-pointer hover:text-[#F3481A]">
//             Units
//           </li>
//           <li className="font-bold text-base cursor-pointer hover:text-[#F3481A]">
//             Rentals
//           </li>
//           <li className="font-bold text-base cursor-pointer hover:text-[#F3481A]">
//             Gallery
//           </li>
//           <li className="font-bold text-base cursor-pointer hover:text-[#F3481A]">
//             Contact
//           </li>
//         </ul>
//       </div>
//       <div>
//         <Button title="Booking" />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiUser, FiBell, FiSearch } from "react-icons/fi"; // Clean, professional icons

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Temporary state to toggle UI for testing

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Places", path: "/places" },
    { name: "Units", path: "/units" },
    { name: "Rentals", path: "/rentals" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full h-20 bg-white/95 backdrop-blur-md z-[100] border-b border-slate-100 flex items-center justify-between px-[6%] transition-all">
      {/* Brand Logo */}
      <Link to="/" className="flex flex-col">
        <h1 className="text-xl font-bold text-accent tracking-tighter uppercase leading-none">
          Suffolk{" "}
          <span className="block text-xs font-light tracking-[0.3em] text-slate-400">
            Resort
          </span>
        </h1>
      </Link>

      {/* Desktop Navigation Links */}
      <ul className="hidden lg:flex items-center gap-8 text-slate-600 font-medium">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className="hover:text-accent transition-colors duration-300 text-sm uppercase tracking-wide"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right Side: Auth & Icons */}
      <div className="flex items-center gap-3 md:gap-6">
        {/* Functional Icons */}
        <div className="hidden sm:flex items-center gap-4 text-slate-500 border-r border-slate-200 pr-4">
          <button className="hover:text-accent transition-colors p-2 rounded-full hover:bg-slate-50">
            <FiSearch size={20} />
          </button>
          <div className="relative">
            <button className="hover:text-accent transition-colors p-2 rounded-full hover:bg-slate-50">
              <FiBell size={20} />
            </button>
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </div>
        </div>

        {/* Authentication Section */}
        {!isLoggedIn ? (
          <div className="flex items-center gap-2">
            <Link
              to="/signin"
              className="hidden md:block px-4 py-2 text-sm font-semibold text-slate-700 hover:text-accent transition"
            >
              Sign In
            </Link>
            <Link to="/signup">
              <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-accent transition-all shadow-lg shadow-slate-200">
                Sign Up
              </button>
            </Link>
          </div>
        ) : (
          <Link to="/profile" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-accent group-hover:text-white transition-all overflow-hidden border border-slate-200">
              <FiUser size={20} />
            </div>
          </Link>
        )}

        {/* Mobile Menu Toggle */}
        <div
          className="lg:hidden cursor-pointer ml-2"
          onClick={() => setNav(!nav)}
        >
          {nav ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`${nav ? "translate-x-0" : "translate-x-full"} fixed top-0 right-0 w-[280px] h-screen bg-white shadow-2xl flex flex-col p-8 transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex flex-col gap-6 mt-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setNav(false)}
              className="text-lg font-medium text-slate-800 border-b border-slate-50 pb-2"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-6 flex flex-col gap-4">
            <Link
              to="/signin"
              onClick={() => setNav(false)}
              className="text-center py-3 border border-slate-200 rounded-xl font-semibold"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              onClick={() => setNav(false)}
              className="text-center py-3 bg-slate-900 text-white rounded-xl font-semibold"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
