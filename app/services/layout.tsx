import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Design Services - Grand Rapids, MI',
  description: 'Custom web design, fast deployment, and SEO optimization for local businesses in Grand Rapids. Professional websites in 2 weeks. Serving Lowell, Cascade, and Ada.',
  keywords: ['web design services', 'custom website design Grand Rapids', 'local business websites', 'SEO optimization Grand Rapids', 'fast website deployment'],
  openGraph: {
    title: 'Services | L2 Design',
    description: 'Professional web design services for Grand Rapids businesses.',
    type: 'website',
    url: 'https://liamlincolnhol.agency/services',
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
    canonical: '/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
