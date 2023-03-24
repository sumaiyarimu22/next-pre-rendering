const PostItem = ({ post }) => {
  return (
    <div className="mt-5">
      <h3 className="text-2xl">{post.title} </h3>
      <p>{post.body}</p>
      <hr />
    </div>
  );
};

export default PostItem;
