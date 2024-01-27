import { Link, createFileRoute } from "@tanstack/react-router";
import { posts } from "../data";

export const Route = createFileRoute("/posts/")({
  component: PostsIndex,
});

function PostsIndex() {
  return (
    <div>
      <span>This are some posts</span>
      <ul>
        {posts.map((post, idx) => (
          <li key={idx}>
            <Link to={"/posts/$postId"} params={{ postId: post.id }}>
              <h6>{post.title}</h6>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
