'use client';

// export const metadata = genPageMetadata({ title: 'Snippets' });

import { Container } from '@/components/container';
import { PageHeader } from '@/components/page-header';
import { SnippetCard } from '@/components/snippet';
import { getAllBlogs } from '@/lib/action';
import { Blog } from '@/lib/type';
import { useEffect, useState } from 'react';

export default function Snippets() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      const blogs = await getAllBlogs();
      setBlogs(blogs);
    };
    fetchBlogs();
  }, []);

  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title="Snippets"
        description="My personal stash of code snippets that make my life easier. They’re simple and reusable. Feel free to copy, tweak, and use them as you like."
        className="border-b border-gray-200 dark:border-gray-700"
      />
      <div className="py-10">
        <div className="grid-cols-2 gap-x-6 gap-y-10 space-y-10 md:grid md:space-y-0">
          {blogs.map((snippet) => (
            <SnippetCard snippet={snippet} key={snippet.slug} />
          ))}
        </div>
      </div>
    </Container>
  );
}
