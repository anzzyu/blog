import { Tag } from '@/lib/type';
import { clsx } from 'clsx';
import { Link } from './link';

export function TagsList({ tags }: { tags: Tag[] }) {
  if (!tags || tags.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2 md:gap-3">
      {tags.map((tag) => (
        <TagLink key={tag.id} tag={tag} />
      ))}
    </div>
  );
}

export function TagLink({
  tag,
  size = 'sm',
}: {
  tag: Tag;
  size?: 'sm' | 'md';
}) {
  return (
    <Link
      href={`/tag/${tag.slug}`}
      className={clsx([
        'rounded-lg px-2 py-0.5 font-semibold',
        'bg-slate-100 text-gray-600 hover:text-gray-800',
        'dark:bg-gray-700 dark:text-gray-300',
        size === 'sm' ? 'text-sm' : 'text-base',
      ])}
    >
      <span data-umami-event={`tag-${tag.name}`}>#{tag.name}</span>
    </Link>
  );
}
