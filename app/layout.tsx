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
  metadataBase: new URL('https://liamlincolnhol.agency'),
  title: {
    default: "L2 Design | Web Design Grand Rapids, Lowell & Cascade, MI",
    template: "%s | L2 Design",
  },
  description: "Professional web design for local businesses in Grand Rapids, Lowell, Cascade, and Ada, MI. Agency-quality websites at affordable rates. Custom design, fast turnaround, real results.",
  keywords: ["web design Grand Rapids", "Grand Rapids web designer", "web developer Grand Rapids", "custom website design Grand Rapids", "web design Lowell MI", "Cascade web designer", "Ada Michigan web design", "affordable web design Grand Rapids", "small business web design Grand Rapids", "student web designer Michigan"],
  authors: [{ name: "L2 Design" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "L2 Design",
    title: "L2 Design | Professional Web Design Grand Rapids, Michigan",
    description: "Professional web design for local businesses in Grand Rapids, Lowell, and Cascade. Agency-quality websites at accessible rates.",
    url: "https://liamlincolnhol.agency",
    images: [
      {
        url: '/og-image.jpeg',
        width: 1200,
        height: 630,
        alt: 'L2 Design - Web Design Grand Rapids, Michigan',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "L2 Design | Web Design Grand Rapids, MI",
    description: "Professional websites for local businesses in Grand Rapids and surrounding areas.",
    images: ['/og-image.jpeg'],
  },
  other: {
    'geo.region': 'US-MI',
    'geo.placename': 'Grand Rapids, Lowell, Cascade, Ada',
    'geo.position': '42.9336;-85.3417',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness Schema - Grand Rapids Area Focus
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "L2 Design",
    "description": "Professional web design for local businesses in Grand Rapids and surrounding areas. Custom websites, fast deployment, and affordable pricing.",
    "url": "https://liamlincolnhol.agency",
    "logo": "https://liamlincolnhol.agency/logo.png",
    "image": "https://liamlincolnhol.agency/og-image.jpeg",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lowell",
      "addressRegion": "MI",
      "postalCode": "49331",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "42.9336",
      "longitude": "-85.3417"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Grand Rapids",
        "sameAs": "https://en.wikipedia.org/wiki/Grand_Rapids,_Michigan"
      },
      {
        "@type": "City",
        "name": "Lowell"
      },
      {
        "@type": "City",
        "name": "Cascade"
      },
      {
        "@type": "City",
        "name": "Ada"
      },
      {
        "@type": "City",
        "name": "Wyoming"
      },
      {
        "@type": "City",
        "name": "Kentwood"
      },
      {
        "@type": "City",
        "name": "Grandville"
      }
    ],
    "email": "liamlincolnholagency@gmail.com",
    "founder": {
      "@type": "Person",
      "name": "Liam Lincoln Hol",
      "jobTitle": "Freelance Web Designer",
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "University of Michigan"
      }
    },
    "serviceType": [
      "Web Design",
      "Website Development",
      "SEO Services",
      "Custom Website Design",
      "Small Business Websites"
    ],
    "knowsAbout": [
      "Web Design",
      "Next.js Development",
      "Local Business Marketing",
      "SEO",
      "Grand Rapids Business"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
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
