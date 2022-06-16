import React, { useState, useEffect } from "react";
import Loading from "../components/Shared/Loading";

const Posts = () => {
  const [post, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data)
      });

  }, []);


  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div className="container-width py-12">
      {post?.map((post) => (
        <div key={post?._id} class="card w-[100%] bg-base-100 shadow-xl my-12">
          <div class="card-body">
            <h2 class="card-title">{post.title}</h2>
            <span className="text-gray-500 text-xs">post by {post.postBy}</span>
            <p>{post?.description}</p>
          </div>
          <figure>
            <img src={post?.image} alt="Shoes" />
          </figure>
        </div>
      ))}
    </div>
  );
};

export default Posts;
