import React from "react";
import { Link } from "react-router-dom";

const PostList = props => {
  const { posts } = props;
  if (posts.length === 0) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h3>All posts</h3>
        <div>
          {posts.map(post => (
            <p key={post.id}>
              {post.title}: {post.content}
              <br />
              {post.created_at}
            </p>
          ))}
        </div>
      </div>
    );
  }
};

export default PostList;

//<Link to={`Person/` + person.id}>{person.name}</Link>
//<button onClick={() => onDelete(post)}>Delete</button>
