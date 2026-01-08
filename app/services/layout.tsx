import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Professional web design services for local businesses. Digital storefronts that get your phone ringing and turn searches into customers.',
  openGraph: {
    title: 'Services | L2 Design',
    description: 'Digital storefront services for local businesses that deserve to be found online.',
    type: 'website',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
