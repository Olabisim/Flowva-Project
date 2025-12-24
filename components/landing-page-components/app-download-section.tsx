"use client";

import { motion } from "framer-motion";
import { FaApple, FaHourglassHalf, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { SiGoogleplay } from "react-icons/si";
import { FaCloud, FaSun, FaFire } from "react-icons/fa";

// QR Code Component
function QRCode() {
  // Create a more realistic QR code pattern
  const qrPattern = [
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
  ];

  return (
    <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-lg p-2 shadow-lg flex items-center justify-center">
      <div className="w-full h-full bg-white border-2 border-gray-300 rounded flex items-center justify-center relative overflow-hidden">
        {/* QR Code Pattern */}
        <div className="absolute inset-0 p-1">
          <div className="grid w-full h-full" style={{ gridTemplateColumns: 'repeat(17, 1fr)' }}>
            {qrPattern.map((row, rowIndex) =>
              row.map((cell, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`${
                    cell === 1 ? "bg-black" : "bg-white"
                  }`}
                  style={{ aspectRatio: '1' }}
                />
              ))
            )}
          </div>
        </div>
        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

// Avatar Component
function Avatar({ initial, bgColor }: { initial: string; bgColor: string }) {
  return (
    <div
      className={`w-8 h-8 rounded-full ${bgColor} flex items-center justify-center text-white text-xs font-semibold border-2 border-white`}
    >
      {initial}
    </div>
  );
}

export function AppDownloadSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Left Section - Download */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-pink-100 rounded-2xl p-6 md:p-8 relative overflow-hidden"
          >
            {/* Download Button */}
            <div className="mb-6">
              <button className="px-4 py-2 bg-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-400 transition-colors">
                Download
              </button>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
              ORGANIZE, DISCOVER, AND EARN ON THE GO.
            </h2>

            {/* App Store Buttons and QR Code */}
            <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
              <div className="flex flex-col gap-4 flex-1">
                {/* Apple App Store Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full md:w-64 bg-gray-200 rounded-xl p-4 flex items-center gap-3 hover:bg-gray-300 transition-colors"
                >
                  <FaApple className="w-8 h-8 text-blue-600" />
                  <span className="font-semibold text-black">Apple App Store</span>
                </motion.button>

                {/* Google Play Store Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full md:w-64 bg-gray-200 rounded-xl p-4 flex items-center gap-3 hover:bg-gray-300 transition-colors"
                >
                  <SiGoogleplay className="w-8 h-8" />
                  <span className="font-semibold text-black">Google Play Store</span>
                </motion.button>
              </div>

              {/* QR Code */}
              <div className="flex-shrink-0">
                <QRCode />
              </div>
            </div>

            {/* Coming Soon Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full md:w-auto bg-gray-200 rounded-xl px-6 py-3 flex items-center gap-2 hover:bg-gray-300 transition-colors"
            >
              <FaHourglassHalf className="w-5 h-5 text-gray-700" />
              <span className="font-medium text-gray-700">Coming soon</span>
            </motion.button>
          </motion.div>

          {/* Right Section - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 rounded-2xl p-6 md:p-8 relative overflow-hidden"
          >
            {/* Benefits Button */}
            <div className="mb-6">
              <button className="px-4 py-2 bg-gray-700 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-600 transition-colors">
                Benefits
              </button>
            </div>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-white"></div>
                <span className="text-white font-bold text-lg">
                  QUICK DAILY CHECK-INS
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                <span className="text-gray-400 font-medium">
                  DISCOVER TOOLS ANYWHERE
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                <span className="text-gray-400 font-medium">
                  NEVER MISS A REWARD
                </span>
              </div>
            </div>

            {/* App Mockup Cards */}
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {/* Left Card - Check-in Screen */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl p-3 md:p-4 shadow-lg"
              >
                <div className="flex justify-end mb-2">
                  <button className="text-gray-400 hover:text-gray-600">
                    <FaTimes className="w-4 h-4" />
                  </button>
                </div>
                <h3 className="text-sm md:text-base font-bold text-black mb-3">
                  How's your moment?
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <Avatar initial="J" bgColor="bg-blue-500" />
                  <Avatar initial="E" bgColor="bg-green-500" />
                  <Avatar initial="A" bgColor="bg-purple-500" />
                  <span className="text-xs text-gray-600">
                    Jessie and other's already checked in today.
                  </span>
                </div>
                <div className="mb-3">
                  <div className="h-8 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-lg flex items-center justify-between px-2 relative">
                    <div className="flex items-center gap-1">
                      <FaCloud className="w-3 h-3 text-white" />
                      <FaSun className="w-3 h-3 text-white" />
                      <FaSun className="w-3 h-3 text-white" />
                      <FaFire className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <span className="text-xs text-gray-600 mt-1 block">Quiet</span>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <button className="text-gray-600 hover:text-gray-800">
                    <FaChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-medium text-gray-700">
                    Ready to explore
                  </span>
                  <button className="text-gray-600 hover:text-gray-800">
                    <FaChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-gray-200 text-gray-700 text-xs py-2 rounded-lg hover:bg-gray-300 transition-colors">
                    Skip today
                  </button>
                  <button className="flex-1 bg-purple-600 text-white text-xs py-2 rounded-lg hover:bg-purple-700 transition-colors">
                    Check-in
                  </button>
                </div>
              </motion.div>

              {/* Middle Card - Compass */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gray-800 rounded-xl p-3 md:p-4 shadow-lg flex items-center justify-center"
              >
                <motion.div
                  className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <svg
                    className="w-10 h-10 md:w-12 md:h-12 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </motion.div>
              </motion.div>

              {/* Right Card - FlowCoins Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gray-800 rounded-xl p-3 md:p-4 shadow-lg flex items-center justify-center"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-pink-400 via-purple-500 to-pink-500 p-1 shadow-lg">
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                    <span className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-pink-400 to-purple-500 bg-clip-text text-transparent">
                      50
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

