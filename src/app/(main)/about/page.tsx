// export const metadata = genPageMetadata({ title: 'About' })

import { Container } from '@/components/container';
import { PageHeader } from '@/components/page-header';
import { ProfileCard } from '@/components/profile-card';

export default function AboutPage() {
  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title="About"
        description="A bit of background on who I am, what I do, and why I started this blog. Nothing too serious, just a little intro to the person typing away behind the scenes."
        className="border-b border-gray-200 dark:border-gray-700"
      />
      <div className="py-8 md:grid md:grid-cols-3">
        <div className="pr-4">
          <ProfileCard />
        </div>
        <div className="md:col-span-2 md:pl-12 xl:pl-16">
          <div className="prose prose-lg dark:prose-invert">QingYu</div>
        </div>
      </div>
    </Container>
  );
}
