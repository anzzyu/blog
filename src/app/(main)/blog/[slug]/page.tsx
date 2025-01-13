'use client';

import { PostLayout } from '@/components/post-layout';
import { getBlogBySlug } from '@/lib/action';
import { Blog } from '@/lib/type';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string[] }
// }): Promise<Metadata | undefined> {
//   const slug = decodeURI(params.slug.join('/'))
//   const post = allBlogs.find((p) => p.slug === slug)
//   const authorList = post?.authors || ['default']
//   const authorDetails = authorList.map((author) => {
//     const authorResults = allAuthors.find((p) => p.slug === author)
//     return coreContent(authorResults as Author)
//   })
//   if (!post) {
//     return
//   }

//   const publishedAt = new Date(post.date).toISOString()
//   const modifiedAt = new Date(post.lastmod || post.date).toISOString()
//   const authors = authorDetails.map((author) => author.name)
//   let imageList = [SITE_METADATA.socialBanner]
//   if (post.images) {
//     imageList = typeof post.images === 'string' ? [post.images] : post.images
//   }
//   const ogImages = imageList.map((img) => {
//     return {
//       url: img.includes('http') ? img : SITE_METADATA.siteUrl + img,
//     }
//   })

//   return {
//     title: post.title,
//     description: post.summary,
//     openGraph: {
//       title: post.title,
//       description: post.summary,
//       siteName: SITE_METADATA.title,
//       locale: 'en_US',
//       type: 'article',
//       publishedTime: publishedAt,
//       modifiedTime: modifiedAt,
//       url: './',
//       images: ogImages,
//       authors: authors.length > 0 ? authors : [SITE_METADATA.author],
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: post.title,
//       description: post.summary,
//       images: imageList,
//     },
//   }
// }

// export const generateStaticParams = async () => {
//   return allBlogs.map((p) => ({ slug: p.slug.split('/').map((name) => decodeURI(name)) }))
// }

export default function Page() {
  const params = useParams();
  const { slug } = params;
  const [blog, setBlog] = useState<Blog>();
  useEffect(() => {
    const fetchBlog = async () => {
      const blog = await getBlogBySlug(slug as string);
      setBlog(blog as Blog);
    };
    fetchBlog();
  }, [slug]);
  if (!blog) {
    return null;
  }

  return <PostLayout blog={blog as Blog} />;
}
