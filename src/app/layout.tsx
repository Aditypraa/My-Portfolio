import type { Metadata } from 'next';
import { Inter, Calistoga } from 'next/font/google';
import { twMerge } from 'tailwind-merge';
import './globals.css';
import { Header } from './Header';
import { Footer } from './Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const calistoga = Calistoga({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Portfolio | Aditya Pratama',
  description: 'My Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="Ap.png" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          'bg-gray-900 text-white antialiased font-sans overflow-x-hidden'
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
