"use client";

import { ReactNode, useState } from "react";
import { Brain, Home, Compass, Box, Layers, Receipt, Gem, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DashboardLayoutProps {
  children: ReactNode;
}

const navigationItems = [
  { name: "Home", icon: Home, href: "/dashboard" },
  { name: "Discover", icon: Compass, href: "/dashboard/discover" },
  { name: "Library", icon: Box, href: "/dashboard/library" },
  { name: "Tech Stack", icon: Layers, href: "/dashboard/tech-stack" },
  { name: "Subscriptions", icon: Receipt, href: "/dashboard/subscriptions" },
  { name: "Rewards Hub", icon: Gem, href: "/dashboard/rewards" },
  { name: "Settings", icon: Settings, href: "/dashboard/settings" },
];

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-white border-r border-gray-200 transition-all duration-300 flex flex-col fixed h-screen z-30`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <img 
              src="/flowva.png" 
              alt="Flowva Logo" 
              className={`${sidebarOpen ? "h-16" : "h-8"} w-auto object-contain`}
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            // Highlight Rewards Hub when on /dashboard
            let isActive = pathname === item.href || pathname?.includes(item.href);
            if (pathname === "/dashboard" && item.name === "Rewards Hub") {
              isActive = true;
            }
            if (pathname === "/dashboard" && item.name === "Home") {
              isActive = false;
            }
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-purple-100 text-purple-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {sidebarOpen && (
                  <span className="text-sm font-medium">{item.name}</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-semibold">O</span>
            </div>
            {sidebarOpen && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">Ola</p>
                <p className="text-xs text-gray-500 truncate">
                  ajoseholabisi@gmail.com
                </p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`flex-1 ${sidebarOpen ? "ml-64" : "ml-20"} transition-all duration-300`}>
        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

