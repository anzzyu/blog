'use client';

import { ListLayout } from '@/components/list-layout';
import { getBlogByPage, getBlogsCount } from '@/lib/action';
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
  const [count, setCount] = useState(0);

  const params = useParams();
  const { page } = params;
  const pageNumber = parseInt(page as string);

  useEffect(() => {
    const fetch = async () => {
      const [blogs, count] = await Promise.all([
        getBlogByPage(pageNumber, POSTS_PER_PAGE),
        getBlogsCount(),
      ]);
      setBlogs(blogs);
      setCount(count);
    };
    fetch();
  }, [pageNumber]);

  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(count / POSTS_PER_PAGE),
  };

  return <ListLayout posts={blogs} pagination={pagination} title="All posts" />;
}
