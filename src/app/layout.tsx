// next
import type { Metadata } from 'next';

// clsx
import clsx from 'clsx';

// tailwind styles
import '@/styles/globals.css';

// fonts
import { bitter } from '@/ui/fonts';

// i18n provider
import I18nProvider from '@/components/common/I18nProvider';

// metadata
export const metadata: Metadata = {
  title: 'Sushi Doshira by Rashid Shamloo',
  description: 'Japanese Sushi Restaurant Website by Rashid Shamloo',
  keywords: [
    'sushi',
    'restaurant',
    'japanese',
    'japanese restaurant',
    'sushi restaurant',
    'rashid shamloo',
  ],
  icons: { icon: '/images/favicon.png' },
  metadataBase: new URL('https://teppan-salad-ann.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Sushi Doshira by Rashid Shamloo',
    siteName: 'Sushi Doshira by Rashid Shamloo',
    description: 'Japanese Sushi Restaurant Website by Rashid Shamloo',
    images: {
      url: '/images/screenshots/home.webp',
      alt: 'Sushi Doshira by Rashid Shamloo',
      width: 1200,
      height: 654,
      type: 'image/webp',
      secureUrl: '/images/screenshots/home.webp',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sushi Doshira by Rashid Shamloo',
    description: 'Japanese Sushi Restaurant Website by Rashid Shamloo',
    images: '/images/screenshots/home.webp',
    creator: '@rashidshamloo',
    site: '@rashidshamloo',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={clsx(
          'bg-bgGray text-gray-900',
          bitter.className,
        )}
      >
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}