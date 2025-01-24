'use client';

import '@/app/css/blog-content.css';
import {
  getBlogBySlug,
  getPrevAndNextBlogBySlug,
  getTagsByBlogSlug,
} from '@/lib/action';
import { Blog, Tag } from '@/lib/type';
import { default as parse } from 'html-react-parser';
import { useEffect, useState } from 'react';
import { BackToPosts } from './back-to-posts';
import { BlogMeta } from './blog-meta';
import { Container } from './container';
import { GradientDivider } from './gradient-divider';
import { Image, Zoom } from './image';
import { PostNav } from './post-nav';
import { PostTitle } from './post-title';
import { ScrollButtons } from './scroll-buttons';
import { TagsList } from './tags';
import { TableOfContents } from './toc';

function addHeadingId(content: string) {
  const regex = /<h(\d)>(.*?)<\/h\d>/g;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(content))) {
    // console.log(match);
    // console.log(`#${match[2].trim()}`);
    content = content.replace(
      match[0],
      `<h${match[1]} id="${match[2].trim()}">${match[2]}</h${match[1]}>
    `
    );
  }
  return content;
}

// function addImageZoom(content: string) {
//   const regex = /<img.*?src="(.+?)".*?>/g;
//   let match: RegExpExecArray | null;
//   while ((match = regex.exec(content))) {
//     content = content.replace(
//       match[0],
//       `<Zoom><Image src="${match[1]}" alt="image" width={1600} height={900} className=" w-full rounded-lg" /></Zoom>`
//     );
//   }
//   return content;
// }

export function PostLayout({ slug }: { slug: string }) {
  const [blog, setBlog] = useState<Blog>();
  const [tags, setTags] = useState<Tag[]>([]);
  const [prev, setPrev] = useState<Blog>();
  const [next, setNext] = useState<Blog>();
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    const fetchBlogData = async () => {
      const [blog, tags, { prev, next }] = await Promise.all([
        getBlogBySlug(slug as string),
        getTagsByBlogSlug(slug),
        getPrevAndNextBlogBySlug(slug),
      ]);
      const content1 = addHeadingId(blog?.content ?? '');
      setContent(content1);
      setBlog(blog as Blog);
      setTags(tags);
      setPrev(prev ?? undefined);
      setNext(next ?? undefined);
    };
    fetchBlogData();
  }, [slug]);

  if (!blog) {
    return null;
  }

  return (
    <Container className="pt-4 lg:pt-12">
      <ScrollButtons />

      <article className="pt-6">
        <div className="space-y-4">
          <Zoom>
            <Image
              src={blog.cover}
              alt="Article banner photo"
              width={1600}
              height={900}
              className="h-[400px] w-full rounded-lg"
            />
          </Zoom>
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
              <div className="blog-content">
                {parse(content, {
                  replace: (domNode) => {
                    if (domNode.type === 'tag' && domNode.name === 'img') {
                      return (
                        <Zoom>
                          <Image
                            src={domNode.attribs.src}
                            alt="image"
                            width={1600}
                            height={900}
                            className="w-full rounded-lg"
                          />
                        </Zoom>
                      );
                    }
                  },
                })}
              </div>
            </div>
          </div>
          <div className="hidden lg:col-span-4 lg:block xl:col-span-3">
            <div className="space-y-4 divide-y divide-gray-200 dark:divide-gray-700 lg:sticky lg:top-24">
              <BackToPosts label="返回" />
              <TableOfContents content={content} className="pt-4" />
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
