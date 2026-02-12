import React from "react";
import { FaRegSmile, FaHeadset, FaShieldAlt } from "react-icons/fa"; // Added a shield icon
import Button from "../components/Button";

function ValueSection() {
  const features = [
    {
      icon: <FaRegSmile size={25} />,
      title: "Convenient & Easy",
      desc: "Our streamlined booking process ensures you find your dream stay in just a few clicks without the typical paperwork stress.",
    },
    {
      icon: <FaHeadset size={25} />,
      title: "24/7 Concierge Service",
      desc: "Experience world-class hospitality with our dedicated support team ready to assist you at any hour of the day or night.",
    },
    {
      icon: <FaShieldAlt size={25} />,
      title: "Verified & Secure",
      desc: "Every listing at Suffolk Resort undergoes a rigorous 50-point inspection to ensure quality, safety, and ultimate comfort.",
    },
  ];

  return (
    <section className="min-h-[70vh] w-full bg-navi font-poppins text-white py-16 px-[8%] flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Left Content Column */}
      <div className="flex flex-col gap-10 lg:w-1/2">
        <div className="space-y-4">
          <span className="text-accent font-bold uppercase tracking-widest text-sm">
            Why Suffolk?
          </span>
          <h1 className="text-white text-3xl md:text-[2.5rem] font-bold leading-tight">
            Find Your Perfect Home <br /> Away From Home
          </h1>
        </div>

        {/* Features List */}
        <div className="flex flex-col gap-8">
          {features.map((item, index) => (
            <div key={index} className="flex items-start gap-5 group">
              <div className="h-14 w-14 shrink-0 flex items-center justify-center rounded-2xl bg-[#ffffff15] text-white group-hover:bg-accent group-hover:scale-110 transition-all duration-300 shadow-xl">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h2 className="text-white font-semibold text-xl tracking-wide">
                  {item.title}
                </h2>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Button
          className="bg-accent py-4 px-10 rounded-xl mt-4 w-fit font-bold hover:shadow-[0_0_20px_rgba(217,119,6,0.4)] transition-shadow"
          title="View Homes"
        />
      </div>

      {/* Right Image Column - Replaces "How are you" */}
      <div className="lg:w-1/2 w-full relative group">
        <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl group-hover:bg-accent/30 transition-all"></div>
        <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
            alt="Luxury Interior"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          {/* Subtle Overlay Card */}
          <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <p className="italic text-slate-200">
              "The attention to detail at Suffolk is unmatched. I found my
              sanctuary here."
            </p>
            <p className="mt-2 font-bold text-accent">— Chigozie Emmanuel</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValueSection;
