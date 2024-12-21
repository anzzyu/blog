import { clsx } from 'clsx';
import { AddressAndTime } from './address-and-time';
import { Container } from './container';
import { FooterBottom } from './footer-bottom';
import { FooterNav } from './footer-nav';
import { LogoAndRepo } from './logo-and-repo';
import { Signature } from './signature';

export function Footer() {
  return (
    <Container as="footer" className="mb-4 mt-8 md:mt-16">
      <div
        className={clsx([
          'grid grid-cols-1 gap-x-8 gap-y-8 py-8 md:grid-cols-2 xl:grid-cols-3',
          'border-t border-gray-200 dark:border-gray-700',
        ])}
      >
        <div className="col-span-1 space-y-4 xl:col-span-2">
          <LogoAndRepo />
          <div className="italic text-gray-500 dark:text-gray-400">
            A personal space on the cloud where I document my programming
            journey, sharing lessons, insights, and resources for fellow
            developers.
          </div>
          <div className="pt-4">
            <div className="flex gap-8 md:gap-20">
              <Signature className="h-20 w-32 md:w-40" />
              <AddressAndTime />
            </div>
          </div>
        </div>
        <FooterNav />
      </div>
      <FooterBottom />
    </Container>
  );
}
