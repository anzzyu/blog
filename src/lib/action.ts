'use server';

import prisma from './prisma';
import { Blog, Tag } from './type';

export async function getTag(slug: string) {
  return prisma.tag.findFirst({
    where: {
      slug: slug,
    },
  });
}

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

export async function getBlog(slug: string) {
  return prisma.blog.findFirst({
    where: {
      slug: slug,
    },
  });
}

export async function getAllBlogs() {
  return prisma.blog.findMany();
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
