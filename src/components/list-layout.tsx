'use client';

import { getBlogByPage, getBlogsCount } from '@/lib/action';
import { POSTS_PER_PAGE } from '@/lib/data';
import { Blog } from '@/lib/type';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Container } from './container';
import { GrowingUnderline } from './growing-underline';
import { Link } from './link';
import { PageHeader } from './page-header';
import { PostCardGridView } from './post-card-grid-view';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname();
  const basePath = pathname.split('/')[1];
  const prevPage = currentPage - 1 > 0;
  const nextPage = currentPage + 1 <= totalPages;

  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        {prevPage ? (
          <Link
            className="cursor-pointer"
            href={
              currentPage - 1 === 1
                ? `/${basePath}/`
                : `/${basePath}/page/${currentPage - 1}`
            }
            rel="prev"
          >
            <GrowingUnderline className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span>上一页</span>
            </GrowingUnderline>
          </Link>
        ) : (
          <button
            className="cursor-auto disabled:opacity-50"
            disabled={!prevPage}
          >
            <GrowingUnderline className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span>上一页</span>
            </GrowingUnderline>
          </button>
        )}
        <span>
          {currentPage} / {totalPages}
        </span>
        {nextPage ? (
          <Link
            className="cursor-pointer"
            href={`/${basePath}/page/${currentPage + 1}`}
            rel="next"
          >
            <GrowingUnderline className="inline-flex items-center gap-2">
              <span>下一页</span>
              <ArrowRight className="h-4 w-4" />
            </GrowingUnderline>
          </Link>
        ) : (
          <button
            className="cursor-auto disabled:opacity-50"
            disabled={!nextPage}
          >
            <GrowingUnderline className="inline-flex items-center gap-2">
              <span>下一页</span>
              <ArrowRight className="h-4 w-4" />
            </GrowingUnderline>
          </button>
        )}
      </nav>
    </div>
  );
}

export function ListLayout({ pageNumber }: { pageNumber: number }) {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [count, setCount] = useState(0);

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
  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title="全部文章"
        description="就是闲的没事瞎写点东西。"
        className="border-b border-gray-200 dark:border-gray-700"
      >
        {/* <SearchArticles label="Search articles" onChange={(e) => setSearchValue(e.target.value)} /> */}
      </PageHeader>
      {!blogs.length ? (
        <div className="py-10">No posts found.</div>
      ) : (
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 py-10 md:gap-y-16 lg:grid-cols-2 xl:grid-cols-3">
          {blogs.map((post) => (
            <PostCardGridView key={post.slug} post={post} />
          ))}
        </div>
      )}
      {pagination && pagination.totalPages > 1 && (
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
        />
      )}
    </Container>
  );
}
