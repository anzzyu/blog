'use client';

import { ListLayout } from '@/components/list-layout';
import { getBlogByPage, getBlogsCount } from '@/lib/action';
import { POSTS_PER_PAGE } from '@/lib/data';
import { Blog } from '@/lib/type';
import { useEffect, useState } from 'react';

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [count, setCount] = useState(0);
  const pageNumber = 1;

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
  }, []);
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(count / POSTS_PER_PAGE),
  };

  return <ListLayout posts={blogs} pagination={pagination} title="所有文章" />;
}
