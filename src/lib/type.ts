// export type Blog = {
//   slug: string;
//   date: string;
//   title: string;
//   summary: string;
//   tags: string[];
//   cover: string;
//   readingTime: string;
//   viewCount: number;
//   likeCount: number;
//   commentCount: number;
//   icon: string;
//   status: string;
// };

export type Project = {
  type: 'work' | 'self';
  title: string;
  description?: string;
  imgSrc: string;
  url?: string;
  repo?: string | null;
  builtWith: string[];
};

export type Friend = {
  type: string;
  name: string;
  slogan: string;
  imgSrc: string;
  url: string;
};

export type Tag = {
  id?: number;
  name: string;
  slug: string;
};

export type Blog = {
  id?: number;
  title: string;
  summary: string;
  content: string;
  slug: string;
  cover: string;
  readingTime: number;
  viewCount: number;
  likeCount: number;
  commentCount: number;
  date: Date;
  status: string;
};
