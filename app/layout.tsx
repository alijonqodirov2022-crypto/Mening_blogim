import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Pearl of Asia | Professional IT-Servis Markazi",
    template: "%s | Pearl of Asia"
  },
  description: "Pearl of Asia (Alidov Dev) - Professional IT xizmatlari: Telefon proshivka, blokdan ochish, SQL bazalar, server va tarmoq sozlash. 10 yillik tajriba.",
  keywords: ["Pearl of Asia", "Alidov Dev", "telefon proshivka", "icloud ochish", "SQL database Uzbekistan", "tarmoq qurish", "IT autsorsing"],
  authors: [{ name: "Alidov Dev" }],
  creator: "Pearl of Asia Team",
  metadataBase: new URL('https://pearlofasia.uz'),
  alternates: {
    canonical: '/',
    languages: {
      'uz-UZ': '/uz',
      'ru-RU': '/ru',
      'en-US': '/en',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Pearl of Asia | Professional IT xizmatlar",
    description: "Texnik muhandislik va biznes uchun IT yechimlar. Telefon ochishdan tortib murakkab serverlargacha.",
    url: 'https://pearlofasia.uz',
    siteName: 'Pearl of Asia',
    images: [
      {
        url: '/og-image.jpg', // Public papkasiga 1200x630 rasm tashlang
        width: 1200,
        height: 630,
        alt: 'Pearl of Asia IT Services',
      },
    ],
    locale: 'uz_UZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pearl of Asia | IT-Servis",
    description: "Professional IT muhandislik xizmatlari",
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <head>
        {/* Google qidiruvida sayt rangini ko'rsatish uchun */}
        <meta name="theme-color" content="#1d4ed8" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}