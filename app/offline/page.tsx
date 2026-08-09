"use client";

import { WifiOff, RefreshCcw, Home } from "lucide-react";
import Link from "next/link";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton";
import Image from "next/image";

export default function OfflinePage() {
  const handleReload = () => {
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  return (
    <main className="flex-1 w-full min-h-[70vh] flex items-center justify-center bg-[#f8fafc] px-4 py-16">
      <div className="max-w-lg w-full bg-white rounded-3xl p-8 md:p-12 shadow-premium text-center border border-border/50">
        <div className="w-24 h-24 bg-[#EDF9F8] rounded-full flex items-center justify-center mx-auto mb-8 border border-[#B7E5E2] relative">
          <WifiOff className="w-10 h-10 text-[#148C87]" />
          <div className="absolute top-0 right-0 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
            <span className="w-2.5 h-2.5 bg-amber-500 rounded-full animate-pulse" />
          </div>
        </div>

        <h1 className="text-3xl font-extrabold text-[#1a2f4c] mb-4">You are currently offline</h1>
        <p className="text-[#64748b] text-base md:text-lg mb-8 leading-relaxed">
          Some website features may be unavailable. Please reconnect to the internet to access the latest information and use real-time features like booking appointments.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <PrimaryButton onClick={handleReload} className="w-full sm:w-auto" icon={RefreshCcw}>
            Try Again
          </PrimaryButton>
          <Link href="/" className="w-full sm:w-auto">
            <SecondaryButton outline className="w-full" icon={Home}>
              Go to Home
            </SecondaryButton>
          </Link>
        </div>
      </div>
    </main>
  );
}
