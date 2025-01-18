import { GrowingUnderline } from './growing-underline';
import { Link } from './link';
import { Twemoji } from './twemoji';

const LINKS = [
  {
    title: `胡言乱语`,
    href: `/blog`,
    emoji: 'memo',
    event: 'home-link-blog',
  },
  {
    title: `瞎打标签`,
    href: `/tag`,
    emoji: 'label',
    event: 'home-link-tag',
  },
  {
    title: `猪生艰难`,
    href: `/about`,
    emoji: 'pig-face',
    event: 'home-link-about',
  },
  {
    title: `猪生艰难1`,
    href: `/about`,
    emoji: 'pig-face',
    event: 'home-link-about',
  },
  {
    title: `猪生艰难2`,
    href: `/about`,
    emoji: 'pig-face',
    event: 'home-link-about',
  },
  {
    title: `猪生艰难3`,
    href: `/about`,
    emoji: 'pig-face',
    event: 'home-link-about',
  },
];

export function BlogLinks() {
  return (
    <div className="flex flex-col gap-2.5 md:gap-3">
      {LINKS.map(({ title, href, emoji, event }) => (
        <Link key={title} href={href} className="flex items-center gap-1.5">
          <Twemoji emoji={emoji} />
          <GrowingUnderline data-umami-event={event} className="leading-6">
            {title}
          </GrowingUnderline>
        </Link>
      ))}
    </div>
  );
}
