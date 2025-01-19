import { ListLayout } from '@/components/list-layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '文章',
};

export default async function Page({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  return <ListLayout pageNumber={parseInt(page)} />;
}
