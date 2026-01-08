import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { LenisProvider } from "@/components/providers/LenisProvider";

// Geometric Sans-Serif for body text and utility
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Geometric Sans-Serif for headings (GT Walsheim alternative)
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "L2 Design | Professional Web Design for Local Businesses",
    template: "%s | L2 Design",
  },
  description: "Professional web design for local businesses ready to stop being invisible online. Agency-quality websites at rates that actually make sense.",
  keywords: ["web design", "local business", "digital storefront", "affordable web design", "professional websites", "small business web design"],
  authors: [{ name: "L2 Design" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "L2 Design",
    title: "L2 Design | Professional Web Design for Local Businesses",
    description: "Professional web design for local businesses ready to stop being invisible online. Agency-quality websites at accessible rates.",
  },
  twitter: {
    card: "summary_large_image",
    title: "L2 Design | Professional Web Design",
    description: "Helping local businesses turn their reputation into online visibility.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${plusJakarta.variable} antialiased`}
      >
        <ThemeProvider>
          <LenisProvider>
            {/* Organic aura gradient backgrounds */}
            <div className="aura-gradients hidden md:block">
              <div className="aura-extra hidden md:block" style={{
                width: '450px',
                height: '450px',
                background: 'radial-gradient(circle, var(--aura-3) 0%, transparent 70%)',
                filter: 'blur(120px)',
                opacity: 'var(--aura-opacity)',
                top: '40%',
                left: '50%',
                transform: 'translateX(-50%)',
                transition: 'background 0.3s ease, opacity 0.3s ease',
              }}></div>
            </div>
            {children}
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
