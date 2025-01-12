'use client';

import { Image } from '@/components/image';
import { Link } from '@/components/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getAllBlogs } from '@/lib/action';
import { Blog } from '@/lib/type';
import { format } from 'date-fns';
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

  return (
    <div>
      <div className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/admin/blog">文章管理</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>列表</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <Button asChild className="self-start">
          <Link href="/admin/blog/create">新建</Link>
        </Button>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>标题</TableHead>
              {/* <TableHead>摘要</TableHead> */}
              <TableHead>链接</TableHead>
              <TableHead>封面</TableHead>
              <TableHead>日期</TableHead>
              <TableHead>状态</TableHead>
              <TableHead>操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {blogs.map((blog) => (
              <TableRow key={blog.slug}>
                <TableCell>{blog.id}</TableCell>
                <TableCell>{blog.title}</TableCell>
                {/* <TableCell>{blog.summary}</TableCell> */}
                <TableCell>
                  <Link
                    className="text-blue-400 underline"
                    href={`/blog/${blog.slug}`}
                  >
                    {'/' + blog.slug}
                  </Link>
                </TableCell>
                <TableCell>
                  <Image
                    src={blog.cover}
                    alt={blog.title}
                    width={500}
                    height={500}
                    className="h-[80px] w-[80px]"
                  />
                </TableCell>
                <TableCell>{format(blog.date, 'yyyy-MM-dd')}</TableCell>
                <TableCell>{blog.status}</TableCell>
                <TableCell>
                  <Link
                    className="mr-2 rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-blue-600 shadow-sm hover:bg-gray-200"
                    href={`/admin/blog/edit/${blog.slug}`}
                  >
                    编辑
                  </Link>
                  <Link
                    className="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-blue-600 shadow-sm hover:bg-gray-200"
                    href={`/admin/blog/delete/${blog.slug}`}
                  >
                    删除
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
