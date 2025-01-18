'use client';

import { Blog, TagCount } from '@/lib/type';
import { Container } from './container';
import { PageHeader } from './page-header';
import { PostCardGridView } from './post-card-grid-view';
import { TagLink } from './tags';

interface ListLayoutProps {
  title: string;
  description: React.ReactNode;
  posts: Blog[];
  tagCounts: TagCount[];
}

export function ListLayoutWithTags({
  title,
  description,
  posts,
  tagCounts,
}: ListLayoutProps) {
  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title={title}
        description={description}
        className="border-b border-gray-200 dark:border-gray-700"
      />
      <div className="flex gap-x-12">
        <TagsList tagCounts={tagCounts} />
        <div className="py-5 md:py-10">
          <span className="mb-6 flex items-center gap-2 text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:mb-10 md:justify-end md:text-3xl">
            文章
          </span>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2">
            {posts.map((post) => (
              <li key={post.slug}>
                <PostCardGridView post={post} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}

function TagsList({ tagCounts }: { tagCounts: TagCount[] }) {
  return (
    <div className="hidden max-h-screen w-[300px] shrink-0 py-5 md:flex md:py-10">
      <div className="h-full overflow-auto rounded bg-gray-50 dark:bg-gray-900/70 dark:shadow-gray-800/40">
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 px-6 py-4">
          {tagCounts.map((t) => {
            return (
              <li key={t.slug} className="flex items-center gap-0.5">
                <TagLink tag={t} size="md" />
                <span className="text-gray-600 dark:text-gray-300">
                  ({t.count})
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
