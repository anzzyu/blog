import { Container } from '@/components/container';
import { FriendsList } from '@/components/friends-list';
import { PageHeader } from '@/components/page-header';
import friends from '@/lib/friends.json' assert { type: 'json' };
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '友链',
};

export default async function HomePage() {
  const friendsList = friends.filter((f) => f.type === 'friend');
  const bloggersList = friends.filter((f) => f.type === 'techStar');
  return (
    <Container as="div" className="pt-4 lg:pt-12">
      <PageHeader
        title="朋友们"
        description="一些有趣的人。"
        className="border-b border-gray-200 dark:border-gray-700"
      />
      <div className="py-5 md:py-10">
        <h3 className="mb-6 text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:text-3xl">
          朋友
        </h3>
        <div className="space-y-16">
          <FriendsList friends={friendsList} />
        </div>
      </div>
      <div className="mt-6 border-t border-gray-200 py-5 dark:border-gray-700 md:mt-10 md:py-10">
        <h3 className="mb-6 text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:mb-8 md:text-3xl">
          特别关注
        </h3>
        <div className="space-y-16">
          <FriendsList friends={bloggersList} />
        </div>
      </div>
    </Container>
  );
}
