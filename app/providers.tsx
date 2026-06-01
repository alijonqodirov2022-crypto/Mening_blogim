"use client";

import { ReactNode } from "react";
import { LanguageProvider } from "@/app/contexts/LanguageContext";

export default function Providers({ children }: { children: ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
