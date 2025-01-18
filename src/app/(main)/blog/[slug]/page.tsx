import { PostLayout } from '@/components/post-layout';
import { getBlogBySlug } from '@/lib/action';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  return {
    title: blog?.title,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  return <PostLayout slug={slug} />;
}
