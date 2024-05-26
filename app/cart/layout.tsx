import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Корзина',
  description: 'Корзина',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
