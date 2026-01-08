import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Work',
  description: 'A curated collection of web design projects for local businesses. See how I help businesses go from invisible to irresistible online.',
  openGraph: {
    title: 'My Work | L2 Design',
    description: 'Portfolio of professional web design projects for local businesses.',
    type: 'website',
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
