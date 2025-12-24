"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

interface Testimonial {
  text: string;
  rating: number;
  name: string;
  role: string;
  bgColor: string;
  emojis?: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Flowvahub makes finding tools effortless. Instead of wasting hours jumping between sites, I just open Discover Tools everything's clear, organized, and right there. Feels less like searching, more like unlocking possibilities.",
    rating: 4,
    name: "Ummaratu M.",
    role: "Freelancer & Virtual Assistant",
    bgColor: "bg-blue-100",
    emojis: "☕💜",
  },
  {
    text: "Flowvahub is my new sidekick. It keeps my apps in line, my subs in check, and still finds a way to pay me in rewards. If it could make coffee, I'd marry it",
    rating: 5,
    name: "Adewale O.",
    role: "Freelancer & Digital Creator",
    bgColor: "bg-yellow-100",
  },
  {
    text: "Didn't even realise how much I was drowning in scattered tools until I saw Flowvahub. The idea of getting rewarded just for organizing my stack? That's the kind of motivation I need.",
    rating: 4,
    name: "Lois E.",
    role: "Social media manager",
    bgColor: "bg-pink-100",
  },
  {
    text: "The ultimate dashboard for freelancers and techies. Flowvahub is nothing but amazing!",
    rating: 5,
    name: "Stella R.",
    role: "Trainee at Digital Witch Community",
    bgColor: "bg-green-100",
  },
  {
    text: "My favorite feature is subscription management – it helps me avoid wasting money and makes sure every penny counts.",
    rating: 5,
    name: "Uchechukwu P.",
    role: "Freelancer",
    bgColor: "bg-cyan-100",
  },
];

// Group testimonials into slides of 3
const slides = [
  [testimonials[0], testimonials[1], testimonials[2]], // Slide 1: Blue, Yellow, Pink
  [testimonials[1], testimonials[2], testimonials[3]], // Slide 2: Yellow, Pink, Green
  [testimonials[2], testimonials[3], testimonials[4]], // Slide 3: Pink, Green, Cyan
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-black fill-black" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export function TestimonialsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // No auto-slide - only manual dragging

  const handleDragEnd = (event: any, info: any) => {
    setIsDragging(false);
    const threshold = 50;

    // Drag right (positive offset) → next slide
    // Drag left (negative offset) → previous slide
    if (info.offset.x > threshold && currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else if (info.offset.x < -threshold && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentTestimonials = slides[currentSlide];

  return (
    <section className="w-full py-16 md:py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-16 text-black uppercase"
        >
          Join a Growing Community
        </motion.h2>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            className="cursor-grab active:cursor-grabbing"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
              >
                {currentTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={`${currentSlide}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`${testimonial.bgColor} rounded-xl p-6 md:p-8 shadow-lg flex flex-col`}
                  >
                    <p className="text-black text-sm md:text-base mb-4 leading-relaxed">
                      {testimonial.text}
                    </p>
                    {testimonial.emojis && (
                      <div className="mb-4 text-lg">{testimonial.emojis}</div>
                    )}
                    <div className="mb-4">
                      <StarRating rating={testimonial.rating} />
                    </div>
                    <div className="mt-auto">
                      <p className="font-bold text-black text-base md:text-lg mb-1">
                        {testimonial.name}
                      </p>
                      <p className="text-black text-sm md:text-base">
                        {testimonial.role}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center items-center gap-2 mt-8 md:mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="focus:outline-none"
              aria-label={`Go to slide ${index + 1}`}
            >
              <motion.div
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                  index === currentSlide ? "bg-black" : "bg-gray-300"
                }`}
                animate={{
                  scale: index === currentSlide ? 1.2 : 1,
                }}
                transition={{ duration: 0.2 }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

