"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  FaBolt, 
  FaSearch,
  FaGift,
  FaDollarSign,
  FaWrench,
  FaCoins
} from "react-icons/fa";
import { SiCanva, SiSpotify, SiFigma } from "react-icons/si";

// App Icon Component
function AppIcon({ icon, bgColor, label }: { icon: React.ReactNode; bgColor: string; label?: string }) {
  return (
    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-lg ${bgColor} flex items-center justify-center shadow-md`} title={label}>
      {icon}
    </div>
  );
}

// Slide 1: Green background - Two cards
function Slide1() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
      {/* Organize your tools card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-xl p-6 md:p-8 shadow-lg"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">
          Organize your tools
        </h3>
        <p className="text-gray-600 mb-6 text-sm md:text-base">
          Keep your apps, subscriptions, and tech stack in one simple space.
        </p>
        <div className="relative h-48 md:h-56">
          {/* Folder icon with lightbulb */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-24 h-20 md:w-28 md:h-24 bg-white rounded-lg shadow-xl border-2 border-purple-200 flex items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💡</span>
                </div>
              </div>
              {/* Floating icons */}
              <motion.div
                className="absolute -top-4 -left-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <AppIcon
                  icon={<SiFigma className="w-6 h-6 text-white" />}
                  bgColor="bg-gradient-to-br from-blue-500 via-green-500 to-purple-500"
                />
              </motion.div>
              <motion.div
                className="absolute -top-4 -right-4"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              >
                <AppIcon
                  icon={<FaBolt className="w-6 h-6 text-white" />}
                  bgColor="bg-black"
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              >
                <AppIcon
                  icon={<SiCanva className="w-6 h-6 text-white" />}
                  bgColor="bg-blue-500"
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-md">
                  <div className="w-6 h-6 border-2 border-white rounded-full"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Discover what works card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-xl p-6 md:p-8 shadow-lg"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">
          Discover what works
        </h3>
        <p className="text-gray-600 mb-6 text-sm md:text-base">
          Find new tools tailored to your workflow, curated for freelancers and remote workers.
        </p>
        <div className="relative h-48 md:h-56">
          {/* Grid of icons with magnifying glass */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-2 relative z-10">
              <AppIcon icon={<div className="w-4 h-4 bg-purple-500 rounded-full"></div>} bgColor="bg-purple-100" />
              <AppIcon icon={<SiCanva className="w-6 h-6 text-white" />} bgColor="bg-blue-500" />
              <AppIcon icon={<div className="w-4 h-4 bg-blue-500 rounded-full"></div>} bgColor="bg-blue-100" />
              <AppIcon icon={<SiSpotify className="w-6 h-6 text-white" />} bgColor="bg-green-500" />
              <AppIcon icon={<div className="text-white font-bold">N</div>} bgColor="bg-black" />
              <AppIcon icon={<div className="w-4 h-4 bg-blue-500 rounded-full"></div>} bgColor="bg-blue-100" />
              <AppIcon icon={<div className="w-4 h-4 bg-cyan-500 rounded-full"></div>} bgColor="bg-cyan-100" />
              <AppIcon icon={<div className="text-white text-xs font-bold">za</div>} bgColor="bg-orange-500" />
              <AppIcon icon={<FaBolt className="w-4 h-4 text-white" />} bgColor="bg-purple-500" />
            </div>
            {/* Magnifying glass */}
            <motion.div
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative">
                <div className="w-20 h-20 md:w-24 md:h-24 border-4 border-gray-300 rounded-full bg-white/50 backdrop-blur-sm"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 md:w-8 md:h-8 bg-amber-600 rounded-sm transform rotate-45 translate-x-2 translate-y-2"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Slide 2: Pink background - Three cards
function Slide2() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
      {/* Organize your tools */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-xl p-6 md:p-8 shadow-lg"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">
          Organize your tools
        </h3>
        <p className="text-gray-600 mb-6 text-sm md:text-base">
          Keep your apps, subscriptions, and tech stack in one simple space.
        </p>
        <div className="relative h-40 md:h-48">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-purple-300 to-pink-300 rounded-lg shadow-xl flex items-center justify-center">
              <span className="text-4xl">💡</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Discover what works */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-xl p-6 md:p-8 shadow-lg"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">
          Discover what works
        </h3>
        <p className="text-gray-600 mb-6 text-sm md:text-base">
          Find new tools tailored to your workflow, curated for freelancers and remote workers.
        </p>
        <div className="relative h-40 md:h-48">
          <div className="grid grid-cols-3 gap-2">
            <AppIcon icon={<div className="w-4 h-4 bg-purple-500 rounded-full"></div>} bgColor="bg-purple-100" />
            <AppIcon icon={<SiCanva className="w-6 h-6 text-white" />} bgColor="bg-blue-500" />
            <AppIcon icon={<SiSpotify className="w-6 h-6 text-white" />} bgColor="bg-green-500" />
            <AppIcon icon={<div className="text-white font-bold">N</div>} bgColor="bg-black" />
            <AppIcon icon={<div className="w-4 h-4 bg-cyan-500 rounded-full"></div>} bgColor="bg-cyan-100" />
            <AppIcon icon={<div className="text-white text-xs font-bold">za</div>} bgColor="bg-orange-500" />
          </div>
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <div className="w-16 h-16 border-3 border-gray-400 rounded-full bg-white/50"></div>
          </div>
        </div>
      </motion.div>

      {/* Get Rewarded */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white rounded-xl p-6 md:p-8 shadow-lg"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">
          Get Rewarded
        </h3>
        <p className="text-gray-600 mb-6 text-sm md:text-base">
          Earn perks, gift cards and cashback just for staying productive.
        </p>
        <div className="grid grid-cols-3 gap-2">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-500 rounded-lg flex items-center justify-center">
            <FaGift className="w-6 h-6 text-white" />
          </div>
          <div className="w-12 h-12 md:w-14 md:h-14 bg-yellow-500 rounded-lg flex items-center justify-center">
            <FaWrench className="w-6 h-6 text-white" />
          </div>
          <div className="w-12 h-12 md:w-14 md:h-14 bg-green-500 rounded-lg flex items-center justify-center">
            <FaDollarSign className="w-6 h-6 text-white" />
          </div>
          <div className="w-12 h-12 md:w-14 md:h-14 bg-green-500 rounded-lg flex items-center justify-center">
            <FaDollarSign className="w-6 h-6 text-white" />
          </div>
          <div className="w-12 h-12 md:w-14 md:h-14 bg-pink-500 rounded-lg flex items-center justify-center">
            <div className="text-white text-xs font-bold">50</div>
          </div>
          <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-500 rounded-lg flex items-center justify-center">
            <FaGift className="w-6 h-6 text-white" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Slide 3: Purple background - Two sections
function Slide3() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
      {/* Discover what works */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-purple-100/50 rounded-xl p-6 md:p-8 backdrop-blur-sm border border-purple-200"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">
          Discover what works
        </h3>
        <p className="text-gray-600 mb-6 text-sm md:text-base">
          Find new tools tailored to your workflow, curated for freelancers and remote workers.
        </p>
        <div className="relative h-48 md:h-56 bg-white/30 rounded-lg p-4">
          <div className="grid grid-cols-3 gap-2">
            <AppIcon icon={<div className="w-4 h-4 bg-purple-500 rounded-full"></div>} bgColor="bg-purple-200" />
            <AppIcon icon={<SiCanva className="w-6 h-6 text-white" />} bgColor="bg-blue-500" />
            <AppIcon icon={<SiSpotify className="w-6 h-6 text-white" />} bgColor="bg-green-500" />
            <AppIcon icon={<div className="text-white font-bold">N</div>} bgColor="bg-black" />
            <AppIcon icon={<FaBolt className="w-4 h-4 text-white" />} bgColor="bg-purple-500" />
            <AppIcon icon={<div className="text-white text-xs font-bold">za</div>} bgColor="bg-orange-500" />
            <AppIcon icon={<div className="w-4 h-4 bg-cyan-500 rounded-full"></div>} bgColor="bg-cyan-200" />
            <AppIcon icon={<div className="w-4 h-4 bg-purple-500 rounded-full"></div>} bgColor="bg-purple-200" />
            <AppIcon icon={<div className="w-4 h-4 bg-white rounded"></div>} bgColor="bg-purple-500" />
          </div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <div className="w-20 h-20 md:w-24 md:h-24 border-4 border-gray-400 rounded-full bg-white/50"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 md:w-8 md:h-8 bg-amber-700 rounded-sm transform rotate-45 translate-x-2 translate-y-2"></div>
          </div>
        </div>
      </motion.div>

      {/* Get Rewarded */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-xl p-6 md:p-8 shadow-lg"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">
          Get Rewarded
        </h3>
        <p className="text-gray-600 mb-6 text-sm md:text-base">
          Earn perks, gift cards and cashback just for staying productive.
        </p>
        <div className="grid grid-cols-3 gap-3">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-500 rounded-lg flex items-center justify-center shadow-md">
            <FaGift className="w-8 h-8 text-white" />
          </div>
          <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow-500 rounded-lg flex items-center justify-center shadow-md">
            <FaWrench className="w-8 h-8 text-white" />
          </div>
          <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500 rounded-lg flex items-center justify-center shadow-md">
            <FaDollarSign className="w-8 h-8 text-white" />
          </div>
          <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500 rounded-lg flex items-center justify-center shadow-md">
            <FaDollarSign className="w-8 h-8 text-white" />
          </div>
          <div className="w-16 h-16 md:w-20 md:h-20 bg-pink-500 rounded-lg flex flex-col items-center justify-center shadow-md">
            <span className="text-white text-lg font-bold">50</span>
            <span className="text-white text-xs">FlowCoins</span>
          </div>
          <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-500 rounded-lg flex items-center justify-center shadow-md">
            <FaGift className="w-8 h-8 text-white" />
          </div>
          <div className="w-16 h-16 md:w-20 md:h-20 bg-pink-500 rounded-lg flex flex-col items-center justify-center shadow-md">
            <span className="text-white text-lg font-bold">50</span>
            <span className="text-white text-xs">FlowCoins</span>
          </div>
          <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow-500 rounded-lg flex items-center justify-center shadow-md">
            <FaWrench className="w-8 h-8 text-white" />
          </div>
          <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500 rounded-lg flex items-center justify-center shadow-md">
            <FaDollarSign className="w-8 h-8 text-white" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const slides = [
  { id: 0, component: Slide1, bgColor: "bg-green-100" },
  { id: 1, component: Slide2, bgColor: "bg-pink-100" },
  { id: 2, component: Slide3, bgColor: "bg-purple-100" },
];

export function FeaturesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Auto-slide functionality (pauses when dragging)
  useEffect(() => {
    if (isDragging) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isDragging]);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (event: any, info: any) => {
    setIsDragging(false);
    const threshold = 50;
    if (info.offset.x > threshold && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else if (info.offset.x < -threshold && currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden">
      {/* Background with transition */}
      <motion.div
        key={currentSlide}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`absolute inset-0 ${slides[currentSlide].bgColor}`}
      />

      <div className="relative z-10 px-4">
        {/* Headline */}
        <motion.h2
          key={`headline-${currentSlide}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-16 text-black uppercase"
        >
          Everything in one place
        </motion.h2>

        {/* Carousel Container */}
        <div className="relative">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragStart={handleDragStart}
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
              >
                <CurrentSlideComponent />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center gap-2 mt-8 md:mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="focus:outline-none"
              aria-label={`Go to slide ${index + 1}`}
            >
              <motion.div
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                  index === currentSlide ? "bg-black" : "bg-gray-400"
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

