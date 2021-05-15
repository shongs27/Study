import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../modules/posts";

function PostList() {
  const { data, loading, error } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch;

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (loading) return <div>로딩중 ...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;
  // data == posts
  return (
    <div>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </div>
  );
}

export default PostList;
