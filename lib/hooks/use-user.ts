"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";

export interface UserProfile {
  id: string;
  name: string | null;
  email: string;
  points: number;
  user_type: string;
  last_check_in: string | null;
  streak_days: number;
}

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchProfile(session.user.id);
      } else {
        setLoading(false);
      }
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchProfile(session.user.id);
      } else {
        setProfile(null);
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", userId)
        .single();

      if (error) throw error;
      setProfile(data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setLoading(false);
    }
  };

  const updatePoints = async (pointsToAdd: number) => {
    if (!profile) return;

    try {
      const newPoints = profile.points + pointsToAdd;
      const { error } = await supabase
        .from("users")
        .update({ points: newPoints })
        .eq("id", profile.id);

      if (error) throw error;
      setProfile({ ...profile, points: newPoints });
      return { success: true };
    } catch (error) {
      console.error("Error updating points:", error);
      return { success: false, error };
    }
  };

  const checkIn = async () => {
    if (!profile) return { success: false, error: "No user profile" };

    const today = new Date().toISOString().split("T")[0];
    const lastCheckIn = profile.last_check_in
      ? new Date(profile.last_check_in).toISOString().split("T")[0]
      : null;

    // Check if already checked in today
    if (lastCheckIn === today) {
      return { success: false, error: "Already checked in today" };
    }

    // Calculate streak
    let newStreak = 1;
    if (lastCheckIn) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split("T")[0];

      if (lastCheckIn === yesterdayStr) {
        // Consecutive day
        newStreak = profile.streak_days + 1;
      }
      // If not consecutive, streak resets to 1
    }

    try {
      const newPoints = profile.points + 5;
      const { error } = await supabase
        .from("users")
        .update({
          points: newPoints,
          last_check_in: today,
          streak_days: newStreak,
        })
        .eq("id", profile.id);

      if (error) throw error;
      setProfile({
        ...profile,
        points: newPoints,
        last_check_in: today,
        streak_days: newStreak,
      });
      return { success: true };
    } catch (error) {
      console.error("Error checking in:", error);
      return { success: false, error };
    }
  };

  const refreshProfile = async () => {
    if (user) {
      await fetchProfile(user.id);
    }
  };

  return {
    user,
    profile,
    loading,
    updatePoints,
    checkIn,
    refreshProfile,
  };
}

