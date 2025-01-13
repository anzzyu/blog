import { Project } from './type';

export const POSTS_PER_PAGE = 12;

export const HEADER_NAV_LINKS = [
  { href: '/blog', title: '文章', emoji: 'writing-hand' },
  // { href: '/projects', title: 'Projects', emoji: 'man-technologist' },
  { href: '/tag', title: '标签', emoji: 'label' },
  { href: '/friends', title: '友链', emoji: 'woman-and-man-holding-hands' },
  { href: '/about', title: '关于', emoji: 'smiling-face-with-sunglasses' },
  { href: '/admin', title: '管理后台', emoji: 'smiling-face-with-sunglasses' },
];

export const MORE_NAV_LINKS = [
  { href: '/tags', title: 'Tags', emoji: 'label' },
  { href: '/friends', title: 'Friends', emoji: 'woman-and-man-holding-hands' },
];

export const FOOTER_NAV_LINKS = [
  { href: '/blog', title: '文章' },
  { href: '/tags', title: '标签' },
  { href: '/friends', title: '友链' },
  { href: '/about', title: '关于' },
];

export const FOOTER_PERSONAL_STUFF = [
  { href: '/about', title: '关于' },
  { href: '/friends', title: '友链' },
];

export const PROJECTS: Project[] = [
  {
    type: 'work',
    title: 'AA',
    description: `AA`,
    imgSrc:
      'https://gips3.baidu.com/it/u=119870705,2790914505&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=720',
    url: '/',
    // demo: <AvpDemo />,
    builtWith: ['NextJS', 'Typescript'],
  },
  {
    type: 'self',
    title: 'BB',
    description: 'BB',
    imgSrc:
      'https://gips3.baidu.com/it/u=119870705,2790914505&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=720',
    repo: '/',
    url: 'https://mengke.me',
    builtWith: ['NextJS', 'Typescript'],
  },
];
