import Header from '@/components/header';
import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import { ReactElement } from 'react';
import './globals.scss';

export const metadata: Metadata = {
  title: 'David Carek',
  description: 'Portfolio website',
};

const nunito = Nunito_Sans({ subsets: ['latin'] });

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: Props): ReactElement {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
