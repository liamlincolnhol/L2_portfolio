import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'University of Michigan student helping local businesses bridge the gap between their stellar reputation and nonexistent digital presence.',
  openGraph: {
    title: 'About | L2 Design',
    description: 'freelance web designer helping local businesses get found online.',
    type: 'website',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
