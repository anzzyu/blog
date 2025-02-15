import clsx from 'clsx';

import { BlogWithTags } from '@/lib/type';
import { formatDate } from '@/lib/utils';
import { format } from 'date-fns';
import { GritBackground } from './grit-background';
import { GrowingUnderline } from './growing-underline';
import { Image } from './image';
import { Link } from './link';
import { TagsList } from './tags';

export function PostCardListView({
  blogWithTags,
  loading,
}: {
  blogWithTags: BlogWithTags;
  loading?: 'lazy' | 'eager';
}) {
  return (
    <article>
      <div className="flex flex-col gap-2 space-y-3 md:flex-row md:gap-8">
        <Link
          href={`/blog/${blogWithTags.blog.slug}`}
          className={clsx([
            'relative block shrink-0',
            'h-auto w-full md:h-80 md:w-72',
            'pb-3 pl-0 pr-3 pt-0',
            'transition-all ease-in-out hover:pb-2 hover:pl-1 hover:pr-2 hover:pt-1',
          ])}
        >
          <Image
            src={blogWithTags.blog.cover}
            alt={blogWithTags.blog.title}
            width={500}
            height={500}
            className="aspect-video h-full w-full rounded-xl shadow-2xl"
            loading={loading}
          />
          <GritBackground
            className={clsx([
              'bottom-0 left-3 right-0 top-3',
              'rounded-xl border-2 border-gray-800 dark:border-gray-400',
            ])}
          />
        </Link>
        <div className="space-y-4 md:space-y-5">
          <div className="space-y-4 md:space-y-6">
            <div className="space-y-3">
              <dl className="text-sm">
                <dt className="sr-only">发布于</dt>
                <dd className="font-medium leading-6 text-gray-500 dark:text-gray-400">
                  <time dateTime={format(blogWithTags.blog.date, 'yyyy-MM-dd')}>
                    {formatDate(format(blogWithTags.blog.date, 'yyyy-MM-dd'))}
                  </time>
                  <span className="mx-2 text-gray-400">/</span>
                  <span>{blogWithTags.blog.readingTime} 分钟读完</span>
                </dd>
              </dl>
              <h2 className="pb-1 text-xl font-bold tracking-tight md:text-2xl">
                <Link
                  href={`/blog/${blogWithTags.blog.slug}`}
                  className="text-gray-900 dark:text-gray-100"
                >
                  <GrowingUnderline
                    data-umami-event="latest-post-title"
                    duration={500}
                  >
                    {blogWithTags.blog.title}
                  </GrowingUnderline>
                </Link>
              </h2>
              <TagsList tags={blogWithTags.tags} />
            </div>
            <div className="line-clamp-2 text-gray-500 dark:text-gray-400 md:line-clamp-3">
              {blogWithTags.blog.summary}
            </div>
          </div>
          <div className="text-base font-medium leading-6">
            <Link
              href={`/blog/${blogWithTags.blog.slug}`}
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300"
              aria-label={`Read "${blogWithTags.blog.title}"`}
            >
              <GrowingUnderline data-umami-event="latest-post-read-more">
                开始阅读 →
              </GrowingUnderline>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
