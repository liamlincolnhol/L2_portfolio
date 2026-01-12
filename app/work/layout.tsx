import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio - Web Design Projects Grand Rapids',
  description: 'Portfolio of professional web design projects for local businesses in Michigan. See real examples of custom websites for Grand Rapids area companies.',
  keywords: ['web design portfolio', 'Grand Rapids web designer', 'Michigan website examples', 'local business websites', 'web design case studies'],
  openGraph: {
    title: 'Portfolio | L2 Design',
    description: 'Professional web design portfolio - Grand Rapids, MI',
    type: 'website',
    url: 'https://liamlincolnhol.agency/work',
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
    canonical: '/work',
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
