import type { Metadata, ResolvingMetadata } from 'next';

interface IGuitarPageProps {
  params: {
    id: string;
  };
}

export function generateMetadata({ params }: IGuitarPageProps, parent: ResolvingMetadata) {
  return {
    title: `Гитара ${params.id}`,
    description: 'Гитара',
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
