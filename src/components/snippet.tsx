import { Blog } from '@/lib/type';
import { clsx } from 'clsx';
import { Brand, BrandsMap } from './brand';
import { GradientBorder } from './gradient-border';
import { GrowingUnderline } from './growing-underline';
import { Link } from './link';
import { TiltedGridBackground } from './tilted-grid-background';

export function SnippetCard({ snippet }: { snippet: Blog }) {
  const { icon, summary, title, slug } = snippet;
  return (
    <GradientBorder className="rounded-2xl">
      <Link
        href={`/snippets/${slug}`}
        title={title}
        className={clsx([
          'relative flex h-full rounded-2xl',
          'bg-zinc-50 dark:bg-white/5',
          'transition-shadow hover:shadow-md',
          'hover:shadow-zinc-900/5 dark:hover:shadow-black/15',
        ])}
      >
        <TiltedGridBackground className="inset-0" />
        <Brand
          name={icon as keyof typeof BrandsMap}
          as="icon"
          className="absolute -top-5 left-4 z-10 h-12 w-12 text-gray-900 dark:text-white"
        />
        <div className="relative w-full px-4 pb-6 pt-6">
          <h3 className="mt-4 text-xl font-semibold leading-7">
            <GrowingUnderline>{title}</GrowingUnderline>
          </h3>
          <p className="mt-1.5 line-clamp-2 text-zinc-600 dark:text-zinc-400">
            {summary}
          </p>
        </div>
      </Link>
    </GradientBorder>
  );
}
