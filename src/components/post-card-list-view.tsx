import clsx from 'clsx';

import { getTagsByBlogId } from '@/lib/action';
import { Blog, Tag } from '@/lib/type';
import { formatDate } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { GritBackground } from './grit-background';
import { GrowingUnderline } from './growing-underline';
import { Image } from './image';
import { Link } from './link';
import { TagsList } from './tags';

export function PostCardListView({
  post,
  loading,
}: {
  post: Blog;
  loading?: 'lazy' | 'eager';
}) {
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    const fetchTags = async () => {
      const tags = await getTagsByBlogId(post.id!);
      setTags(tags);
    };
    fetchTags();
  }, [post.id]);

  return (
    <article>
      <div className="flex flex-col gap-2 space-y-3 md:flex-row md:gap-8">
        <Link
          href={`/blog/${post.slug}`}
          className={clsx([
            'relative block shrink-0',
            'h-auto w-full md:h-80 md:w-72',
            'pb-3 pl-0 pr-3 pt-0',
            'transition-all ease-in-out hover:pb-2 hover:pl-1 hover:pr-2 hover:pt-1',
          ])}
        >
          <Image
            src={post.cover}
            alt={post.title}
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
                <dt className="sr-only">Published on</dt>
                <dd className="font-medium leading-6 text-gray-500 dark:text-gray-400">
                  <time dateTime={post.date.toISOString()}>
                    {formatDate(post.date.toISOString())}
                  </time>
                  <span className="mx-2 text-gray-400">/</span>
                  <span>{post.readingTime} mins read</span>
                </dd>
              </dl>
              <h2 className="pb-1 text-xl font-bold tracking-tight md:text-2xl">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-gray-900 dark:text-gray-100"
                >
                  <GrowingUnderline
                    data-umami-event="latest-post-title"
                    duration={500}
                  >
                    {post.title}
                  </GrowingUnderline>
                </Link>
              </h2>
              <TagsList tags={tags} />
            </div>
            <div className="line-clamp-2 text-gray-500 dark:text-gray-400 md:line-clamp-3">
              {post.summary}
            </div>
          </div>
          <div className="text-base font-medium leading-6">
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300"
              aria-label={`Read "${post.title}"`}
            >
              <GrowingUnderline data-umami-event="latest-post-read-more">
                Read article →
              </GrowingUnderline>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
