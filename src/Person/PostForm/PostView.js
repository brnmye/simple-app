import React from "react";

const PostList = props => {
  const { posts, loading } = props;
  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else if (posts.length === 0) {
    return (
      <div>
        <h1>No Posts to show. Post Something!</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h3>All posts</h3>
        <div>
          {posts.map(post => (
            <div key={post.id} className="my-auto border">
              {post.title}: {post.content}
              <br />
              Created at: {post.created_at}
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default PostList;
