import React from "react";
import { FaHome } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-blue-600 p-2 rounded-lg">
              <FaHome className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Suffolk Resort
            </span>
          </div>
          <p className="text-slate-500 max-w-sm">
            Making urban living accessible and luxurious. Find your next home
            across major cities in Africa and beyond.
          </p>
        </div>
        <div>
          <h5 className="font-bold mb-6">Platform</h5>
          <ul className="space-y-4 text-slate-500">
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Browse Homes
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Rent an Apartment
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-6">Company</h5>
          <ul className="space-y-4 text-slate-500">
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-slate-400 text-sm border-t border-slate-50 pt-8">
        © 2026 Suffolk Resort. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
