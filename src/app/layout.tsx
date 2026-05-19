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
  title: "FATI - AI For Africa | IA, Data et Transformation Digitale",
  description:
    "FATI est une startup panafricaine spécialisée en intelligence artificielle, data et transformation digitale.",
  keywords: [
    "FATI",
    "AI",
    "Africa",
    "Intelligence Artificielle",
    "Data",
    "Transformation Digitale",
    "Sénégal",
  ],
  authors: [{ name: "FATI - AI For Africa" }],
  icons: {
    icon: "/logo.jpeg",
  },
  openGraph: {
    title: "FATI - AI For Africa | IA, Data et Transformation Digitale",
    description:
      "Startup panafricaine spécialisée en intelligence artificielle, data et transformation digitale.",
    url: "https://fati.ai",
    siteName: "FATI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FATI - AI For Africa",
    description:
      "IA, data et transformation digitale pour des solutions adaptées aux réalités africaines.",
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
