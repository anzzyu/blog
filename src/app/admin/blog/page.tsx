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

export default async function BlogPage() {
  const blogs = await getAllBlogs();

  return (
    <div>
      <div className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/admin/blog">博客</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>所有文章</BreadcrumbPage>
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
              <TableHead>封面</TableHead>
              <TableHead>标题</TableHead>
              <TableHead>摘要</TableHead>
              <TableHead>操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {blogs.map((blog) => (
              <TableRow key={blog.slug}>
                <TableCell>
                  <Image
                    src={blog.cover}
                    alt={blog.title}
                    width={500}
                    height={500}
                    className="h-[80px] w-[80px]"
                  />
                </TableCell>
                <TableCell>{blog.title}</TableCell>
                <TableCell>{blog.summary}</TableCell>
                <TableCell className="flex gap-2 text-blue-500">
                  <Link href={`/admin/blog/edit/${blog.slug}`}>编辑</Link>
                  <Link href={`/admin/blog/delete/${blog.slug}`}>删除</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}