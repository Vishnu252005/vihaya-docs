import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: "Vihaya Documentation",
    template: "%s | Vihaya Documentation",
  },
  description: "Comprehensive documentation for Vihaya - The ultimate engineering notes app, AI study assistant, and project/event management platform. Learn how to manage events, create notes, and use AI features.",
  keywords: [
    "Vihaya",
    "Vihaya Documentation",
    "Event Management",
    "Engineering Notes",
    "AI Assistant",
    "Event Registration",
    "QR Code Check-in",
    "Event Analytics",
    "Documentation",
    "Tech Events",
    "Study Assistant",
    "Markdown Notes",
  ],
  authors: [{ name: "Vihaya Team" }],
  creator: "Vihaya",
  publisher: "Vihaya",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://docs.vihaya.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Vihaya Documentation",
    title: "Vihaya Documentation",
    description: "Comprehensive documentation for Vihaya - The ultimate engineering notes app, AI study assistant, and project/event management platform.",
    images: [
      {
        url: "/images/logo_only.png",
        width: 1200,
        height: 630,
        alt: "Vihaya Documentation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vihaya Documentation",
    description: "Comprehensive documentation for Vihaya - The ultimate engineering notes app, AI study assistant, and project/event management platform.",
    images: ["/images/logo_only.png"],
    creator: "@vihaya",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/images/logo_only.png", type: "image/png" },
    ],
    shortcut: "/images/logo_only.png",
    apple: "/images/logo_only.png",
  },
  verification: {
    google: "OarQUWPSYaByQoOu9qNN9KKugeYywIN1o9dtc_BADGY",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <meta name="google-site-verification" content="OarQUWPSYaByQoOu9qNN9KKugeYywIN1o9dtc_BADGY" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <StructuredData />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
