import { AuthPage } from "@/components/auth-page";

export default function Page() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 md:p-10 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700">
      <div className="w-full max-w-md">
        <AuthPage />
      </div>
    </div>
  );
}

