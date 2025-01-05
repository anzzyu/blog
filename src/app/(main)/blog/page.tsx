'use client';

import { ListLayout } from '@/components/list-layout';
import { getAllBlogs } from '@/lib/action';
import { POSTS_PER_PAGE } from '@/lib/data';
import { Blog } from '@/lib/type';
import { useEffect, useState } from 'react';

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      const blogs = await getAllBlogs();
      setBlogs(blogs);
    };
    fetchBlogs();
  }, []);
  const pageNumber = 1;
  // const initialDisplayPosts = posts.slice(
  //   POSTS_PER_PAGE * (pageNumber - 1),
  //   POSTS_PER_PAGE * pageNumber
  // )
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
