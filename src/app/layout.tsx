import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

import '@/styles/globals.scss';
import { metadata as siteMetadata } from '@/config/metadata';

// Font configurations
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

// Export metadata from configuration
export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${playfair.variable}`}
      data-theme='light'
      suppressHydrationWarning
    >
      <body>
        <div className='main-layout'>{children}</div>
      </body>
    </html>
  );
}
