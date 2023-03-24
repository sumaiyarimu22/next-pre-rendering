import PostItem from "@/components/post-item";

const posts = ({ posts }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl">posts</h1>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default posts;

//run server side
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
}
