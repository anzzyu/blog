'use client';

// export const metadata = genPageMetadata({
//   title: 'Tags',
//   description: 'Things I blog about',
// });

import { Container } from '@/components/container';
import { TagLink } from '@/components/tags';
import { getTagCounts } from '@/lib/action';
import { TagCount } from '@/lib/type';
import { useEffect, useState } from 'react';

export default function Page() {
  const [tagCounts, setTagCounts] = useState<TagCount[]>([]);
  useEffect(() => {
    const fetchTagCounts = async () => {
      const tagCounts = await getTagCounts();
      setTagCounts(tagCounts);
    };
    fetchTagCounts();
  }, []);

  return (
    <Container className="pt-4 md:pt-0">
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pt-6">
          <h1 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
            Tags
          </h1>
        </div>
        <div className="my-8 flex flex-wrap gap-x-5 gap-y-2 py-8 md:my-0 md:py-8">
          {tagCounts.length === 0 && 'No tags found.'}
          {tagCounts.map((t) => {
            return (
              <div key={t.slug} className="flex items-center gap-0.5">
                <TagLink tag={t} size="md" />
                <span className="text-gray-600 dark:text-gray-300">
                  ({t.count})
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
