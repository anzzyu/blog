import clsx from 'clsx';
import type { Metadata } from 'next';
import { ZCOOL_KuaiLe } from 'next/font/google';

import '@/app/css/globals.css';
import '@/app/css/twemoji.css';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import 'react-medium-image-zoom/dist/styles.css';

const FONT_ZCOOL_KUAILE = ZCOOL_KuaiLe({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  variable: '--font-zcool-kuaile',
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.qingyu.com'),
  title: {
    default: 'GG Bond',
    template: `%s | GG Bond`,
  },
  description: 'GG Bond的网站',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const basePath = process.env.BASE_PATH || '';

  return (
    <html
      lang="en"
      className={clsx('scroll-smooth', FONT_ZCOOL_KUAILE.variable)}
      suppressHydrationWarning
    >
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${basePath}/static/favicons/favicon.ico`}
      />

      <body
        className={clsx([
          'antialiased',
          'relative min-h-screen pl-[calc(100vw-100%)]',
          'flex flex-col',
          'bg-white text-gray-900',
          'dark:bg-dark dark:text-gray-100',
        ])}
      >
        {/* <TiltedGridBackground className="inset-x-0 top-0 z-[-1] h-[50vh]" /> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="mb-auto grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
