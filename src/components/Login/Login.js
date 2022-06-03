import React from "react";

const Login = () => {
  return (
    <div className="container-width">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-3xl text-blue-500">Login Now!</h2>
          {/* login form input field */}
          <input
            type="text"
            name="email"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="password"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
          />
          <div class="card-actions justify-center">
            <button class="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
