import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Web Designer from Lowell, MI',
  description: 'University of Michigan student from Lowell helping local businesses in Grand Rapids get found online. Professional web design, affordable rates, real results.',
  keywords: ['freelance web designer', 'University of Michigan', 'Lowell web designer', 'Grand Rapids web design', 'student web developer'],
  openGraph: {
    title: 'About | L2 Design',
    description: 'Web designer from Lowell, MI serving Grand Rapids and surrounding areas.',
    type: 'website',
    url: 'https://liamlincolnhol.agency/about',
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
    canonical: '/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
