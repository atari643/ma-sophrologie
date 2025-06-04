import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sophrologie & Bien-être | Séances individuelles et collectives",
  description: "Découvrez la sophrologie avec une praticienne certifiée. Séances individuelles, ateliers de groupe, et accompagnement en ligne pour votre bien-être et gestion du stress.",
  keywords: "sophrologie, relaxation, gestion du stress, bien-être, méditation, développement personnel",
  authors: [{ name: "Sophrologue Certifiée" }],
  openGraph: {
    title: "Sophrologie & Bien-être",
    description: "Votre accompagnement sophrologique personnalisé",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-blue-50 via-white to-purple-50`}
      >
        {children}
      </body>
    </html>
  );
}
