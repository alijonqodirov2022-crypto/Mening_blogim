import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Pearl of Asia — Bojxona brokerligi | Customs Brokerage",
  description:
    "Pearl of Asia — O‘zbekistondagi yetakchi litsenziyalangan bojxona operatori. Bojxona rasmiylashtiruvi, to‘lovlarni optimallashtirish va xalqaro logistika.",
  keywords: [
    "bojxona",
    "broker",
    "customs",
    "logistika",
    "Pearl of Asia",
    "TN VED",
    "Uzbekistan customs",
  ],
  openGraph: {
    title: "Pearl of Asia — Bojxona brokerligi",
    description:
      "15 yillik tajriba. Bojxona to‘lovlarini 20–30% kamaytiramiz. Litsenziyalangan operator №0042.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className={`${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
