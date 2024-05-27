import { getPosts } from "./get-posts";
import Post from "./post";

export default async function PostList(category: string) {
  const posts = await getPosts(category);
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          category={post.category}
          write_date={post.write_date}
          view_count={post.view_count}
        />
      ))}
    </div>
  );
}
