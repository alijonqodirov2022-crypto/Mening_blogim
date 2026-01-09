import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Pearl of Asia | Customs Clearance Services",
    template: "%s | Pearl of Asia"
  },
  description: "Pearl of Asia (AlIJON QODIROV) - Professional Customs Broker: Ваш надежный брокер, Таможенное оформление грузов, Expert in Declaration. 10 yillik tajriba.",
  keywords: ["Pearl of Asia", "Alijon Qodirov", "IMPORT", "EXPORT", "`Bojxona rasmiylashtiruvi xizmati", "Yuklarni ishonchli deklaratsiyalash", "Expert in Declaration"],
  authors: [{ name: "Alijon Qodirov" }],
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
    title: "Pearl of Asia | Customs Clearance Services",
    description: "Pearl of Asia | Bojxona Rasmiylashtiruvi ✅ Barcha turdagi yuklarni deklaratsiyalash ✅ Eksport va Import operatsiyalari ✅ Qisqa muddatlarda hujjatlarni tayyorlash ✅ Professional bojxona maslahatlari 🌐 Biz bilan yukingiz chegarada to'xtab qolmaydi!",
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