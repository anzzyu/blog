'use client';

import { GrowingUnderline } from './growing-underline';
import { Logo } from './logo';

export function LogoAndRepo() {
  return (
    <div className="flex items-center gap-4">
      <Logo />
      <GrowingUnderline
        data-umami-event="footer-view-source"
        className="flex items-center gap-2"
      >
        <span className="font-medium">GG Bond的网站</span>
      </GrowingUnderline>
    </div>
  );
}
