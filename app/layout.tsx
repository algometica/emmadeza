import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Emma's World Championship Journey | IDO Dance Support",
  description: 'Support Emma as she represents Canada at the IDO World Dance Championship. Get exclusive limited-edition gear and be part of her championship story.',
  keywords: 'Emma, IDO, World Dance Championship, Canada, Hip-Hop, Dance, Support',
  openGraph: {
    title: "Emma's World Championship Journey",
    description: 'Support Emma as she represents Canada at the IDO World Dance Championship',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}