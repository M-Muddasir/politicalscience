"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { src: "/images/slide1.jpg", alt: "Department of Political Science" },
    // { src: "/images/slide2.jpg", alt: "GCU Lahore Campus" },
    { src: "/images/slide3.jpg", alt: "Political Science Education" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentSlide, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0 transition-transform ease-in-out duration-1000">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-opacity-40" />
          </div>
        ))}
      </div>
      
      {/* Content */}
      {/* <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-black px-4 z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Department of Political Science
          </h1>
          <p className="text-xl md:text-2xl mb-6">Government College University, Lahore</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/programs" className="bg-secondary hover:bg-secondary-dark text-black font-bold py-2 px-6 rounded-md transition duration-300">
              Explore Programs
            </Link>
            <Link href="/admissions" className="bg-transparent hover:bg-[#800000] hover:text-white border-2 border-white text-white hover:border-transparent font-bold py-2 px-6 rounded-md transition duration-300">
              Apply Now
            </Link>
          </div>
        </div>
      </div> */}
      
      {/* Indicators */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-black rounded-full p-2 backdrop-blur-sm z-10"
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-black rounded-full p-2 backdrop-blur-sm z-10"
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </section>
  );
};

export default HeroSection;
