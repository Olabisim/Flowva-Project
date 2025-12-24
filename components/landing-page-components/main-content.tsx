"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Users, Building2 } from "lucide-react";

export function MainContent() {
  const [activeTab, setActiveTab] = useState<"users" | "brands">("users");

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] px-4 py-12">
      {/* Toggle Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-12"
      >
        <div className="relative inline-flex items-center bg-white border border-purple-200 rounded-full p-1 shadow-sm">
          <motion.button
            onClick={() => setActiveTab("users")}
            className={`relative z-10 flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-colors ${
              activeTab === "users"
                ? "text-white"
                : "text-purple-600 hover:text-purple-700"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Users className="w-4 h-4" />
            For users
          </motion.button>
          <motion.button
            onClick={() => setActiveTab("brands")}
            className={`relative z-10 flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-colors ${
              activeTab === "brands"
                ? "text-white"
                : "text-purple-600 hover:text-purple-700"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Building2 className="w-4 h-4" />
            For brands
          </motion.button>
          <motion.div
            className="absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] bg-gradient-to-r from-purple-600 to-purple-700 rounded-full"
            animate={{
              x: activeTab === "users" ? 0 : "100%",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 max-w-5xl leading-tight"
      >
        <span className="uppercase">Your </span>
        <motion.span
          className="uppercase inline-block"
          style={{
            background: "linear-gradient(90deg, #9333ea, #a855f7, #ec4899, #a855f7, #9333ea)",
            backgroundSize: "200% 100%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          SMART
        </motion.span>
        <span className="uppercase"> Space To Manage Your Digital Life And Be Rewarded</span>
      </motion.h1>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-gray-800 via-gray-900 to-black hover:from-gray-900 hover:via-black hover:to-gray-900 text-white text-lg px-8 py-6 rounded-lg font-semibold shadow-lg"
          >
            Start Earning Today
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}

