"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// FlowCoin Component
function FlowCoin({ x, y, rotation = 0, flipped = false }: { x: number; y: number; rotation?: number; flipped?: boolean }) {
  return (
    <motion.div
      className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: `rotate(${rotation}deg)`,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full h-full bg-gradient-to-br from-pink-400 via-purple-500 to-pink-500 p-1 shadow-lg rounded-full">
        <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-sm flex flex-col items-center justify-center border border-white/20">
          <span className="text-lg md:text-xl font-bold text-pink-500">
            50
          </span>
          <span
            className={`text-xs text-purple-600 font-medium ${
              flipped ? "transform rotate-180" : ""
            }`}
          >
            FlowCoins
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function CTABanner() {
  const coinPositions = [
    { x: 5, y: 10, rotation: 0, flipped: false }, // Top left
    { x: 5, y: 30, rotation: 15, flipped: false }, // Middle left
    { x: 5, y: 50, rotation: -10, flipped: false }, // Bottom left
    { x: 95, y: 5, rotation: 180, flipped: true }, // Top right
    { x: 95, y: 20, rotation: 165, flipped: true }, // Upper right
    { x: 95, y: 40, rotation: 190, flipped: true }, // Middle right
    { x: 95, y: 60, rotation: 175, flipped: true }, // Lower right
    { x: 95, y: 80, rotation: 180, flipped: true }, // Bottom right
  ];

  return (
    <section className="w-full py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-yellow-300 rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden"
        >
          {/* FlowCoins Decorative Elements */}
          {coinPositions.map((coin, index) => (
            <FlowCoin
              key={index}
              x={coin.x}
              y={coin.y}
              rotation={coin.rotation}
              flipped={coin.flipped}
            />
          ))}

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black uppercase mb-4 md:mb-6 leading-tight"
            >
              Stay Productive.
              <br />
              Get Rewarded.
            </motion.h2>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg lg:text-xl text-black mb-8 md:mb-10 max-w-2xl mx-auto"
            >
              Turn your tools, subscriptions, and daily habits into rewards all
              in one calm space
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-gray-800 via-gray-900 to-black hover:from-gray-900 hover:via-black hover:to-gray-900 text-white text-base md:text-lg px-8 md:px-12 py-6 md:py-7 rounded-full font-semibold shadow-lg"
                >
                  Unlock Rewards Now
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

