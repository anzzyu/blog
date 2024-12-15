'use client';

import { GrowingUnderline } from './growing-underline';
import { Logo } from './logo';

export function LogoAndRepo() {
  // const siteRepo = SITE_METADATA.siteRepo.replace('https://github.com/', '');
  // const { data: repo } = useSWR<GithubRepository>(
  //   `/api/github?repo=${siteRepo}`,
  //   fetcher
  // );

  return (
    <div className="flex items-center gap-4">
      <Logo />
      {/* <Link href={SITE_METADATA.siteRepo} rel="noreferrer"> */}
      <GrowingUnderline
        data-umami-event="footer-view-source"
        className="flex items-center gap-2"
      >
        <span className="font-medium">QingYu&apos;s blog</span>
        {/* <span className="inline-flex items-center text-gray-500 dark:text-gray-400">
            (<Star className="mr-1 h-4 w-4" />
            {repo ? repo.stargazerCount : '---'})
          </span> */}
      </GrowingUnderline>
      {/* </Link> */}
    </div>
  );
}
