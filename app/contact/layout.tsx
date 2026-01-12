import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Get Your Website Built | Grand Rapids',
  description: "Ready to get your business online? Contact L2 Design for professional web design in Grand Rapids. Serving Lowell, Cascade, and Ada. Free consultation.",
  keywords: ['contact web designer', 'hire web designer Grand Rapids', 'Grand Rapids web design', 'Lowell web designer', 'get website quote'],
  openGraph: {
    title: 'Contact | L2 Design',
    description: 'Get your Grand Rapids business online today.',
    type: 'website',
    url: 'https://liamlincolnhol.agency/contact',
    images: [
      {
        url: '/og-image.jpeg',
        width: 1200,
        height: 630,
        alt: 'L2 Design - Web Design Grand Rapids, Michigan',
      },
    ],
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
