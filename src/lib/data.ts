import { Project } from './type';

export const POSTS_PER_PAGE = 6;

export const HEADER_NAV_LINKS = [
  { href: '/blog', title: 'Blog', emoji: 'writing-hand' },
  { href: '/snippets', title: 'Snippets', emoji: 'dna' },
  { href: '/projects', title: 'Projects', emoji: 'man-technologist' },
  { href: '/tags', title: 'Tags', emoji: 'label' },
  { href: '/friends', title: 'Friends', emoji: 'woman-and-man-holding-hands' },
  { href: '/about', title: 'About', emoji: 'smiling-face-with-sunglasses' },
  { href: '/admin', title: 'Admin', emoji: 'smiling-face-with-sunglasses' },
];

export const MORE_NAV_LINKS = [
  { href: '/tags', title: 'Tags', emoji: 'label' },
  { href: '/friends', title: 'Friends', emoji: 'woman-and-man-holding-hands' },
];

export const FOOTER_NAV_LINKS = [
  { href: '/blog', title: 'Blog' },
  { href: '/snippets', title: 'Snippets' },
  { href: '/projects', title: 'Projects' },
  { href: '/tags', title: 'Tags' },
];

export const FOOTER_PERSONAL_STUFF = [
  { href: '/about', title: 'About' },
  { href: '/friends', title: 'Friends' },
];

export const ALL_POSTS = [
  {
    slug: 'hello-nextjs1',
    title: 'Hello Next.js',
    summary:
      'Learn how to build a website using Next.js by following a step-by-step tutorial.',
    date: '2020-07-15',
    tags: ['nextjs', 'react', 'javascript'],
    cover: 'https://api.horosama.com/random.php',
    readingTime: '5',
    icon: 'NextJS',
  },
  {
    slug: 'learn-nextjs2',
    title: 'Learn Next.js',
    summary:
      'Learn how to build a website using Next.js by following a step-by-step tutorial.',
    date: '2020-07-15',
    tags: ['nextjs', 'react', 'javascript'],
    cover: 'https://api.horosama.com/random.php',
    readingTime: '5',
    icon: 'NextJS',
  },
  {
    slug: 'hello-nextjs3',
    title: 'Hello Next.js',
    summary:
      'Learn how to build a website using Next.js by following a step-by-step tutorial.',
    date: '2020-07-15',
    tags: ['nextjs', 'react', 'javascript'],
    cover: 'https://api.horosama.com/random.php',
    readingTime: '5',
    icon: 'NextJS',
  },
  {
    slug: 'learn-nextjs4',
    title: 'Learn Next.js',
    summary:
      'Learn how to build a website using Next.js by following a step-by-step tutorial.',
    date: '2020-07-15',
    tags: ['nextjs', 'react', 'javascript'],
    cover: 'https://api.horosama.com/random.php',
    readingTime: '5',
    icon: 'NextJS',
  },
  {
    slug: 'hello-nextjs5',
    title: 'Hello Next.js',
    summary:
      'Learn how to build a website using Next.js by following a step-by-step tutorial.',
    date: '2020-07-15',
    tags: ['nextjs', 'react', 'javascript'],
    cover: 'https://api.horosama.com/random.php',
    readingTime: '5',
    icon: 'NextJS',
  },
  {
    slug: 'learn-nextjs6',
    title: 'Learn Next.js',
    summary:
      'Learn how to build a website using Next.js by following a step-by-step tutorial.',
    date: '2020-07-15',
    tags: ['nextjs', 'react', 'javascript'],
    cover: 'https://api.horosama.com/random.php',
    readingTime: '5',
    icon: 'NextJS',
  },
  {
    slug: 'hello-nextjs7',
    title: 'Hello Next.js',
    summary:
      'Learn how to build a website using Next.js by following a step-by-step tutorial.',
    date: '2020-07-15',
    tags: ['nextjs', 'react', 'javascript'],
    cover: 'https://api.horosama.com/random.php',
    readingTime: '5',
    icon: 'NextJS',
  },
  {
    slug: 'learn-nextjs8',
    title: 'Learn Next.js',
    summary:
      'Learn how to build a website using Next.js by following a step-by-step tutorial.',
    date: '2020-07-15',
    tags: ['nextjs', 'react', 'javascript'],
    cover: 'https://api.horosama.com/random.php',
    readingTime: '5',
    icon: 'NextJS',
  },
  {
    slug: 'hello-nextjs9',
    title: 'Hello Next.js',
    summary:
      'Learn how to build a website using Next.js by following a step-by-step tutorial.',
    date: '2020-07-15',
    tags: ['nextjs', 'react', 'javascript'],
    cover: 'https://api.horosama.com/random.php',
    readingTime: '5',
    icon: 'NextJS',
  },
  {
    slug: 'learn-nextjs10',
    title: 'Learn Next.js',
    summary:
      'Learn how to build a website using Next.js by following a step-by-step tutorial.',
    date: '2020-07-15',
    tags: ['nextjs', 'react', 'javascript'],
    cover: 'https://api.horosama.com/random.php',
    readingTime: '5',
    icon: 'NextJS',
  },
  {
    slug: 'hello-nextjs11',
    title: 'Hello Next.js',
    summary:
      'Learn how to build a website using Next.js by following a step-by-step tutorial.',
    date: '2020-07-15',
    tags: ['nextjs', 'react', 'javascript'],
    cover: 'https://api.horosama.com/random.php',
    readingTime: '5',
    icon: 'NextJS',
  },
  {
    slug: 'learn-nextjs12',
    title: 'Learn Next.js',
    summary:
      'Learn how to build a website using Next.js by following a step-by-step tutorial.',
    date: '2020-07-15',
    tags: ['nextjs', 'react', 'javascript'],
    cover: 'https://api.horosama.com/random.php',
    readingTime: '5',
    icon: 'NextJS',
  },
  {
    slug: 'hello-nextjs13',
    title: 'Hello Next.js',
    summary:
      'Learn how to build a website using Next.js by following a step-by-step tutorial.',
    date: '2020-07-15',
    tags: ['nextjs', 'react', 'javascript'],
    cover: 'https://api.horosama.com/random.php',
    readingTime: '5',
    icon: 'NextJS',
  },
  {
    slug: 'learn-nextjs14',
    title: 'Learn Next.js',
    summary:
      'Learn how to build a website using Next.js by following a step-by-step tutorial.',
    date: '2020-07-15',
    tags: ['nextjs', 'react', 'javascript'],
    cover: 'https://api.horosama.com/random.php',
    readingTime: '5',
    icon: 'NextJS',
  },
  {
    slug: 'hello-nextjs15',
    title: 'Hello Next.js',
    summary:
      'Learn how to build a website using Next.js by following a step-by-step tutorial.',
    date: '2020-07-15',
    tags: ['nextjs', 'react', 'javascript'],
    cover: 'https://api.horosama.com/random.php',
    readingTime: '5',
    icon: 'NextJS',
  },
  {
    slug: 'learn-nextjs16',
    title: 'Learn Next.js',
    summary:
      'Learn how to build a website using Next.js by following a step-by-step tutorial.',
    date: '2020-07-15',
    tags: ['nextjs', 'react', 'javascript'],
    cover: 'https://api.horosama.com/random.php',
    readingTime: '5',
    icon: 'NextJS',
  },
  {
    slug: 'hello-nextjs17',
    title: 'Hello Next.js',
    summary:
      'Learn how to build a website using Next.js by following a step-by-step tutorial.',
    date: '2020-07-15',
    tags: ['nextjs', 'react', 'javascript'],
    cover: 'https://api.horosama.com/random.php',
    readingTime: '5',
    icon: 'NextJS',
  },
  {
    slug: 'learn-nextjs18',
    title: 'Learn Next.js',
    summary:
      'Learn how to build a website using Next.js by following a step-by-step tutorial.',
    date: '2020-07-15',
    tags: ['nextjs', 'react', 'javascript'],
    cover: 'https://api.horosama.com/random.php',
    readingTime: '5',
    icon: 'NextJS',
  },
];

export const ALL_SNIPPETS = [
  {
    slug: 'hello-nextjs',
    title: 'Hello Next.js',
    summary:
      'Learn how to build a website using Next.js by following a step-by-step tutorial.',
    date: '2020-07-15',
    tags: ['nextjs', 'react', 'javascript'],
    cover: 'https://api.horosama.com/random.php',
    readingTime: '5',
    icon: 'NextJS',
  },
  {
    slug: 'learn-nextjs',
    title: 'Learn Next.js',
    summary:
      'Learn how to build a website using Next.js by following a step-by-step tutorial.',
    date: '2020-07-15',
    tags: ['nextjs', 'react', 'javascript'],
    cover: 'https://api.horosama.com/random.php',
    readingTime: '5',
    icon: 'NextJS',
  },
];

export const PROJECTS: Project[] = [
  {
    type: 'work',
    title: 'MICO AVP - Alpha Video Player',
    description: `An open-source Alpha video player within the company that can play Alpha videos on the web.`,
    imgSrc: 'https://api.horosama.com/random.php',
    url: '/blog/202309/AVP_Introduction',
    // demo: <AvpDemo />,
    builtWith: ['WebGL', 'Typescript'],
  },
  {
    type: 'work',
    title: "MoonFox Data - Aurora's Big Data Brand",
    description: `The MoonFox Data brand portal includes iAPP, iBrand, iMarkting, Alternative Data and other parts, and users can obtain the Moon Fox big data service on the website.`,
    imgSrc: 'https://api.horosama.com/random.php',
    url: 'https://moonfox.cn/en?ref=mengke.me',
    builtWith: ['NextJS', 'React', 'ECharts', 'AntDesign', 'I18n', 'Gulp'],
  },
  {
    type: 'work',
    title: 'Aone - Open Platform for Geographic Business Data',
    description: `Edit the map fence online to generate a portrait of the crowd tag inside the fence.`,
    imgSrc: 'https://api.horosama.com/random.php',
    url: '/',
    builtWith: ['NuxtJS', 'Vue', 'AMap', 'BaiduMap', 'VueX'],
  },
  {
    type: 'work',
    title: 'iAPP Lite - WeChat Mini-Program',
    description: `View iAPP data on your phone at any time.`,
    imgSrc: 'https://api.horosama.com/random.php',
    url: '/',
    builtWith: ['WechatMiniProgram', 'AntV', 'Javascript'],
  },
  {
    type: 'work',
    title: 'Aurora DMP - Data Management Platform',
    description: `Users can filter data by customizing IMEI, application, mobile phone number, OAID and other conditions, and generate user portrait charts online.`,
    imgSrc: 'https://api.horosama.com/random.php',
    url: '/',
    builtWith: ['NuxtJS', 'Vue', 'AMap', 'BaiduMap', 'VueX'],
  },
  {
    type: 'self',
    title: "mengke.me - Mengke's coding journey",
    description: '',
    imgSrc: 'https://api.horosama.com/random.php',
    repo: 'mk965/mengke.me',
    url: 'https://mengke.me',
    builtWith: ['NextJS', 'TailwindCSS', 'Typescript', 'Prisma', 'Umami'],
  },
  {
    type: 'self',
    title: 'qiankun-demo - Quick Start Qiankun Micro Frontend',
    description: `Qiankun Micro frontend integrates various frameworks, including Vue2, Vue3, React, NuxtJS, Angular, etc..`,
    imgSrc: 'https://api.horosama.com/random.php',
    repo: 'mk965/qiankun-demo',
    url: 'https://mengke.me',
    builtWith: ['Qiankun', 'Vue', 'React', 'NuxtJS', 'Angular'],
  },
  {
    type: 'self',
    title: 'coord-check - Geographic coordinate checking',
    description: `Quickly check a set of string coordinates for incorrect coordinates and format them.`,
    imgSrc: 'https://api.horosama.com/random.php',
    repo: 'mk965/check-coord',
    url: 'https://www.npmjs.com/package/check-coord',
    builtWith: ['Javascript'],
  },
  {
    type: 'self',
    title: '年龄计算器 - WeChat Mini-Program',
    description: `More than 2,800,000+ users. Calculate various age data of users by birthday.`,
    imgSrc: 'https://api.horosama.com/random.php',
    repo: 'mk965/AgeCalculator',
    url: 'https://github.com/mk965/AgeCalculator',
    builtWith: ['WechatMiniProgram'],
  },
  {
    type: 'self',
    title: '恋爱匹配度 - TikTok Mini-Program',
    description: `More than 14,000,000+ users. Love theme app for teens.`,
    imgSrc: 'https://api.horosama.com/random.php',
    repo: 'mk965/AgeCalculator',
    url: 'https://github.com/mk965/AgeCalculator',
    builtWith: ['WechatMiniProgram'],
  },
];

export const ALL_TAGS = [
  {
    id: 'recents',
    label: 'Recents',
  },
  {
    id: 'home',
    label: 'Home',
  },
  {
    id: 'applications',
    label: 'Applications',
  },
  {
    id: 'desktop',
    label: 'Desktop',
  },
  {
    id: 'downloads',
    label: 'Downloads',
  },
  {
    id: 'documents',
    label: 'Documents',
  },
] as const;
