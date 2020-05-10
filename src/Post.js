import React, { useState, useEffect } from "react";
import Client from "./config/contentful";
import { useParams, Link } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Post = ({ posts }) => {
  const { slug } = useParams();

  const [post, setPost] = useState(null);

  useEffect(() => {
    if (posts) {
      const id = posts.filter((post) => post.fields.slug === slug)[0].sys.id;
      Client.getEntry(id)
        .then((res) => setPost(res.fields))
        .catch((err) => console.log(err));
    }
  }, [posts, slug]);

  return (
    <>
      {post && (
        <div>
          <h1>{post.title}</h1>
          <h3>{post.subtitle}</h3>
          <img src={post.image.fields.file.url} alt={post.image.fields.title} />
          <div>{documentToReactComponents(post.content)}</div>
        </div>
      )}
      <Link to="/">Go Back</Link>
    </>
  );
};

export default Post;
