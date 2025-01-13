'use client';

import TiptapEditor from '@/components/editor';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Textarea } from '@/components/ui/textarea';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/hooks/use-toast';
import {
  addBlogTag,
  deleteBlogTags,
  getAllTags,
  getBlogBySlug,
  getBlogTagsByBlogSlug,
  updateBlog,
} from '@/lib/action';
import { Blog, Tag } from '@/lib/type';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  title: z.string().min(2, {
    message: '标题必须大于2个字符',
  }),
  summary: z.string().min(2, {
    message: '摘要必须大于2个字符',
  }),
  content: z.string().min(2, {
    message: '内容必须大于2个字符',
  }),
  slug: z.string().min(2, {
    message: 'slug必须大于2个字符',
  }),
  cover: z.string(),
  readingTime: z.coerce.number(),
  viewCount: z.coerce.number(),
  likeCount: z.coerce.number(),
  commentCount: z.coerce.number(),
  date: z.date({
    required_error: '日期是必须的',
  }),
  tags: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: '必须选择至少一个标签',
  }),
  status: z.string().nonempty(),
});

function addHeadingId(content: string) {
  const regex = /<h(\d)>(.*?)<\/h\d>/g;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(content))) {
    console.log(match);
    console.log(`#${match[2].trim()}`);
    content = content.replace(
      match[0],
      `<h${match[1]} id="${match[2].trim()}">${match[2]}</h${match[1]}>
    `
    );
  }
  return content;
}

export default function EditPage() {
  const { toast } = useToast();
  const params = useParams();
  const { slug } = params;

  const [blog, setBlog] = useState<Blog>();
  const [tags, setTags] = useState<Tag[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    const fetchData = async () => {
      const [blog, blogTags, tags] = await Promise.all([
        getBlogBySlug(slug as string),
        getBlogTagsByBlogSlug(slug as string),
        getAllTags(),
      ]);

      setBlog(blog as Blog);
      setSelectedTags(blogTags.map((tag) => tag.tagId.toString()));
      setTags(tags);

      form.setValue('title', blog!.title);
      form.setValue('summary', blog!.summary);
      form.setValue('content', blog!.content);
      form.setValue('slug', blog!.slug);
      form.setValue('cover', blog!.cover);
      form.setValue('readingTime', blog!.readingTime);
      form.setValue('viewCount', blog!.viewCount);
      form.setValue('likeCount', blog!.likeCount);
      form.setValue('commentCount', blog!.commentCount);
      form.setValue('date', blog!.date);
      form.setValue(
        'tags',
        blogTags.map((tag) => tag.tagId.toString())
      );
      form.setValue('status', blog!.status);
    };

    fetchData();
  }, [slug, form]);

  if (!blog) {
    return null;
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const { tags, ...blogData } = values;
    console.log(tags);
    const newContent = addHeadingId(values.content);
    blogData.content = newContent;
    await updateBlog({
      id: blog?.id,
      ...blogData,
    });

    deleteBlogTags(blog!.id!);

    for (const tag of values.tags) {
      addBlogTag(blog!.id!, Number(tag));
    }

    toast({
      description: '文章更新成功！',
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
                <BreadcrumbLink href="/admin/blog">文章管理</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>编辑</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>标题</FormLabel>
                  <FormControl>
                    <Input
                      onChange={field.onChange}
                      defaultValue={blog.title}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="summary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>摘要</FormLabel>
                  <FormControl>
                    <Textarea
                      onChange={field.onChange}
                      defaultValue={blog.summary}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>内容</FormLabel>
                  <FormControl>
                    <TiptapEditor
                      onChange={field.onChange}
                      initialContent={blog.content}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="slug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>链接</FormLabel>
                  <FormControl>
                    <Input onChange={field.onChange} defaultValue={blog.slug} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cover"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>封面</FormLabel>
                  <FormControl>
                    <Input
                      onChange={field.onChange}
                      defaultValue={blog.cover}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="readingTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>阅读时长</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      onChange={field.onChange}
                      defaultValue={blog.readingTime}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="viewCount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>浏览量</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      onChange={field.onChange}
                      defaultValue={blog.viewCount}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="likeCount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>点赞量</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      onChange={field.onChange}
                      defaultValue={blog.likeCount}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="commentCount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>评论量</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      onChange={field.onChange}
                      defaultValue={blog.commentCount}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>日期</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-[240px] pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value
                            ? format(field.value, 'PPP')
                            : // <span>Pick a date</span>
                              format(blog.date, 'PPP')}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date('1900-01-01')
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tags"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">标签</FormLabel>
                  </div>
                  {tags.map((tag) => (
                    <FormField
                      key={tag.id}
                      control={form.control}
                      name="tags"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={tag.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                defaultChecked={selectedTags.includes(
                                  tag.id!.toString()
                                )}
                                onCheckedChange={(checked) => {
                                  if (checked) {
                                    field.onChange([
                                      ...field.value,
                                      tag.id!.toString(),
                                    ]);
                                  } else {
                                    field.onChange(
                                      field.value.filter(
                                        (value) => value !== tag.id!.toString()
                                      )
                                    );
                                  }
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {tag.name}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>状态</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={blog.status}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="选择状态" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="发布">发布</SelectItem>
                      <SelectItem value="下线">下线</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">提交</Button>
          </form>
        </Form>
      </div>
      <Toaster />
    </div>
  );
}
