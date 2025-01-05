import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const blogId = searchParams.get('blogId');
  const blogTags = await prisma.blogTag.findMany({
    where: {
      blogId: Number(blogId),
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
  return NextResponse.json(tags);
}
