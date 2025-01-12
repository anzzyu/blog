import { format } from 'date-fns';
import { Twemoji } from './twemoji';
import { ViewCounter } from './view-counter';

type BlogMetaProps = {
  date: Date;
  slug: string;
  readingTime: number;
  viewCount: number;
};

export function BlogMeta({ date, readingTime, viewCount }: BlogMetaProps) {
  return (
    <dl>
      <dt className="sr-only">Published on</dt>
      <dd className="flex flex-wrap items-center gap-2 text-sm font-medium leading-6 text-gray-500 dark:text-gray-400 md:gap-3 md:text-base">
        <time
          dateTime={format(date, 'yyyy-MM-dd')}
          className="flex items-center justify-center"
        >
          <Twemoji emoji="calendar" size="base" />
          <span className="ml-1.5 md:ml-2">{format(date, 'yyyy-MM-dd')}</span>
        </time>
        {/* {lastmod && (
          <>
            <span className="text-gray-400">/</span>
            <time dateTime={date.toISOString()} className="flex items-center justify-center">
              <span>Updated</span>
              <span className="ml-1.5 md:ml-2">{formatDate(lastmod)}</span>
            </time>
          </>
        )} */}
        <span className="text-gray-400">/</span>
        <div className="flex items-center">
          <Twemoji emoji="three-o-clock" size="base" />
          <span className="ml-1.5 md:ml-2">{readingTime} mins read</span>
        </div>
        <span className="text-gray-400">/</span>
        <div className="flex items-center">
          <Twemoji emoji="eye" size="base" />
          <ViewCounter className="ml-1.5 md:ml-2" viewCount={viewCount} />
        </div>
      </dd>
    </dl>
  );
}
