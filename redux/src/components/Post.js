import React from "react";
import { useSelector, useDisaptch } from "react-redux";
import Post from "../components/Post";

function Post({ postId }) {
  const { title, body } = post;
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
}

export default Post;
