"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash, FaPause, FaPlay } from "react-icons/fa";
import { FaApple, FaGoogle } from "react-icons/fa";
import { SiNotion, SiSlack, SiCanva, SiAsana, SiMiro, SiClickup } from "react-icons/si";

// Custom X (Twitter) Icon
function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// FlowCoin Badge Component
function FlowCoinBadge({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-pink-400 via-purple-500 to-pink-500 p-1 shadow-lg"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-sm flex flex-col items-center justify-center border border-white/20">
        <span className="text-lg md:text-xl font-bold text-pink-500">50</span>
        <span className="text-xs text-purple-600 font-medium">FlowCoins</span>
      </div>
    </motion.div>
  );
}

// Slide 1: Sign up & Connect
function Slide1() {
  const [showPassword, setShowPassword] = useState(false);
  const [gridCols, setGridCols] = useState('1fr');

  useEffect(() => {
    const updateGrid = () => {
      if (window.innerWidth >= 768) {
        setGridCols('70% 15% 15%');
      } else {
        setGridCols('1fr');
      }
    };
    updateGrid();
    window.addEventListener('resize', updateGrid);
    return () => window.removeEventListener('resize', updateGrid);
  }, []);

  return (
    <div 
      className="grid gap-4 md:gap-6 max-w-7xl mx-auto"
      style={{ gridTemplateColumns: gridCols }}
    >
      {/* Card 1 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-purple-100 rounded-xl p-6 md:p-8 shadow-lg"
      >
        <div className="text-7xl md:text-8xl font-bold text-black mb-4">1</div>
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">
            Sign up &
          </h3>
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Connect
          </h3>
          <p className="text-gray-600 text-sm md:text-base">
            Set up your workspace in minutes
          </p>
        </div>
        {/* Mobile Phone Mockup */}
        <div className="relative mt-6">
          <div className="w-64 mx-auto bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
            <div className="bg-white rounded-[2rem] overflow-hidden">
              {/* Phone Header */}
              <div className="bg-white h-12 flex items-center justify-center border-b">
                <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
              </div>
              {/* Phone Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-black mb-6 text-center">
                  Let's get you started.
                </h4>
                <div className="space-y-4 mb-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm"
                      placeholder="Enter your email"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm pr-10"
                        placeholder="Enter your password"
                        readOnly
                      />
                      <button
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                      >
                        {showPassword ? (
                          <FaEyeSlash className="w-5 h-5" />
                        ) : (
                          <FaEye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-gray-800 to-black text-white py-3 rounded-lg font-semibold mb-4">
                  Continue
                </button>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex-1 h-px bg-gray-300"></div>
                  <span className="text-xs text-gray-500">OR</span>
                  <div className="flex-1 h-px bg-gray-300"></div>
                </div>
                <div className="space-y-3">
                  <button className="w-full border border-gray-300 rounded-lg py-3 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors">
                    <FaGoogle className="w-5 h-5 text-blue-600" />
                    <span className="font-medium text-black">
                      Continue with Google
                    </span>
                  </button>
                  <button className="w-full border border-gray-300 rounded-lg py-3 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors">
                    <FaApple className="w-5 h-5 text-black" />
                    <span className="font-medium text-black">
                      Continue with Apple
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Card 2 - Empty */}
      <div className="bg-purple-100 rounded-xl p-6 md:p-8 shadow-lg opacity-50">
        <div className="text-7xl md:text-8xl font-bold text-black mb-4">2</div>
        <h3 className="text-2xl md:text-3xl font-bold text-black">
          Organize & Track
        </h3>
      </div>

      {/* Card 3 - Empty */}
      <div className="bg-purple-100 rounded-xl p-6 md:p-8 shadow-lg opacity-50">
        <div className="text-7xl md:text-8xl font-bold text-black mb-4">3</div>
        <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">
          Earn &
        </h3>
        <h3 className="text-2xl md:text-3xl font-bold text-black">
          Enjoy
        </h3>
      </div>
    </div>
  );
}

// Slide 2: Organize & Track
function Slide2() {
  const [gridCols, setGridCols] = useState('1fr');

  useEffect(() => {
    const updateGrid = () => {
      if (window.innerWidth >= 768) {
        setGridCols('15% 70% 15%');
      } else {
        setGridCols('1fr');
      }
    };
    updateGrid();
    window.addEventListener('resize', updateGrid);
    return () => window.removeEventListener('resize', updateGrid);
  }, []);

  return (
    <div 
      className="grid gap-4 md:gap-6 max-w-7xl mx-auto"
      style={{ gridTemplateColumns: gridCols }}
    >
      {/* Card 1 - Empty */}
      <div className="bg-purple-100 rounded-xl p-6 md:p-8 shadow-lg opacity-50">
        <div className="text-7xl md:text-8xl font-bold text-black mb-4">1</div>
        <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">
          Sign up &
        </h3>
        <h3 className="text-2xl md:text-3xl font-bold text-black">
          Connect
        </h3>
      </div>

      {/* Card 2 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-purple-100 rounded-xl p-6 md:p-8 shadow-lg"
      >
        <div className="text-7xl md:text-8xl font-bold text-black mb-4">2</div>
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">
            Organize & Track
          </h3>
          <p className="text-gray-600 text-sm md:text-base mb-4">
            Add your tools, subscriptions, and tasks.
          </p>
        </div>
        {/* Stacked Cards */}
        <div className="relative mt-6 space-y-4">
          {/* Top Card */}
          <motion.div
            initial={{ x: -10, y: -10, opacity: 0.9 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg p-4 shadow-lg relative z-30"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-purple-500 rounded"></div>
              <XIcon className="w-8 h-8 text-black" />
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">💬</span>
              </div>
              <div className="w-8 h-8 bg-red-500 rounded"></div>
              <SiCanva className="w-8 h-8 text-blue-500" />
            </div>
            <p className="text-xs text-gray-600">
              1,200 creatives trust this stack
            </p>
          </motion.div>

          {/* Middle Card */}
          <motion.div
            initial={{ x: -5, y: -5, opacity: 0.8 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-lg p-4 shadow-lg relative z-20"
          >
            <h4 className="font-semibold text-black mb-2 text-sm">
              Indie Hacker's Essentials
            </h4>
            <div className="flex items-center gap-2 mb-2">
              <SiNotion className="w-8 h-8 text-black" />
              <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">N</span>
              </div>
              <SiSlack className="w-8 h-8 text-purple-500" />
            </div>
            <p className="text-xs text-gray-600">
              Curated by Sam Ortega building profitable products solo
            </p>
          </motion.div>

          {/* Bottom Card */}
          <motion.div
            initial={{ x: 0, y: 0, opacity: 0.7 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg p-4 shadow-lg relative z-10"
          >
            <h4 className="font-semibold text-black mb-2 text-sm">
              Remote Team Starter Pack
            </h4>
            <div className="flex items-center gap-2 mb-2">
              <SiAsana className="w-8 h-8 text-orange-500" />
              <SiMiro className="w-8 h-8 text-yellow-500" />
              <SiClickup className="w-8 h-8 text-blue-500" />
            </div>
            <p className="text-xs text-gray-600">
              Curated by Kendra Holt helping distributed teams thrive
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Card 3 - Empty */}
      <div className="bg-purple-100 rounded-xl p-6 md:p-8 shadow-lg opacity-50">
        <div className="text-7xl md:text-8xl font-bold text-black mb-4">3</div>
        <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">
          Earn &
        </h3>
        <h3 className="text-2xl md:text-3xl font-bold text-black">
          Enjoy
        </h3>
      </div>
    </div>
  );
}

// Slide 3: Earn & Enjoy
function Slide3() {
  const badgePositions = [
    { x: 70, y: 10 },
    { x: 85, y: 25 },
    { x: 75, y: 40 },
    { x: 60, y: 20 },
    { x: 80, y: 50 },
    { x: 65, y: 35 },
    { x: 90, y: 15 },
    { x: 55, y: 45 },
    { x: 70, y: 60 },
  ];

  const [gridCols, setGridCols] = useState('1fr');

  useEffect(() => {
    const updateGrid = () => {
      if (window.innerWidth >= 768) {
        setGridCols('15% 15% 70%');
      } else {
        setGridCols('1fr');
      }
    };
    updateGrid();
    window.addEventListener('resize', updateGrid);
    return () => window.removeEventListener('resize', updateGrid);
  }, []);

  return (
    <div 
      className="grid gap-4 md:gap-6 max-w-7xl mx-auto"
      style={{ gridTemplateColumns: gridCols }}
    >
      {/* Card 1 - Empty */}
      <div className="bg-purple-100 rounded-xl p-6 md:p-8 shadow-lg opacity-50">
        <div className="text-7xl md:text-8xl font-bold text-black mb-4">1</div>
        <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">
          Sign up &
        </h3>
        <h3 className="text-2xl md:text-3xl font-bold text-black">
          Connect
        </h3>
      </div>

      {/* Card 2 - Empty */}
      <div className="bg-purple-100 rounded-xl p-6 md:p-8 shadow-lg opacity-50">
        <div className="text-7xl md:text-8xl font-bold text-black mb-4">2</div>
        <h3 className="text-2xl md:text-3xl font-bold text-black">
          Organize & Track
        </h3>
      </div>

      {/* Card 3 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-purple-100 rounded-xl p-6 md:p-8 shadow-lg relative overflow-hidden"
      >
        <div className="text-7xl md:text-8xl font-bold text-black mb-4">3</div>
        <div className="mb-6 relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">
            Earn &
          </h3>
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Enjoy
          </h3>
          <p className="text-gray-600 text-sm md:text-base">
            Check in daily, try new tools, and watch your points grow.
          </p>
        </div>
        {/* FlowCoins Badges */}
        <div className="relative h-64 md:h-80">
          {badgePositions.map((pos, index) => (
            <FlowCoinBadge key={index} x={pos.x} y={pos.y} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

const slides = [
  { id: 0, component: Slide1 },
  { id: 1, component: Slide2 },
  { id: 2, component: Slide3 },
];

export function ProcessStepsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <section className="w-full py-16 md:py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <motion.h2
          key={`headline-${currentSlide}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-16 text-black uppercase"
        >
          Simple, Rewarding, Calm
        </motion.h2>

        {/* Carousel Container */}
        <div className="relative">
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
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-4 mt-8 md:mt-12">
          {/* Pause/Play Button */}
          <button
            onClick={togglePlayPause}
            className="w-8 h-8 md:w-10 md:h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <FaPause className="w-4 h-4 md:w-5 md:h-5 text-black" />
            ) : (
              <FaPlay className="w-4 h-4 md:w-5 md:h-5 text-black ml-0.5" />
            )}
          </button>

          {/* Indicator Dots */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="focus:outline-none"
                aria-label={`Go to slide ${index + 1}`}
              >
                <motion.div
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                    index === currentSlide
                      ? "bg-black"
                      : "border-2 border-black"
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
      </div>
    </section>
  );
}

