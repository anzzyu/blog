import { ListLayout } from '@/components/list-layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '文章',
};

export default function BlogPage() {
  return <ListLayout pageNumber={1} />;
}
