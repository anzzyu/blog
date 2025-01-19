import { ListLayoutWithTags } from '@/components/list-layout-with-tags';
import { getTagBySlug } from '@/lib/action';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tag = await getTagBySlug(slug);
  return {
    title: tag?.name,
  };
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <ListLayoutWithTags slug={slug} />;
}
