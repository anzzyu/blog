'use client';

import { HEADER_NAV_LINKS } from '@/lib/data';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { Container } from './container';
import { GrowingUnderline } from './growing-underline';
import { Link } from './link';
import { Logo } from './logo';
import { SearchButton } from './search';
import { ThemeSwitcher } from './theme-switcher';

export function Header() {
  const pathname = usePathname();

  return (
    <Container
      as="header"
      className={clsx(
        'bg-white/75 py-2 backdrop-blur dark:bg-dark/75',
        'shadow-sm saturate-100 md:rounded-2xl',
        'sticky top-2 z-50 lg:top-3'
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <Logo />
        <div className="flex items-center gap-4">
          <div className="hidden gap-1.5 sm:flex">
            {HEADER_NAV_LINKS.map(({ title, href }) => {
              const isActive = pathname.startsWith(href);
              return (
                <Link key={title} href={href} className="px-3 py-1 font-medium">
                  <GrowingUnderline
                    className={clsx(isActive && 'bg-[length:100%_50%]')}
                    data-umami-event={`nav-${href.replace('/', '')}`}
                  >
                    {title}
                  </GrowingUnderline>
                </Link>
              );
            })}
            {/* <MoreLinks /> */}
          </div>
          <div
            data-orientation="vertical"
            role="separator"
            className="hidden h-4 w-px shrink-0 bg-gray-200 dark:bg-gray-600 md:block"
          />
          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <SearchButton />
            {/* <MobileNav /> */}
          </div>
        </div>
      </div>
    </Container>
  );
}
