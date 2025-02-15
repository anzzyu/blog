import { MoveLeft } from 'lucide-react';
import { GrowingUnderline } from './growing-underline';
import { Link } from './link';

export function BackToPosts({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <Link href="/blog" className="flex w-fit items-center gap-3">
        <MoveLeft strokeWidth={1.5} />
        <GrowingUnderline data-umami-event="discuss-on-x">
          {label}
        </GrowingUnderline>
      </Link>
    </div>
  );
}
