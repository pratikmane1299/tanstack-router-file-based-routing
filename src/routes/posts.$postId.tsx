import { createFileRoute } from "@tanstack/react-router";
import { posts } from "../data";

export const Route = createFileRoute("/posts/$postId")({
  component: SinglePost,
});

function SinglePost() {
  const { postId } = Route.useParams();

  const post = posts.find((post) => post.id === +postId);

  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
    </div>
  );
}
