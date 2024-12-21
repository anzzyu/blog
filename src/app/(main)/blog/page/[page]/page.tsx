import { ListLayout } from '@/components/list-layout';
import { ALL_POSTS, POSTS_PER_PAGE } from '@/lib/data';

export const generateStaticParams = async () => {
  const totalPages = Math.ceil(ALL_POSTS.length / POSTS_PER_PAGE);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));

  return paths;
};

export default async function Page({ params }: { params: { page: string } }) {
  const posts = ALL_POSTS;
  const { page } = await params;
  const pageNumber = parseInt(page as string);
  // const initialDisplayPosts = posts.slice(
  //   POSTS_PER_PAGE * (pageNumber - 1),
  //   POSTS_PER_PAGE * pageNumber
  // );
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
