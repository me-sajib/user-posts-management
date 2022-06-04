import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../config/firebase.init";

const Banner = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div
        class="hero min-h-[500px]"
        style={{
          backgroundImage: `url(${
            user.photoURL ||
            "https://res.cloudinary.com/practicaldev/image/fetch/s--B5VYSYKJ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/tf723qnjv0c9269020dt.jpeg"
          })`,
        }}
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Hello {user.displayName}</h1>
            <p class="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
