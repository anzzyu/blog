'use client';

import { ListLayoutWithTags } from '@/components/list-layout-with-tags';
import { getBlogsByTagId, getTagBySlug } from '@/lib/action';
import { Blog, Tag } from '@/lib/type';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// export async function generateMetadata({ params }: { params: { tag: string } }): Promise<Metadata> {
//   const tag = decodeURI(params.tag)
//   return genPageMetadata({
//     title: tag,
//     description: `${SITE_METADATA.title} ${tag} tagged content`,
//     alternates: {
//       canonical: './',
//       types: {
//         'application/rss+xml': `${SITE_METADATA.siteUrl}/tags/${tag}/feed.xml`,
//       },
//     },
//   })
// }

// export const generateStaticParams = async () => {
//   const tagCounts = tagData as Record<string, number>;
//   const tagKeys = Object.keys(tagCounts);
//   const paths = tagKeys.map((tag) => ({
//     tag: encodeURI(tag),
//   }));
//   return paths;
// };

export default function TagPage() {
  const params = useParams();
  const { slug } = params;
  const [tag, setTag] = useState<Tag>();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    const fetchTag = async () => {
      const tag = await getTagBySlug(slug as string);
      setTag(tag as Tag);
    };
    const fetchBlogs = async () => {
      if (tag?.id) {
        const blogs = await getBlogsByTagId(tag.id);
        setBlogs(blogs);
      }
    };
    fetchTag();
    fetchBlogs();
  }, [slug, tag?.id]);
  console.log(tag);

  return (
    <ListLayoutWithTags
      title={`#${tag?.name}`}
      description={
        <>
          Things I&apos;ve written about{' '}
          <span className="ml-2 font-medium">#{tag?.name}</span>
        </>
      }
      posts={blogs}
    />
  );
}
