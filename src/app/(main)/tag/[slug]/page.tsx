'use client';

import { ListLayoutWithTags } from '@/components/list-layout-with-tags';
import { getBlogsByTagSlug, getTagBySlug, getTagCounts } from '@/lib/action';
import { Blog, Tag, TagCount } from '@/lib/type';
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
  const [tagCounts, setTagCounts] = useState<TagCount[]>([]);

  useEffect(() => {
    const fetchTagData = async () => {
      const [tag, blogs, tagCounts] = await Promise.all([
        getTagBySlug(slug as string),
        getBlogsByTagSlug(slug as string),
        getTagCounts(),
      ]);
      setTag(tag as Tag);
      setBlogs(blogs);
      setTagCounts(tagCounts);
    };
    fetchTagData();
  }, [slug]);

  return (
    <ListLayoutWithTags
      title={`#${tag?.name}`}
      description={
        <>
          关于<span className="ml-2 font-medium">{tag?.name}</span>
        </>
      }
      posts={blogs}
      tagCounts={tagCounts}
    />
  );
}
