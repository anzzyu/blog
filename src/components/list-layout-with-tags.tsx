'use client';

import tagData from '@/lib/tag-data.json';
import { Blog } from '@/lib/type';
import { clsx } from 'clsx';
import { useState } from 'react';
import { Container } from './container';
import { PageHeader } from './page-header';
import { PostCardGridView } from './post-card-grid-view';
import { SnippetCard } from './snippet';
import { Tag } from './tags';

interface ListLayoutProps {
  title: string;
  description: React.ReactNode;
  posts: Blog[];
  snippets: Blog[];
}

export function ListLayoutWithTags({
  title,
  description,
  posts,
  snippets,
}: ListLayoutProps) {
  const hasBlogs = posts.length > 0;
  const hasSnippets = snippets.length > 0;
  const [view, setView] = useState<'blogs' | 'snippets'>(
    hasBlogs ? 'blogs' : 'snippets'
  );

  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title={title}
        description={description}
        className="border-b border-gray-200 dark:border-gray-700"
      />
      <div className="flex gap-x-12">
        <TagsList />
        <div className="py-5 md:py-10">
          <div className="mb-6 flex items-center gap-2 text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:mb-10 md:justify-end md:text-3xl">
            {hasBlogs && (
              <button
                className={clsx(
                  'underline-offset-4',
                  view === 'blogs'
                    ? 'underline'
                    : 'text-gray-400 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
                )}
                onClick={() => setView('blogs')}
              >
                Blogs
              </button>
            )}
            {hasBlogs && hasSnippets ? <span>/</span> : null}
            {hasSnippets && (
              <button
                className={clsx(
                  'underline-offset-4',
                  view === 'snippets'
                    ? 'underline'
                    : 'text-gray-400 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
                )}
                onClick={() => setView('snippets')}
              >
                Snippets
              </button>
            )}
          </div>
          {view === 'blogs' ? (
            <ul className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2">
              {posts.map((post) => (
                <li key={post.slug}>
                  <PostCardGridView post={post} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="space-y-10">
              {snippets.map((snippet) => (
                <SnippetCard snippet={snippet} key={snippet.slug} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

function TagsList() {
  const tagCounts = tagData as Record<string, number>;
  const tagKeys = Object.keys(tagCounts);
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a]);

  return (
    <div className="hidden max-h-screen w-[300px] shrink-0 py-5 md:flex md:py-10">
      <div className="h-full overflow-auto rounded bg-gray-50 dark:bg-gray-900/70 dark:shadow-gray-800/40">
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 px-6 py-4">
          {sortedTags.map((t) => {
            return (
              <li key={t} className="flex items-center gap-0.5">
                <Tag text={t} size="md" />
                <span className="text-gray-600 dark:text-gray-300">
                  ({tagCounts[t]})
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}