const PostDetails = ({ post }) => {
  return (
    <div>
      <h2>
        {post.id} - {post.title}
      </h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetails;

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });

  return {
    //paths:[{params:{postId:'1'}},{params:{postId:'2'}]
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  //params into postID
  const { params } = context;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
}
