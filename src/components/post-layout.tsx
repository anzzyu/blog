import { getTagsByBlogId } from '@/lib/action';
import { Blog, Tag } from '@/lib/type';
import { useEffect, useState } from 'react';
import { BackToPosts } from './back-to-posts';
import { Banner } from './banner';
import { BlogMeta } from './blog-meta';
import { Container } from './container';
import { GradientDivider } from './gradient-divider';
import { PostNav } from './post-nav';
import { PostTitle } from './post-title';
import { ScrollButtons } from './scroll-buttons';
import { TagsList } from './tags';

// interface LayoutProps {
//   content: CoreContent<Blog>;
//   authorDetails: CoreContent<Author>[];
//   next?: { path: string; title: string };
//   prev?: { path: string; title: string };
//   children: ReactNode;
// }

export function PostLayout({ blog }: { blog: Blog }) {
  // let {
  //   slug,
  //   images,
  //   lastmod,
  //   readingTime,
  //   date,
  //   title,
  //   tags,
  //   filePath,
  //   toc,
  //   type,
  // } = content;
  // let postUrl = `${SITE_METADATA.siteUrl}/${type.toLowerCase()}/${slug}`

  console.log(blog);
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    const fetchTags = async () => {
      const tags = await getTagsByBlogId(blog.id!);
      setTags(tags);
    };
    fetchTags();
  }, [blog]);

  const prev = blog;
  const next = blog;

  return (
    <Container className="pt-4 lg:pt-12">
      <ScrollButtons />
      <article className="pt-6">
        <div className="space-y-4">
          <TagsList tags={tags} />
          <PostTitle>{blog.title}</PostTitle>
          <div className="space-y-4 pt-4 md:pt-10">
            <Banner banner={blog.cover} />
          </div>
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
              {blog.content}
            </div>
          </div>
          <div className="hidden lg:col-span-4 lg:block xl:col-span-3">
            <div className="space-y-4 divide-y divide-gray-200 dark:divide-gray-700 lg:sticky lg:top-24">
              <BackToPosts label="Back to posts" />
              {/* <TableOfContents toc={toc} className="pt-4" /> */}
              {/* <div className="flex flex-col gap-2 pt-4">
                <EditOnGithub filePath={filePath} />
              </div> */}
            </div>
          </div>
        </div>
        <GradientDivider />
        <div className="space-y-4">
          <PostNav
            next={next}
            nextLabel="Next post"
            prev={prev}
            prevLabel="Previous post"
          />
          {/* <Comments slug={slug} /> */}
        </div>
      </article>
    </Container>
  );
}
