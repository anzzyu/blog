'use client';

import { getTagCounts } from '@/lib/action';
import { TagCount } from '@/lib/type';
import { useEffect, useState } from 'react';
import { TagLink } from './tags';

export default function TagCountList() {
  const [tagCounts, setTagCounts] = useState<TagCount[]>([]);
  useEffect(() => {
    const fetchTagCounts = async () => {
      const tagCounts = await getTagCounts();
      setTagCounts(tagCounts);
    };
    fetchTagCounts();
  }, []);
  return (
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
  );
}
