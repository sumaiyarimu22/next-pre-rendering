import Link from "next/link";

const PostItem = ({ post }) => {
  return (
    <Link href={`/posts/${post.id}`}>
      <h2>
        {post.id}-{post.title}
      </h2>
    </Link>
  );
};

export default PostItem;
