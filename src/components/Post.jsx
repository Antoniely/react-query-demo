import { useDeletePost, usePost } from "../hooks/usePosts";

export default function Post({ postId, setPostId }) {
  const { data: post, error, isLoading } = usePost(postId);
  const {
    mutate,
    error: errorDelete,
    isLoading: isLoadingDelete,
  } = useDeletePost();

  const handleDelete = () => {
    setPostId(-1);
    mutate(postId);
  };

  if (isLoading) {
    return (
      <div>
        <span className="spinner-border"></span> Loading Post...
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger">
        Error fetching post: {error.message}
      </div>
    );
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button
        disabled={isLoadingDelete}
        onClick={() => handleDelete()}
        className="btn btn-danger"
      >
        {isLoadingDelete ? (
            <>
              <span className="spinner-border spinner-border-sm"></span>{" "}
              Deleting...
            </>
          ) : (
            "Delete"
          )}
      </button>
    </article>
  );
}
