import { ALL_POSTS } from '@/lib/data';

export default function AdminPage() {
  return (
    <div>
      {ALL_POSTS.map((post) => (
        <div key={post.slug}>
          <h2>{post.title}</h2>
        </div>
      ))}
    </div>
  );
}
