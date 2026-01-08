import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: "Ready to get your business online? Get in touch to discuss your website needs. Fast turnaround, affordable rates.",
  openGraph: {
    title: 'Contact | L2 Design',
    description: "Get in touch to start your web design project.",
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
