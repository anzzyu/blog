'use client';

import { getBlogsByTagSlug, getTagBySlug, getTagCounts } from '@/lib/action';
import { Blog, Tag, TagCount } from '@/lib/type';
import { useEffect, useState } from 'react';
import { Container } from './container';
import { PageHeader } from './page-header';
import { PostCardGridView } from './post-card-grid-view';
import { TagLink } from './tags';

export function ListLayoutWithTags({ slug }: { slug: string }) {
  const [tag, setTag] = useState<Tag>();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [tagCounts, setTagCounts] = useState<TagCount[]>([]);

  useEffect(() => {
    const fetchTagData = async () => {
      const [tag, blogs, tagCounts] = await Promise.all([
        getTagBySlug(slug),
        getBlogsByTagSlug(slug),
        getTagCounts(),
      ]);
      setTag(tag as Tag);
      setBlogs(blogs);
      setTagCounts(tagCounts);
    };
    fetchTagData();
  }, [slug]);

  if (!tag) {
    return null;
  }

  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title={'#' + tag.name}
        description={
          <>
            关于<span className="ml-2 font-medium">{tag.name}</span>
          </>
        }
        className="border-b border-gray-200 dark:border-gray-700"
      />
      <div className="flex gap-x-12">
        <TagsList tagCounts={tagCounts} />
        <div className="py-5 md:py-10">
          <span className="mb-6 flex items-center gap-2 text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:mb-10 md:justify-end md:text-3xl">
            文章
          </span>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2">
            {blogs.map((blog) => (
              <li key={blog.slug}>
                <PostCardGridView post={blog} />
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
