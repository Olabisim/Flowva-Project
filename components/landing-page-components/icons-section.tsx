"use client";

import { motion } from "framer-motion";
import { FaBolt } from "react-icons/fa";
import { SiZoom, SiCanva, SiOpenai } from "react-icons/si";

// Custom Google Icon with proper colors
function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

// Custom Figma Icon with red dots
function FigmaIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Top dot */}
      <circle cx="12" cy="8" r="3" fill="#FF3B30" />
      {/* Bottom left dot */}
      <circle cx="8" cy="16" r="3" fill="#FF3B30" />
      {/* Bottom right dot */}
      <circle cx="16" cy="16" r="3" fill="#FF3B30" />
    </svg>
  );
}

interface FlowCoinBadgeProps {
  amount?: number;
}

function FlowCoinBadge({ amount = 50 }: FlowCoinBadgeProps) {
  return (
    <div className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-pink-400 via-purple-500 to-pink-500 p-1 shadow-lg">
      <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-sm flex flex-col items-center justify-center border border-white/20">
        <span className="text-2xl md:text-3xl font-bold text-pink-500">
          {amount}
        </span>
        <span className="text-xs md:text-sm text-purple-600 font-medium">
          FlowCoins
        </span>
      </div>
    </div>
  );
}

interface IconItemProps {
  icon: React.ReactNode;
  bgColor?: string;
  className?: string;
}

function IconItem({ icon, bgColor = "bg-white", className = "" }: IconItemProps) {
  return (
    <div
      className={`flex-shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-xl ${bgColor} shadow-lg flex items-center justify-center ${className}`}
    >
      {icon}
    </div>
  );
}

// First row items (moving left)
const firstRowItems = [
  <FlowCoinBadge key="coin-1" />,
  <IconItem
    key="bolt"
    icon={<FaBolt className="w-10 h-10 md:w-12 md:h-12 text-black" />}
  />,
  <FlowCoinBadge key="coin-2" />,
  <IconItem
    key="google-1"
    icon={<GoogleIcon className="w-10 h-10 md:w-12 md:h-12" />}
  />,
  <FlowCoinBadge key="coin-3" />,
  <IconItem
    key="zoom-1"
    icon={<SiZoom className="w-10 h-10 md:w-12 md:h-12 text-white" />}
    bgColor="bg-blue-500"
  />,
  <FlowCoinBadge key="coin-4" />,
  <IconItem
    key="canva-1"
    icon={<SiCanva className="w-10 h-10 md:w-12 md:h-12 text-white" />}
    bgColor="bg-gradient-to-br from-blue-400 to-purple-600"
  />,
  <FlowCoinBadge key="coin-5" />,
  <IconItem
    key="openai-1"
    icon={<SiOpenai className="w-10 h-10 md:w-12 md:h-12 text-white" />}
    bgColor="bg-black"
  />,
];

// Second row items (moving right)
const secondRowItems = [
  <IconItem
    key="google-2"
    icon={<GoogleIcon className="w-10 h-10 md:w-12 md:h-12" />}
  />,
  <FlowCoinBadge key="coin-6" />,
  <IconItem
    key="zoom-2"
    icon={<SiZoom className="w-10 h-10 md:w-12 md:h-12 text-white" />}
    bgColor="bg-blue-500"
  />,
  <FlowCoinBadge key="coin-7" />,
  <IconItem
    key="canva-2"
    icon={<SiCanva className="w-10 h-10 md:w-12 md:h-12 text-white" />}
    bgColor="bg-gradient-to-br from-blue-400 to-purple-600"
  />,
  <FlowCoinBadge key="coin-8" />,
  <IconItem
    key="openai-2"
    icon={<SiOpenai className="w-10 h-10 md:w-12 md:h-12 text-white" />}
    bgColor="bg-black"
  />,
  <FlowCoinBadge key="coin-9" />,
  <IconItem
    key="figma"
    icon={<FigmaIcon className="w-10 h-10 md:w-12 md:h-12" />}
    bgColor="bg-black"
  />,
  <FlowCoinBadge key="coin-10" />,
];

export function IconsSection() {
  // Calculate the width of one set of items for seamless loop
  const itemWidth = 112; // w-28 = 7rem = 112px
  const gap = 32; // gap-8 = 2rem = 32px
  const firstRowWidth = (itemWidth + gap) * firstRowItems.length;
  const secondRowWidth = (itemWidth + gap) * secondRowItems.length;

  return (
    <section className="w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="space-y-8">
        {/* First Row - Moving Left */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6 md:gap-8"
            animate={{
              x: [0, -firstRowWidth],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40, // Medium slow speed
                ease: "linear",
              },
            }}
          >
            {/* Duplicate items for seamless loop */}
            {[...firstRowItems, ...firstRowItems, ...firstRowItems].map((item, index) => (
              <div key={`first-${index}`}>{item}</div>
            ))}
          </motion.div>
        </div>

        {/* Second Row - Moving Right */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6 md:gap-8"
            animate={{
              x: [-secondRowWidth, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40, // Medium slow speed
                ease: "linear",
              },
            }}
          >
            {/* Duplicate items for seamless loop */}
            {[...secondRowItems, ...secondRowItems, ...secondRowItems].map((item, index) => (
              <div key={`second-${index}`}>{item}</div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

