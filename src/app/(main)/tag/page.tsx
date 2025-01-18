import { Container } from '@/components/container';
import TagCountList from '@/components/tag-count';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '标签',
};

export default function Page() {
  return (
    <Container className="pt-4 md:pt-0">
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pt-6">
          <h1 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
            标签
          </h1>
        </div>
        <TagCountList />
      </div>
    </Container>
  );
}
