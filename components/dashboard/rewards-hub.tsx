"use client";

import { useState, useEffect } from "react";
import { Trophy, Calendar, Zap, Gift, Star, Share2, Users, Copy } from "lucide-react";
import { FaBell } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUser } from "@/lib/hooks/use-user";

// Custom X Icon
function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function RewardsHub() {
  const { profile, checkIn, loading: userLoading } = useUser();
  const [activeTab, setActiveTab] = useState<"earn" | "redeem">("earn");
  const [activeFilter, setActiveFilter] = useState<"all" | "unlocked" | "locked" | "coming-soon">("all");
  const [referralLink] = useState("https://app.flowvahub.com/signup/?ref=ola8938");
  const [copied, setCopied] = useState(false);
  const [checkInLoading, setCheckInLoading] = useState(false);
  const [checkInError, setCheckInError] = useState<string | null>(null);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"];

  // Get current day of week (0 = Sunday, 1 = Monday, etc.)
  const getCurrentDayIndex = () => {
    const today = new Date().getDay();
    // Convert to our format: Monday = 0, Tuesday = 1, etc.
    return today === 0 ? 6 : today - 1;
  };

  const handleCheckIn = async () => {
    setCheckInLoading(true);
    setCheckInError(null);
    const result = await checkIn();
    if (!result.success) {
      setCheckInError(result.error?.toString() || "Failed to check in");
    }
    setCheckInLoading(false);
  };

  const isCheckedInToday = () => {
    if (!profile?.last_check_in) return false;
    const today = new Date().toISOString().split("T")[0];
    return profile.last_check_in === today;
  };

  const points = profile?.points || 0;
  const streakDays = profile?.streak_days || 0;
  const progressPercentage = Math.min((points / 5000) * 100, 100);

  // Show loading state while user data is being fetched
  if (userLoading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-5rem)]">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[calc(100vh-5rem)]">
      {/* Fixed Header */}
      <div className="sticky top-0 z-10">
        <div className="pb-6 mb-0">
          <div className="flex items-start justify-between mb-0">
            <div>
              <h1 className="text-2xl md:text-3xl text-gray-900 mb-2">
                Rewards Hub
              </h1>
              <p className="text-gray-600 text-base md:text-lg">
                Earn points, unlock rewards, and celebrate your progress!
              </p>
            </div>
            <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0 ml-4 bg-gray-100">
              <FaBell className="w-5 h-5 text-gray-700" />
              <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">1</span>
              </span>
            </button>
          </div>
        </div>

        {/* Tabs - Fixed */}
        <div className="flex gap-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("earn")}
            className={`pb-3 px-1 font-medium text-base transition-colors ${
              activeTab === "earn"
                ? "text-purple-600 border-b-2 border-purple-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Earn Points
          </button>
          <button
            onClick={() => setActiveTab("redeem")}
            className={`pb-3 px-1 font-medium text-base transition-colors ${
              activeTab === "redeem"
                ? "text-purple-600 border-b-2 border-purple-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Redeem Rewards
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto h-calc(100vh-5rem) [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {activeTab === "earn" && (
          <div className="space-y-8 pt-6">
            {/* Your Rewards Journey */}
            <div>
            <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-purple-600 rounded"></div>
                <h2 className="text-2xl font-bold text-gray-900">Your Rewards Journey</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Points Balance Card */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-2 mb-4">
                    <Trophy className="w-5 h-5 text-purple-600" />
                    <h3 className="font-semibold text-gray-900">Points Balance</h3>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-4xl font-bold text-purple-600">{points}</span>
                    <div className="relative">
                      {/* Gold coin with orange star */}
                      <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">Progress to $5 Gift Card</span>
                      <span className="text-gray-900 font-medium">{points}/5000</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-purple-600 h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 flex items-center gap-1 mt-3">
                    <span>🚀</span>
                    <span>Just getting started — keep earning points!</span>
                  </p>
                </div>

                {/* Daily Streak Card */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-5 h-5 text-blue-400" />
                    <h3 className="font-semibold text-gray-900">Daily Streak</h3>
                  </div>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-purple-600">
                      {streakDays}
                    </span>
                    <span className="text-4xl font-bold text-purple-600 ml-1">
                      {streakDays === 1 ? "day" : "days"}
                    </span>
                  </div>
                  <div className="flex gap-2 mb-4">
                    {daysOfWeek.map((day, index) => {
                      const currentDayIndex = getCurrentDayIndex();
                      const isToday = index === currentDayIndex;
                      
                      return (
                        <button
                          key={index}
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                            isToday
                              ? "bg-gray-100 text-gray-600 border-2 border-purple-600"
                              : "bg-gray-100 text-gray-600 border-2 border-transparent"
                          }`}
                          disabled
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-sm text-gray-700 mb-4">
                    Check in daily to to earn +5 points.
                  </p>
                  {checkInError && (
                    <p className="text-sm text-red-500 mb-2">{checkInError}</p>
                  )}
                  <Button 
                    className={`w-full ${
                      isCheckedInToday()
                        ? "bg-gray-300 hover:bg-gray-300 text-gray-700 cursor-not-allowed border-gray-300"
                        : "bg-purple-600 hover:bg-purple-700 text-white"
                    }`}
                    onClick={handleCheckIn}
                    disabled={isCheckedInToday() || checkInLoading}
                    variant={isCheckedInToday() ? "outline" : "default"}
                  >
                    <Zap className={`w-4 h-4 mr-2 ${isCheckedInToday() ? "text-gray-700" : "text-white"}`} />
                    {checkInLoading 
                      ? "Claiming..." 
                      : isCheckedInToday() 
                      ? "Claimed Today" 
                      : "Claim Today's Points"}
                  </Button>
                </div>

                {/* Top Tool Spotlight Card */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  {/* Top Gradient Section */}
                  <div className="bg-gradient-to-br from-purple-600 to-blue-500 p-6 text-white relative">
                    <div className="absolute top-4 left-4">
                      <span className="bg-purple-400/30 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                        <div className="flex flex-col gap-0.5">
                          <div className="flex gap-0.5">
                            <div className="w-2 h-2 bg-pink-400 rounded"></div>
                            <div className="w-2 h-2 bg-black rounded-full"></div>
                          </div>
                          <div className="flex gap-0.5">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <div className="w-2 h-2 bg-yellow-300 rounded transform rotate-45"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8">
                      <h3 className="font-semibold text-lg mb-2">Top Tool Spotlight</h3>
                      <h4 className="font-bold text-xl">Reclaim</h4>
                    </div>
                  </div>

                  {/* Bottom White Section */}
                  <div className="p-6 bg-white">
                    {/* Calendar Highlight Box */}
                    <div className="bg-white border border-gray-200 rounded-lg p-3 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-purple-600" />
                        <p className="text-sm text-gray-900 font-semibold">
                          Automate and Optimize Your Schedule
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                      Reclaim.ai is an AI-powered calendar assistant that automatically schedules your tasks, meetings,
                      and breaks to boost productivity. Free to try — earn Flowva Points
                      when you sign up!
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">
                        <Users className="w-4 h-4 mr-2" />
                        Sign up
                      </Button>
                      <Button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">
                        <Gift className="w-4 h-4 mr-2" />
                        Claim 50 pts
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Earn More Points */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-purple-600 rounded"></div>
                <h2 className="text-2xl font-bold text-gray-900">Earn More Points</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Refer and win card */}
                <div className="bg-white rounded-xl p-6 border border-purple-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-6 h-6 text-purple-600 stroke-2 fill-none stroke-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Refer and win 10,000 points!
                      </h3>
                      <p className="text-sm text-gray-600">
                        Invite 3 friends by Nov 20 and earn a chance to be one of 5
                        winners of <span className="text-purple-600 font-semibold">10,000 points</span>. Friends must complete onboarding to
                        qualify.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Share Your Stack card */}
                <div className="bg-white rounded-xl p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Share2 className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Share Your Stack
                      </h3>
                      <p className="text-sm text-purple-600 font-medium mb-2">Earn +25 pts</p>
                      <p className="text-sm text-gray-600">Share your tool stack</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button className="bg-purple-100 hover:bg-purple-200 text-purple-600 border-0">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Refer & Earn */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-purple-600 rounded"></div>
                <h2 className="text-2xl font-bold text-gray-900">Refer & Earn</h2>
              </div>
              <div className="bg-purple-50 rounded-xl p-6 md:p-8 shadow-sm border border-purple-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">
                      Share Your Link
                    </h3>
                    <p className="text-sm text-gray-600">
                      Invite friends and earn 25 points when they join!
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-3xl font-bold text-purple-600 mb-1">0</p>
                    <p className="text-sm text-gray-600">Referrals</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-purple-600 mb-1">0</p>
                    <p className="text-sm text-gray-600">Points Earned</p>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your personal referral link:
                  </label>
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      value={referralLink}
                      readOnly
                      className="flex-1 bg-white"
                    />
                    <Button
                      onClick={copyToClipboard}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-4"
                    >
                      {copied ? (
                        <span className="text-sm">Copied!</span>
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* Social Share Icons */}
                <div className="flex items-center justify-center gap-4">
                  <div className="flex gap-3">
                    <button className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                      <span className="text-white font-bold text-sm">f</span>
                    </button>
                    <button className="w-10 h-10 bg-black rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
                      <XIcon className="w-5 h-5 text-white" />
                    </button>
                    <button className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors">
                      <span className="text-white font-bold text-xs">in</span>
                    </button>
                    <button className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
                      <span className="text-white text-lg">💬</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "redeem" && (
          <div className="space-y-6">
            {/* Section Title */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                | Redeem Your Points
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-4 border-b border-gray-200 pb-4">
              {[
                { label: "All Rewards", count: 7, key: "all" as const },
                { label: "Unlocked", count: 0, key: "unlocked" as const },
                { label: "Locked", count: 6, key: "locked" as const },
                { label: "Coming Soon", count: 1, key: "coming-soon" as const },
              ].map((filter) => {
                const isActive = activeFilter === filter.key;
                return (
                  <button
                    key={filter.key}
                    onClick={() => setActiveFilter(filter.key)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      isActive
                        ? "bg-purple-100 text-purple-600"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <span className="font-medium">{filter.label}</span>
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
                        isActive
                          ? "bg-purple-600 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {filter.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Reward Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* $5 PayPal International */}
              {(activeFilter === "all" || activeFilter === "locked") && (
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs">$</span>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  $5 PayPal International
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Receive a $5 PayPal balance transfer directly to your PayPal
                  account email.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    <span className="text-gray-900 font-medium">5000 pts</span>
                  </div>
                  <Button
                    variant="outline"
                    className="bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200"
                    disabled
                  >
                    Locked
                  </Button>
                </div>
              </div>
              )}

              {/* $5 Virtual Visa Card */}
              {(activeFilter === "all" || activeFilter === "locked") && (
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Gift className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  $5 Virtual Visa Card
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Use your $5 prepaid card to shop anywhere Visa is accepted
                  online.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    <span className="text-gray-900 font-medium">5000 pts</span>
                  </div>
                  <Button
                    variant="outline"
                    className="bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200"
                    disabled
                  >
                    Locked
                  </Button>
                </div>
              </div>
              )}

              {/* $5 Apple Gift Card */}
              {(activeFilter === "all" || activeFilter === "locked") && (
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Gift className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  $5 Apple Gift Card
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Redeem this $5 Apple Gift Card for apps, games, music, movies,
                  and more on the App Store and iTunes.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    <span className="text-gray-900 font-medium">5000 pts</span>
                  </div>
                  <Button
                    variant="outline"
                    className="bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200"
                    disabled
                  >
                    Locked
                  </Button>
                </div>
              </div>
              )}

              {/* $5 Google Play Card */}
              {(activeFilter === "all" || activeFilter === "locked") && (
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Gift className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  $5 Google Play Card
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Use this $5 Google Play Gift Card to purchase apps, games,
                  movies, books, and more on the Google Play Store.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    <span className="text-gray-900 font-medium">5000 pts</span>
                  </div>
                  <Button
                    variant="outline"
                    className="bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200"
                    disabled
                  >
                    Locked
                  </Button>
                </div>
              </div>
              )}

              {/* $5 Amazon Gift Card */}
              {(activeFilter === "all" || activeFilter === "locked") && (
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Gift className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  $5 Amazon Gift Card
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get a $5 digital gift card to spend on your favorite tools or
                  platforms.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    <span className="text-gray-900 font-medium">5000 pts</span>
                  </div>
                  <Button
                    variant="outline"
                    className="bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200"
                    disabled
                  >
                    Locked
                  </Button>
                </div>
              </div>
              )}

              {/* $10 Amazon Gift Card */}
              {(activeFilter === "all" || activeFilter === "locked") && (
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Gift className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  $10 Amazon Gift Card
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get a $10 digital gift card to spend on your favorite tools or
                  platforms.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    <span className="text-gray-900 font-medium">10000 pts</span>
                  </div>
                  <Button
                    variant="outline"
                    className="bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200"
                    disabled
                  >
                    Locked
                  </Button>
                </div>
              </div>
              )}

              {/* Free Udemy Course */}
              {(activeFilter === "all" || activeFilter === "coming-soon") && (
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-8 h-8 bg-purple-200 rounded flex items-center justify-center">
                    <span className="text-purple-600 text-xs">📚</span>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Free Udemy Course
                </h3>
                <p className="text-sm text-gray-600 mb-4">Coming Soon!</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    <span className="text-gray-900 font-medium">0 pts</span>
                  </div>
                  <Button
                    variant="outline"
                    className="bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200"
                    disabled
                  >
                    Coming Soon
                  </Button>
                </div>
              </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

