"use client";

import { useEffect, useState } from "react";

export default function CheckEnvPage() {
  const [envStatus, setEnvStatus] = useState<{
    url: boolean;
    key: boolean;
    urlValue: string;
    keyValue: string;
  } | null>(null);

  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

    setEnvStatus({
      url: !!url,
      key: !!key,
      urlValue: url || "NOT FOUND",
      keyValue: key ? `${key.substring(0, 20)}...` : "NOT FOUND",
    });
  }, []);

  if (!envStatus) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Checking environment variables...</div>
      </div>
    );
  }

  const allGood = envStatus.url && envStatus.key;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Environment Variables Check
        </h1>

        <div className="space-y-4">
          {/* URL Status */}
          <div className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-gray-700">
                NEXT_PUBLIC_SUPABASE_URL
              </span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  envStatus.url
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {envStatus.url ? "✓ Found" : "✗ Missing"}
              </span>
            </div>
            <div className="text-sm text-gray-600 font-mono break-all">
              {envStatus.urlValue}
            </div>
          </div>

          {/* Key Status */}
          <div className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-gray-700">
                NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
              </span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  envStatus.key
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {envStatus.key ? "✓ Found" : "✗ Missing"}
              </span>
            </div>
            <div className="text-sm text-gray-600 font-mono break-all">
              {envStatus.keyValue}
            </div>
          </div>

          {/* Overall Status */}
          <div
            className={`mt-6 p-4 rounded-lg ${
              allGood
                ? "bg-green-50 border border-green-200"
                : "bg-red-50 border border-red-200"
            }`}
          >
            <h2 className="font-semibold mb-2">
              {allGood ? "✓ All Environment Variables Found!" : "✗ Missing Variables"}
            </h2>
            {allGood ? (
              <p className="text-sm text-gray-700">
                Your Supabase configuration is ready. You can now use the application.
              </p>
            ) : (
              <div className="text-sm text-gray-700">
                <p className="mb-2">Please check:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>File is named exactly <code className="bg-gray-100 px-1 rounded">.env.local</code> (not <code className="bg-gray-100 px-1 rounded">.env</code> or <code className="bg-gray-100 px-1 rounded">.env.example</code>)</li>
                  <li>File is in the project root directory</li>
                  <li>You've restarted your development server after adding the variables</li>
                  <li>Variables start with <code className="bg-gray-100 px-1 rounded">NEXT_PUBLIC_</code></li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

