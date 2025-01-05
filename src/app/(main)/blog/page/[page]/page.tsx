'use client';

import { ListLayout } from '@/components/list-layout';
import { getAllBlogs } from '@/lib/action';
import { POSTS_PER_PAGE } from '@/lib/data';
import { Blog } from '@/lib/type';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// export const generateStaticParams = async () => {
//   const totalPages = Math.ceil(ALL_POSTS.length / POSTS_PER_PAGE);
//   const paths = Array.from({ length: totalPages }, (_, i) => ({
//     page: (i + 1).toString(),
//   }));

//   return paths;
// };

export default function Page() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      const blogs = await getAllBlogs();
      setBlogs(blogs);
    };
    fetchBlogs();
  }, []);
  const params = useParams();
  const { page } = params;
  const pageNumber = parseInt(page as string);
  // const initialDisplayPosts = posts.slice(
  //   POSTS_PER_PAGE * (pageNumber - 1),
  //   POSTS_PER_PAGE * pageNumber
  // );
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(blogs.length / POSTS_PER_PAGE),
  };

  return (
    <ListLayout
      posts={blogs}
      // initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All posts"
    />
  );
}
