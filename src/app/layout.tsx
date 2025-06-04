import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClientHydrationWrapper } from "../components/client-hydration-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muriel Artigala - Sophrologue à Martignas-sur-Jalle | Bordeaux Métropole",
  description: "Muriel Artigala, sophrologue diplômée ISEBA Bordeaux. Séances individuelles et collectives à Martignas-sur-Jalle. Gestion du stress, sommeil, confiance en soi. 34 mutuelles partenaires.",
  keywords: "sophrologue Martignas-sur-Jalle, sophrologie Bordeaux, gestion stress, améliorer sommeil, confiance en soi, Muriel Artigala, ISEBA Bordeaux, séances sophrologie, relaxation, bien-être Gironde",
  authors: [{ name: "Muriel Artigala - Sophrologue Certifiée" }],
  openGraph: {
    title: "Muriel Artigala - Sophrologue à Martignas-sur-Jalle",
    description: "Sophrologue diplômée ISEBA Bordeaux. Accompagnement personnalisé pour votre bien-être.",
    type: "website",
    locale: "fr_FR",
    url: "https://muriel-artigala.fr",
    siteName: "Muriel Artigala - Sophrologie",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muriel Artigala - Sophrologue à Martignas-sur-Jalle",
    description: "Sophrologue diplômée ISEBA Bordeaux. Séances individuelles et collectives.",
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-blue-50 via-white to-purple-50`}
      >
        <ClientHydrationWrapper>
          {children}
        </ClientHydrationWrapper>
      </body>
    </html>
  );
}
