import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vihaya Documentation",
  description: "Comprehensive documentation for Vihaya - The ultimate engineering notes app, AI study assistant, and project/event management platform.",
  icons: {
    icon: [
      { url: "/images/logo_only.png", type: "image/png" },
    ],
    shortcut: "/images/logo_only.png",
    apple: "/images/logo_only.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
