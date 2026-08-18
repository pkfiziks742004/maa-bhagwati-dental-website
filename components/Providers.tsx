"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { AppointmentModalProvider } from "@/contexts/AppointmentModalContext";
import dynamic from "next/dynamic";
const AppointmentModal = dynamic(() => import("@/components/appointment/AppointmentModal").then(mod => mod.AppointmentModal));

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1 minute
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      <AppointmentModalProvider>
        {children}
        <AppointmentModal />
      </AppointmentModalProvider>
    </QueryClientProvider>
  );
}
