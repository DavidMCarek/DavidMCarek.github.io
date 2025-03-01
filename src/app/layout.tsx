import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import './globals.scss';
import Header from '@/components/header';

export const metadata: Metadata = {
  title: 'David Carek',
  description: 'Portfolio website',
};

const nunito = Nunito_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
