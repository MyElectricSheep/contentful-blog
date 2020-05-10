import React from "react";
import { Link } from "react-router-dom";

const Posts = ({ posts }) => {
  return (
    <>
      {posts &&
        posts.map((post) => {
          return (
            <div key={post.sys.id}>
              <h2>{post.fields.title}</h2>
              <Link to={`post/${post.fields.slug}`}>Read article</Link>
            </div>
          );
        })}
    </>
  );
};

export default Posts;
