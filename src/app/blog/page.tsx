import { ListLayout } from '../components/list-layout';
import { ALL_POSTS } from '../data/mock';
import { POSTS_PER_PAGE } from '../utils/const';

export default function BlogPage() {
  const posts = ALL_POSTS;
  const pageNumber = 1;
  // const initialDisplayPosts = posts.slice(
  //   POSTS_PER_PAGE * (pageNumber - 1),
  //   POSTS_PER_PAGE * pageNumber
  // )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  };

  return (
    <ListLayout
      posts={posts}
      // initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All posts"
    />
  );
}
