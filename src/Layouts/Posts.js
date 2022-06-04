import React, { useState, useEffect } from "react";

const Posts = () => {
  const [post, setPosts] = useState([]);

  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div className="container-width py-12">
      {post.map((post) => (
        <div class="card w-[100%] bg-base-100 shadow-xl my-12">
          <div class="card-body">
            <h2 class="card-title">{post.name}</h2>
            <p>{post.description}</p>
          </div>
          <figure>
            <img src={post.image} alt="Shoes" />
          </figure>
        </div>
      ))}
    </div>
  );
};

export default Posts;
