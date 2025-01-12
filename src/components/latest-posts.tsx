'use client';

import { BlogWithTags } from '@/lib/type';
import { GrowingUnderline } from './growing-underline';
import { Link } from './link';
import { PostCardListView } from './post-card-list-view';

export function LatestPosts({
  blogWithTagsList,
}: {
  blogWithTagsList: BlogWithTags[];
}) {
  return (
    <div className="space-y-4 divide-y divide-gray-200 dark:divide-gray-700 md:mt-8 md:space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex text-2xl font-bold sm:text-2xl sm:leading-10 md:text-4xl">
          <span className="mr-2 md:mr-3">Latest posts</span>
        </div>
        <div className="flex items-center justify-end text-base font-medium leading-6">
          <Link href="/blog" className="" aria-label="All posts">
            <GrowingUnderline data-umami-event="all-posts">
              <span className="hidden md:inline-block">View all posts</span>
              <span className="md:hidden">More</span> &rarr;
            </GrowingUnderline>
          </Link>
        </div>
      </div>
      <ul className="space-y-12 divide-gray-200 pt-6 dark:divide-gray-700 md:space-y-20 md:pt-10">
        {!blogWithTagsList.length && 'No posts found.'}
        {blogWithTagsList.map((blogWithTags, idx) => (
          <li key={blogWithTags.blog.slug}>
            <PostCardListView
              blogWithTags={blogWithTags}
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
