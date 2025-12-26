"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Navbar() {
  const navItems = ["Hub", "Company", "Support", "Community"];

  const router = useRouter()

  return (
    <>
      {/* Top Banner */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-black text-white py-2 px-4 text-center text-sm"
      >
        <span className="inline-flex items-center gap-2">
          <span>🚀</span>
          <span>
            Big news! The full Flowva experience + mobile apps are launching
            soon on iOS & Android
          </span>
        </span>
      </motion.div>

      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full bg-white border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left side - Logo and Navigation Links */}
            <div className="flex items-center gap-8">
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
              </motion.div>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center gap-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <Link
                      href="#"
                      className="text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-1 text-sm font-medium"
                    >
                      {item}
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right side - Buttons */}
            <div className="flex items-center gap-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Button
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-50 rounded-lg"
                  onClick={() => router.push('/login?mode=login')}
                >
                  Login
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-lg border-0"
                  onClick={() => router.push('/login?mode=signup')}
                >
                  Sign up
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}

