import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

import Header from '@/components/layout/Header';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Providers } from './providers';

// Define fonts
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Department of Political Science - GCU Lahore',
  description: 'Official website of the Department of Political Science at Government College University, Lahore',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans bg-gray-50 min-h-screen flex flex-col`}>
        <Providers>
          <Header />
          <Navbar />
          <main className='flex-grow'>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
