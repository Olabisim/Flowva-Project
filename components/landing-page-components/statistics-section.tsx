"use client";

import { motion } from "framer-motion";
import { 
  FaPlus, 
  FaSnowflake, 
  FaCog, 
  FaSquare, 
  FaFolder,
  FaArrowUp
} from "react-icons/fa";

// Avatar component for user profiles
function Avatar({ bgColor, name }: { bgColor: string; name: string }) {
  return (
    <div
      className={`w-8 h-8 rounded-full ${bgColor} flex items-center justify-center text-white text-xs font-semibold border-2 border-white shadow-sm`}
      title={name}
    >
      {name.charAt(0).toUpperCase()}
    </div>
  );
}

// Tool icon component
function ToolIcon({ icon, bgColor }: { icon: React.ReactNode; bgColor: string }) {
  return (
    <div className={`w-8 h-8 rounded ${bgColor} flex items-center justify-center text-white text-xs shadow-sm`}>
      {icon}
    </div>
  );
}

// Flag component
function Flag({ country, emoji }: { country: string; emoji: string }) {
  return (
    <div className="w-10 h-7 rounded border border-gray-200 bg-white flex items-center justify-center text-lg shadow-sm" title={country}>
      {emoji}
    </div>
  );
}

export function StatisticsSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 max-w-4xl mx-auto leading-tight"
        >
          Turn productivity into rewards with a calm, smart space that organizes
          your tools, and keeps you in control.
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Users Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-purple-100 rounded-xl p-6 md:p-8 shadow-sm"
          >
            <div className="mb-4 text-left">
              <h3 className="text-4xl md:text-5xl font-bold text-black mb-2">
                10,000+
              </h3>
              <p className="text-lg md:text-xl font-semibold text-black mb-3">
                Users
              </p>
              <p className="text-sm md:text-base text-gray-600">
                Already simplifying their workflow with Flowva
              </p>
            </div>
            <div className="flex items-center gap-2 mt-6">
              <Avatar bgColor="bg-blue-500" name="Alex" />
              <Avatar bgColor="bg-green-500" name="Sarah" />
              <Avatar bgColor="bg-purple-500" name="Mike" />
              <Avatar bgColor="bg-pink-500" name="Emma" />
              <Avatar bgColor="bg-orange-500" name="John" />
              <span className="text-sm font-semibold text-black ml-2">
                10,000+
              </span>
            </div>
          </motion.div>

          {/* Tools Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-purple-100 rounded-xl p-6 md:p-8 shadow-sm"
          >
            <div className="mb-4 text-left">
              <h3 className="text-4xl md:text-5xl font-bold text-black mb-2">
                200+
              </h3>
              <p className="text-lg md:text-xl font-semibold text-black mb-3">
                Tools
              </p>
              <p className="text-sm md:text-base text-gray-600">
                Curated and organized for you in the library
              </p>
            </div>
            <div className="flex items-center gap-2 mt-6 flex-wrap">
              <ToolIcon
                icon={<FaPlus className="w-4 h-4" />}
                bgColor="bg-purple-600"
              />
              <ToolIcon
                icon={<FaSnowflake className="w-4 h-4" />}
                bgColor="bg-black"
              />
              <ToolIcon
                icon={<FaCog className="w-4 h-4" />}
                bgColor="bg-orange-500"
              />
              <ToolIcon
                icon={<FaSquare className="w-4 h-4" />}
                bgColor="bg-red-500"
              />
              <ToolIcon
                icon={<FaFolder className="w-4 h-4" />}
                bgColor="bg-blue-500"
              />
              <ToolIcon
                icon={<FaArrowUp className="w-4 h-4" />}
                bgColor="bg-black"
              />
              <span className="text-sm font-semibold text-black ml-2">
                and many more
              </span>
            </div>
          </motion.div>

          {/* Countries Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-purple-100 rounded-xl p-6 md:p-8 shadow-sm"
          >
            <div className="mb-4 text-left">
              <h3 className="text-4xl md:text-5xl font-bold text-black mb-2">
                25+
              </h3>
              <p className="text-lg md:text-xl font-semibold text-black mb-3">
                Countries
              </p>
              <p className="text-sm md:text-base text-gray-600">
                Reviewing tools and building smarter stacks every day
              </p>
            </div>
            <div className="flex items-center gap-2 mt-6 flex-wrap">
              <Flag country="Nigeria" emoji="🇳🇬" />
              <Flag country="USA" emoji="🇺🇸" />
              <Flag country="India" emoji="🇮🇳" />
              <Flag country="Canada" emoji="🇨🇦" />
              <Flag country="Philippines" emoji="🇵🇭" />
              <Flag country="Kenya" emoji="🇰🇪" />
              <Flag country="United Kingdom" emoji="🇬🇧" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

