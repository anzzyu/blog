import clsx from 'clsx';
import type { Metadata } from 'next';
import { ZCOOL_KuaiLe } from 'next/font/google';

import '@/app/css/globals.css';
import '@/app/css/twemoji.css';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';

const FONT_ZCOOL_KUAILE = ZCOOL_KuaiLe({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  variable: '--font-zcool-kuaile',
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={clsx('scroll-smooth', FONT_ZCOOL_KUAILE.variable)}
      suppressHydrationWarning
    >
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
