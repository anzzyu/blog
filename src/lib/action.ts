'use server';

import prisma from './prisma';
import { Blog, BlogWithTags, Tag } from './type';

export async function getAllTags() {
  return prisma.tag.findMany();
}

export async function addTag(tag: Tag) {
  const checkTag = await prisma.tag.findFirst({
    where: { slug: tag.slug },
  });
  if (checkTag) {
    return 'error';
  }
  return prisma.tag.create({
    data: {
      ...tag,
    },
  });
}

export async function updateTag(tag: Tag) {
  return prisma.tag.update({
    where: {
      id: tag.id,
    },
    data: {
      ...tag,
    },
  });
}

export async function deleteTag(id: number) {
  return prisma.tag.delete({
    where: {
      id,
    },
  });
}

export async function getBlogBySlug(slug: string) {
  return prisma.blog.findFirst({
    where: {
      slug: slug,
    },
  });
}

export async function getAllBlogs() {
  return prisma.blog.findMany({
    orderBy: {
      id: 'desc',
    },
  });
}

export async function addBlog(blog: Blog) {
  const checkBlog = await prisma.blog.findFirst({
    where: { slug: blog.slug },
  });
  if (checkBlog) {
    return 'error';
  }
  return prisma.blog.create({
    data: {
      ...blog,
    },
  });
}

export async function updateBlog(blog: Blog) {
  const { id, ...data } = blog;
  console.log(id);
  return prisma.blog.update({
    where: {
      id: blog.id,
    },
    data,
  });
}

export async function deleteBlog(id: number) {
  return prisma.blog.delete({
    where: {
      id,
    },
  });
}

export async function addBlogTag(blogId: number, tagId: number) {
  return prisma.blogTag.create({
    data: {
      blogId,
      tagId,
    },
  });
}

export async function getBlogTagsByBlogId(blogId: number) {
  return prisma.blogTag.findMany({
    where: {
      blogId,
    },
  });
}

export async function getBlogTagsByBlogSlug(blogSlug: string) {
  const blog = await getBlogBySlug(blogSlug);
  return getBlogTagsByBlogId(blog!.id!);
}

export async function getTagsByBlogId(blogId: number) {
  const blogTags = await prisma.blogTag.findMany({
    where: {
      blogId,
    },
  });
  const tagIds = blogTags.map((blogTag) => blogTag.tagId);
  return prisma.tag.findMany({
    where: {
      id: {
        in: tagIds,
      },
    },
  });
}

export async function getTagCounts() {
  const tagsCount = await prisma.blogTag.groupBy({
    by: ['tagId'],
    _count: {
      tagId: true,
    },
  });
  const tags = await prisma.tag.findMany();

  return tags.map((tag) => {
    const count = tagsCount.find((tagCount) => tagCount.tagId === tag.id);
    return {
      ...tag,
      count: count ? count._count.tagId : 0,
    };
  });
}

export async function getTagBySlug(slug: string) {
  return prisma.tag.findFirst({
    where: {
      slug: slug,
    },
  });
}

export async function getBlogsByTagId(tagId: number) {
  const blogTags = await prisma.blogTag.findMany({
    where: {
      tagId,
    },
  });
  const blogIds = blogTags.map((blogTag) => blogTag.blogId);
  return prisma.blog.findMany({
    where: {
      id: {
        in: blogIds,
      },
    },
  });
}

export async function deleteBlogTags(blogId: number) {
  return prisma.blogTag.deleteMany({
    where: {
      blogId,
    },
  });
}

export async function getBlogWithTagsByPage(
  pageNumber: number,
  pageSize: number
) {
  const skip = (pageNumber - 1) * pageSize;
  const take = pageSize;
  const blogs = await prisma.blog.findMany({
    skip,
    take,
    orderBy: {
      id: 'desc',
    },
  });

  const blogIds = blogs.map((blog) => blog.id);
  const blogTags = await prisma.blogTag.findMany({
    where: {
      blogId: {
        in: blogIds,
      },
    },
  });
  const tagIds = blogTags.map((blogTag) => blogTag.tagId);
  const tags = await prisma.tag.findMany({
    where: {
      id: {
        in: tagIds,
      },
    },
  });

  const res: BlogWithTags[] = [];

  for (const blog of blogs) {
    const blogWithTags: BlogWithTags = {
      blog,
      tags: [],
    };
    for (const blogTag of blogTags) {
      if (blogTag.blogId === blog.id) {
        const tag = tags.find((tag) => tag.id === blogTag.tagId);
        if (tag) {
          blogWithTags.tags.push(tag);
        }
      }
    }
    res.push(blogWithTags);
  }
  return res;
}
