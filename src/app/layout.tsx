import type { Metadata } from "next";
import { DM_Sans, Space_Mono, Syne } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "FATI - AI For Africa | Intelligence Souveraine",
  description:
    "FATI propulse la souveraineté technologique du continent par l'intelligence artificielle avancée et l'analyse de données stratégique.",
  keywords: [
    "FATI",
    "AI",
    "Africa",
    "Intelligence Artificielle",
    "Data",
    "Souveraineté Numérique",
    "Transformation Digitale",
    "Sénégal",
  ],
  authors: [{ name: "FATI - AI For Africa" }],
  icons: {
    icon: "/logo.jpeg",
  },
  openGraph: {
    title: "FATI - AI For Africa | Intelligence Souveraine",
    description:
      "Accélérez votre performance avec l'IA et la Data. Solutions IA & Dat pour le continent africain.",
    url: "https://fati.ai",
    siteName: "FATI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FATI - AI For Africa",
    description:
      "Accélérez votre performance avec l'IA et la Data",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${spaceMono.variable} ${syne.variable} antialiased bg-background text-foreground neural-bg`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
