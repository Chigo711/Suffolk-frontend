import React, { useState } from "react";
import heroImg1 from "../assets/hero-img1.png";
import heroImg2 from "../assets/hero-img2.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Hero() {
  // SLIDERS FUNCTIONALITY
  const slides = [
    { id: 1, text: "Welcome to Suffolk Resort", bg: heroImg1 },
    { id: 2, text: "View the world", bg: heroImg2 },
  ];
  const [current, setCurrent] = useState(0);
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };
  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0"}`}
          style={{
            backgroundImage: `url(${slide.bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-3xl font-bold mb-2">{slide.text}</h1>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white px-3 py-1 "
      >
        <FaAngleLeft size={45} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white px-3 py-1 "
      >
        <FaAngleRight size={45} />
      </button>

      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Hero;
