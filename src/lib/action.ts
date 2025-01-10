'use server';

import prisma from './prisma';
import { Blog, Tag } from './type';

export async function getAllTags() {
  return prisma.tag.findMany();
}

export async function addTag(tag: Tag) {
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
  return prisma.blog.create({
    data: {
      ...blog,
    },
  });
}

export async function updateBlog(blog: Blog) {
  return prisma.blog.update({
    where: {
      id: blog.id,
    },
    data: {
      ...blog,
    },
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
