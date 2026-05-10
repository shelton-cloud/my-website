import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bryanshelton.bio"),
  title: {
    default: "Bryan Shelton | Creative Technologist & AV Engineer",
    template: "%s | Bryan Shelton"
  },
  description: "Portfolio of Bryan Shelton, a Lead IT/AV Professional at Riot Games, Creative Technologist, and former touring musician based in Los Angeles.",
  keywords: ["Bryan Shelton", "AV Engineer", "IT Professional", "Creative Technologist", "Riot Games", "Los Angeles", "Music Production"],
  authors: [{ name: "Bryan Shelton" }],
  creator: "Bryan Shelton",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bryanshelton.bio",
    title: "Bryan Shelton | Creative Technologist & AV Engineer",
    description: "Lead IT/AV Professional at Riot Games blending technical infrastructure with creative media production.",
    siteName: "Bryan Shelton Portfolio",
    images: [
      {
        url: "/bryan-photo.jpg",
        width: 1200,
        height: 630,
        alt: "Bryan Shelton - Creative Technologist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bryan Shelton | Creative Technologist & AV Engineer",
    description: "Lead IT/AV Professional at Riot Games blending technical infrastructure with creative media production.",
    images: ["/bryan-photo.jpg"],
  },
  icons: {
    icon: "/bryan-photo.jpg",
    apple: "/bryan-photo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-surface text-on-surface">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
