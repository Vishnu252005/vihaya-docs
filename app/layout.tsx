import type { Metadata } from "next";
import { DM_Sans, Bricolage_Grotesque } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

// ⚠️ THE SAME TWO FACES THE EVENTS SITE USES — DM Sans for body, Bricolage
// Grotesque for display. This site was on Inter, which is most of why it read
// as a different product even before the palette was fixed.
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "optional",
  weight: ["400", "500", "600", "700"],
  preload: true,
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "optional",
  weight: ["600", "700", "800"],
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Vihaya Events Documentation",
    template: "%s | Vihaya Events Docs",
  },
  description: "Documentation for Vihaya Events — the event ticketing platform. Create events, manage registrations and check-in, and build on the REST API with official SDKs for seven languages.",
  keywords: [
    "Vihaya Events",
    "Vihaya Events Documentation",
    "Event Ticketing API",
    "Event Management",
    "Event Registration",
    "QR Code Check-in",
    "Event Analytics",
    "Ticketing API India",
    "Headless ticketing",
    "Razorpay events",
    "Event API SDK",
    "Developer Documentation",
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
    title: "Vihaya Events Documentation",
    description: "Documentation for Vihaya Events — the event ticketing platform. Create events, manage registrations and check-in, and build on the REST API with official SDKs for seven languages.",
    images: [
      {
        url: "/images/logos/vihaya-events-logo.png",
        width: 1200,
        height: 630,
        alt: "Vihaya Documentation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vihaya Events Documentation",
    description: "Documentation for Vihaya Events — the event ticketing platform. Create events, manage registrations and check-in, and build on the REST API with official SDKs for seven languages.",
    images: ["/images/logos/vihaya-events-logo.png"],
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
      { url: "/images/logos/vihaya-events-logo.png", type: "image/png" },
    ],
    shortcut: "/images/logos/vihaya-events-logo.png",
    apple: "/images/logos/vihaya-events-logo.png",
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
    <html lang="en" suppressHydrationWarning className={`${dmSans.variable} ${bricolage.variable}`}>
      <head>
        <meta name="google-site-verification" content="OarQUWPSYaByQoOu9qNN9KKugeYywIN1o9dtc_BADGY" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <StructuredData />
      </head>
      <body className={dmSans.className}>
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
