import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../config/firebase.init";

const MyPosts = () => {
  const [user, loading] = useAuthState(auth);
  const [post, myPost] = useState([]);
  const userEmail = user?.email;
  useEffect(() => {
    fetch(
      `https://fathomless-brushlands-22227.herokuapp.com/posts/${userEmail}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => myPost(data));
  }, [myPost, userEmail]);

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(post);
  return (
    <div className="container-width py-12">
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-10">
        {/* map the all post */}
        {post.map((post) => (
          <div class="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
              <img src={post.image} alt="" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">{post.title}</h2>
              <p>{post.description}</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Delete now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
