'use client';

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
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/hooks/use-toast';
import { deleteTagBySlug, getAllTags } from '@/lib/action';
import { Tag } from '@/lib/type';
import { useEffect, useState } from 'react';

export default function TagPage() {
  const { toast } = useToast();

  const [tags, setTags] = useState<Tag[]>([]);
  useEffect(() => {
    const fetchTags = async () => {
      const tags = await getAllTags();
      setTags(tags);
    };
    fetchTags();
  }, []);

  async function handleDelete(slug: string) {
    // console.log('delete', slug);
    await deleteTagBySlug(slug);
    toast({
      description: '标签删除成功！',
    });
  }

  return (
    <div>
      <div className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/admin/tag">标签管理</BreadcrumbLink>
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
          <Link href="/admin/tag/create">新建</Link>
        </Button>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>名称</TableHead>
              <TableHead>链接</TableHead>
              <TableHead>操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tags.map((tag) => (
              <TableRow key={tag.slug} className="h-[50px]">
                <TableCell>{tag.name}</TableCell>
                <TableCell>
                  <Link
                    className="text-blue-400 underline"
                    href={`/tag/${tag.slug}`}
                  >
                    {'/' + tag.slug}
                  </Link>
                </TableCell>
                <TableCell>
                  <Link
                    className="mr-2 rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-blue-600 shadow-sm hover:bg-gray-200"
                    href={`/admin/tag/edit/${tag.slug}`}
                  >
                    编辑
                  </Link>
                  <Button
                    className="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-blue-600 shadow-sm hover:bg-gray-200"
                    onClick={() => handleDelete(tag.slug)}
                  >
                    删除
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Toaster />
    </div>
  );
}
