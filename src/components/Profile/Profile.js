import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../config/firebase.init";

const Profile = () => {
  const [user, loading] = useAuthState(auth);
  const handlePost = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const image = e.target.image.value;
    const category = e.target.category.value;

    // check validation
    if (
      title.length === 0 ||
      description.length === 0 ||
      image.length === 0 ||
      category.length === 0
    ) {
      alert("Please fill all the fields");
      return;
    }

    const postBody = {
      postBy: user.displayName,
      email: user.email,
      title,
      description,
      image,
    };

    fetch("https://fathomless-brushlands-22227.herokuapp.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postBody),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container-width">
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <div class="hero min-h-screen ">
              <div class="hero-content flex-col lg:flex-row-reverse">
                <img
                  src="https://api.lorem.space/image/movie?w=260&h=400"
                  class="max-w-sm rounded-lg shadow-2xl"
                  alt=""
                />
                <div>
                  <h1 class="text-5xl font-bold">
                    Welcome to{" "}
                    <span className="text-blue-500">{user.displayName} </span>
                  </h1>
                  <p class="py-6">
                    Is our best website and we are glad to have you here. i hope
                    you enjoy our website. we are always looking for new
                    members. we are always updating our website. if you have any
                    questions please contact us.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* add post input field */}
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
            <div class="card-body">
              <h2 class="text-4xl font-bold text-primary">ADD POST</h2>
              <form onSubmit={handlePost}>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Title</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="post title"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Description</span>
                  </label>

                  <textarea
                    name="description"
                    cols="30"
                    rows="13"
                    placeholder="post description"
                    className="input input-bordered"
                  ></textarea>
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Image</span>
                  </label>
                  <input
                    type="text"
                    name="image"
                    placeholder="post image"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Category</span>
                  </label>
                  <input
                    type="text"
                    name="category"
                    placeholder="post category"
                    class="input input-bordered"
                  />
                </div>

                <div class="form-control mt-6">
                  <button class="btn btn-primary">post</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
