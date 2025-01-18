import '@/app/css/blog-content.css';
import { getPrevAndNextBlog, getTagsByBlogId } from '@/lib/action';
import { Blog, Tag } from '@/lib/type';
import { useEffect, useState } from 'react';
import { BackToPosts } from './back-to-posts';
import { BlogMeta } from './blog-meta';
import { Container } from './container';
import { GradientDivider } from './gradient-divider';
import { Image } from './image';
import { PostNav } from './post-nav';
import { PostTitle } from './post-title';
import { ScrollButtons } from './scroll-buttons';
import { TagsList } from './tags';
import { TableOfContents } from './toc';

export function PostLayout({ blog }: { blog: Blog }) {
  const [tags, setTags] = useState<Tag[]>([]);
  const [prev, setPrev] = useState<Blog>();
  const [next, setNext] = useState<Blog>();

  useEffect(() => {
    const fetchTags = async () => {
      const tags = await getTagsByBlogId(blog.id!);
      setTags(tags);
    };
    const fetchPrevNext = async () => {
      const { prev, next } = await getPrevAndNextBlog(blog.id!);
      setPrev(prev ?? undefined);
      setNext(next ?? undefined);
    };
    fetchPrevNext();
    fetchTags();
  }, [blog]);

  return (
    <Container className="pt-4 lg:pt-12">
      <ScrollButtons />

      <article className="pt-6">
        <div className="space-y-4">
          <Image
            src={blog.cover}
            alt="Article banner photo"
            width={1600}
            height={900}
            className="h-[400px] w-full rounded-lg"
          />
          <TagsList tags={tags} />
          <PostTitle>{blog.title}</PostTitle>
          <div className="flex items-center justify-between gap-2 pb-4 lg:pt-2">
            <BlogMeta
              date={blog.date}
              slug={blog.slug}
              readingTime={blog.readingTime}
              viewCount={blog.viewCount}
            />
            {/* <SocialShare postUrl={postUrl} title={title} className="hidden md:flex" /> */}
          </div>
        </div>
        <GradientDivider className="mb-2 mt-1" />
        <div className="grid grid-cols-1 gap-12 pb-10 pt-8 lg:grid-cols-12 lg:pt-10">
          <div className="divide-y divide-gray-200 dark:divide-gray-700 lg:col-span-8 xl:col-span-9">
            <div className="prose dark:prose-invert lg:prose-lg max-w-none lg:pb-8">
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>
          </div>
          <div className="hidden lg:col-span-4 lg:block xl:col-span-3">
            <div className="space-y-4 divide-y divide-gray-200 dark:divide-gray-700 lg:sticky lg:top-24">
              <BackToPosts label="返回" />
              <TableOfContents content={blog.content} className="pt-4" />
            </div>
          </div>
        </div>
        <GradientDivider />
        <div className="space-y-4">
          <PostNav
            next={next}
            nextLabel="下一篇"
            prev={prev}
            prevLabel="上一篇"
          />
          {/* <Comments slug={slug} /> */}
        </div>
      </article>
    </Container>
  );
}
