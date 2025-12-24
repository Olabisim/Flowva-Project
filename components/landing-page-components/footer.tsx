"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Brain, ArrowRight } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

// Custom X (Twitter) Icon
function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// Flowva Logo Component
function FlowvaLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center">
        <Brain className="w-5 h-5 text-white" />
      </div>
      <span className="text-xl font-bold text-white">Flowva</span>
    </div>
  );
}

export function Footer() {
  const navigationLinks = {
    Hub: ["Discover", "Library", "Rewards"],
    Company: ["About Us", "Blog"],
    Support: ["FAQ", "Contact Us"],
    Community: ["Affiliate", "Influencer", "Referral"],
    Legal: ["Terms and Conditions", "Privacy Policy"],
  };

  const socialLinks = [
    { name: "Facebook", icon: FaFacebook, href: "#" },
    { name: "X", icon: XIcon, href: "#" },
    { name: "Instagram", icon: FaInstagram, href: "#" },
    { name: "LinkedIn", icon: FaLinkedin, href: "#" },
    { name: "TikTok", icon: FaTiktok, href: "#" },
  ];

  return (
    <footer className="w-full bg-black text-white">
      {/* Newsletter Signup Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 rounded-2xl p-6 md:p-8 lg:p-10 max-w-4xl mx-auto"
          >
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <FlowvaLogo />
            </div>

            {/* Email Input */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Input
                type="email"
                placeholder="Enter email address"
                className="flex-1 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
              />
              <Button
                className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 px-6"
              >
                <span className="mr-2">Submit</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Tagline */}
            <p className="text-center text-white text-sm md:text-base">
              10,000+ end their week inspired. Join Friday Flow.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-12">
          {/* Left Side - Brand Information */}
          <div className="lg:col-span-2">
            <FlowvaLogo className="mb-4" />
            <p className="text-gray-400 text-sm md:text-base mb-6 max-w-md">
              The smart way to manage your digital life and get rewarded
            </p>
            <p className="text-gray-500 text-xs md:text-sm">
              © 2025 Flowva
            </p>
          </div>

          {/* Right Side - Navigation Links */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {Object.entries(navigationLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="font-bold text-white mb-4 text-sm md:text-base">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section - Social Media */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Social Media Icons */}
            <div className="flex items-center gap-4 md:gap-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm md:text-base hidden sm:inline">
                      {social.name}
                    </span>
                  </motion.a>
                );
              })}
            </div>

            {/* WhatsApp Button */}
            <motion.a
              href="#"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 }}
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 md:w-14 md:h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors fixed bottom-6 right-6 z-50"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}

