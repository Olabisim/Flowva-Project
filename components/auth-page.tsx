"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

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

export function AuthPage() {
  const searchParams = useSearchParams();
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Set initial mode based on URL query parameter
  useEffect(() => {
    const mode = searchParams.get("mode");
    if (mode === "signup") {
      setIsSignUp(true);
    } else if (mode === "login") {
      setIsSignUp(false);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    if (isSignUp) {
      // Sign up logic
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        setIsLoading(false);
        return;
      }

      try {
        const { data, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/dashboard`,
            data: {
              name: name || email.split("@")[0],
              user_type: "user",
            },
          },
        });
        if (signUpError) throw signUpError;

        // Create user profile in users table
        if (data.user) {
          const { error: profileError } = await supabase
            .from("users")
            .upsert({
              id: data.user.id,
              email: email,
              name: name || email.split("@")[0],
              points: 0,
              user_type: "user",
            });

          if (profileError) {
            console.error("Error creating profile:", profileError);
            // Continue anyway as the trigger should handle it
          }
        }

        router.push("/dashboard");
      } catch (error: unknown) {
        setError(error instanceof Error ? error.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    } else {
      // Login logic
      try {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        router.push("/dashboard");
      } catch (error: unknown) {
        setError(error instanceof Error ? error.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setError(null);
    setName("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
          {isSignUp ? "Create Your Account" : "Log in to flowva"}
        </h1>
        <p className="text-gray-500 text-sm md:text-base">
          {isSignUp
            ? "Sign up to manage your tools"
            : "Log in to receive personalized recommendations."}
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input (only for signup) */}
        {isSignUp && (
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700">
              Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Your name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full"
            />
          </div>
        )}

        {/* Email Input */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-700">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder={isSignUp ? "your@email.com" : "user@example.com"}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Password Input */}
        <div className="space-y-2">
          <Label htmlFor="password" className="text-gray-700">
            Password
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pr-16"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-sm font-medium ${
                isSignUp
                  ? "text-gray-500 hover:text-gray-700"
                  : "text-purple-600 hover:text-purple-700"
              }`}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {/* Confirm Password Input (only for signup) */}
        {isSignUp && (
          <div className="space-y-2">
            <Label htmlFor="confirm-password" className="text-gray-700">
              Confirm Password
            </Label>
            <div className="relative">
              <Input
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pr-16"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 text-sm font-medium"
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
        )}

        {/* Forgot Password Link (only for login) */}
        {!isSignUp && (
          <div className="flex justify-end">
            <Link
              href="/auth/forgot-password"
              className="text-purple-600 hover:text-purple-700 text-sm font-medium"
            >
              Forgot Password?
            </Link>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <p className="text-sm text-red-500 bg-red-50 p-3 rounded-lg">
            {error}
          </p>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 text-base font-semibold rounded-lg"
          disabled={isLoading}
        >
          {isLoading
            ? isSignUp
              ? "Creating account..."
              : "Signing in..."
            : isSignUp
            ? "Sign up Account"
            : "Sign in"}
        </Button>

        {/* Separator */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-gray-500 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Sign in with Google Button */}
        <Button
          type="button"
          variant="outline"
          className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-6 text-base font-medium rounded-lg flex items-center justify-center gap-3"
        >
          <GoogleIcon className="w-5 h-5" />
          Sign in with Google
        </Button>

        {/* Toggle Link */}
        <div className="text-center text-sm text-gray-600 mt-6">
          {isSignUp ? "Already have an account? " : "Don't have an account? "}
          <button
            type="button"
            onClick={toggleMode}
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            {isSignUp ? "Log In" : "Sign up"}
          </button>
        </div>
      </form>
    </div>
  );
}

