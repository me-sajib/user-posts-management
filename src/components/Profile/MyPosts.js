import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../config/firebase.init";
import nopost from "../../assets/images/nopost/nopost.png";

const MyPosts = () => {
  const [user, loading] = useAuthState(auth);
  const [post, myPost] = useState([]);
  const userEmail = user?.email;
  useEffect(() => {
    fetch(`http://localhost:5000/posts/${userEmail}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => myPost(data));
  }, [myPost, userEmail]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {post.length > 0 ? (
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
      ) : (
        <div className="container-width py-12">
          <div className="grid grid-cols-1 ">
            <h2 className="text-center text-4xl text-red-500 font-bold py-5">
              You don't have any post
            </h2>
            <div class="card shadow-xl image-full">
              <figure>
                <img src={nopost} alt="" className="w-[100%]" />
              </figure>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyPosts;
