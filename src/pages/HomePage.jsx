import React from "react";
import Navar from "../components/Navbar";
import Hero from "../components/Hero";
import { FaRegSmile, FaHeadset } from "react-icons/fa";
import Button from "../components/Button";
import ValueSection from "../components/ValueSection";
// Add these to your existing imports
import {
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaExpandArrowsAlt,
  FaCheckCircle,
  FaHome,
} from "react-icons/fa";
function HomePage() {
  const listings = [
    {
      id: 1,
      title: "Skyline Modern Studio",
      price: "Rs25,500/mo",
      location: "Port Louis",
      beds: 1,
      baths: 1,
      sqft: "750",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      title: "The Garden Penthouse",
      price: "Rs40,200/mo",
      location: "Tribeca",
      beds: 3,
      baths: 2,
      sqft: "1,800",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      title: "Serene Waterfront Villa",
      price: "Rs50,800/mo",
      location: "Grand Baie",
      beds: 2,
      baths: 2,
      sqft: "1,200",
      image:
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80",
    },
  ];
  return (
    <div>
      <Hero />
      <ValueSection />

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
              Featured Selection
            </span>

            <h2 className="text-4xl font-bold mt-2 text-slate-900">
              Properties on the Market
            </h2>
          </div>

          <button className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1">
            View All Listings
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {listings.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm">
                  NEW LISTING
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 group-hover:text-blue-600 transition">
                  {item.title}
                </h3>

                <div className="flex items-center gap-1 text-slate-500 text-sm mb-4">
                  <FaMapMarkerAlt size={14} /> {item.location}
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                  <div className="flex gap-4 text-slate-600 text-sm">
                    <span className="flex items-center gap-1">
                      <FaBed size={16} /> {item.beds}
                    </span>

                    <span className="flex items-center gap-1">
                      <FaBath size={16} /> {item.baths}
                    </span>

                    <span className="flex items-center gap-1">
                      <FaExpandArrowsAlt size={16} /> {item.sqft} sqft
                    </span>
                  </div>

                  <div className="text-blue-600 font-bold text-lg">
                    {item.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8 leading-tight">
              Why Choose Our <br /> Apartment Listings?
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Verified Landlords",
                  desc: "We manually vet every property owner to ensure your security.",
                },
                {
                  title: "No Hidden Fees",
                  desc: "Transparency is our priority. What you see is what you pay.",
                },
                {
                  title: "Instant Booking",
                  desc: "Schedule virtual or physical tours directly through our platform.",
                },
              ].map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="bg-blue-600/20 p-2 h-fit rounded-lg">
                    <FaCheckCircle className="text-blue-400 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{feature.title}</h4>
                    <p className="text-slate-400">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80"
              className="rounded-2xl h-64 w-full object-cover mt-8"
            />
            <img
              src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80"
              className="rounded-2xl h-64 w-full object-cover"
            />
          </div>
        </div>
      </section>
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
          © 2026 Suffolk Resort. All rights reserved. Built by ZIE
        </div>
      </footer>
    </div>
  );
}
export default HomePage;
