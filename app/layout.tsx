import type { Metadata } from "next";
import "./globals.css";

// MANA SHU YER GOOGLE UCHUN ENG MUHIMI
export const metadata: Metadata = {
  title: "Pearl of Asia | Alidov Dev IT xizmatlari",
  description: "Professional IT xizmatlar: Telefon proshivka, blokdan ochish, SQL bazalar va tarmoq sozlash. O'zbekiston bo'ylab xizmat ko'rsatamiz.",
  keywords: "Pearl of Asia, Alidov Dev, telefon ochish, proshivka, SQL database, IT xizmatlar, texnik muhandis",
  alternates: {
    canonical: 'https://pearlofasia.uz',
  },
  openGraph: {
    title: "Pearl of Asia | Alidov Dev",
    description: "Texnik muhandis va IT xizmatlar",
    url: 'https://pearlofasia.uz',
    siteName: 'Pearl of Asia',
    images: [
      {
        url: 'https://pearlofasia.uz/og-image.jpg', // Keyinchalik rasm qo'ysangiz bo'ladi
        width: 1200,
        height: 630,
      },
    ],
    locale: 'uz_UZ',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  );
}