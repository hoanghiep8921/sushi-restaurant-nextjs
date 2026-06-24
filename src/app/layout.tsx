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
  title: 'Japanese Teppan Salad Ann',
  description: 'Japanese Teppan Salad Ann',
  keywords: [
    'salad',
    'restaurant',
    'japanese',
    'japanese restaurant',
    'salad restaurant',
  ],
  icons: { icon: '/images/favicon.png' },
  metadataBase: new URL('https://teppan-salad-ann.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Japanese Teppan Salad Ann',
    siteName: 'Japanese Teppan Salad Ann',
    description: 'Japanese Teppan Salad Ann',
    images: {
      url: '/images/screenshots/home.webp',
      alt: 'Japanese Teppan Salad Ann',
      width: 1200,
      height: 654,
      type: 'image/webp',
      secureUrl: '/images/screenshots/home.webp',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Japanese Teppan Salad Ann',
    description: 'Japanese Teppan Salad Ann',
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