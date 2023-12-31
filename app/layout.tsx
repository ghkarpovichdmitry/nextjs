import './globals.css';
import {Footer} from '@/app/components/Footer/Footer';
import { Header } from '@/app/components/Header/Header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextJS application',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
      <main className='container main-section align-center'>
          {children}
      </main>
      <Footer/>
      </body>
    </html>
  );
}
