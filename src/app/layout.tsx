import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `Joe Bob's Summer School - Final Exam`,
  description: 'Answers may or may not be correct (:',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" type="image/x-icon" href="./favicon.ico" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
