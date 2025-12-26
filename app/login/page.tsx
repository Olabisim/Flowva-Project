import { Suspense } from "react";
import { AuthPage } from "@/components/auth-page";

function AuthPageWrapper() {
  return <AuthPage />;
}

export default function Page() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 md:p-10 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700">
      <div className="w-full max-w-md">
        <Suspense fallback={<div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl animate-pulse h-96" />}>
          <AuthPageWrapper />
        </Suspense>
      </div>
    </div>
  );
}

