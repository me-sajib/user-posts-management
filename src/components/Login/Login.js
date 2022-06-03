import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };
  return (
    <div className="container-width">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-3xl text-blue-500">Login Now!</h2>
          {/* login form input field */}
          <form onSubmit={handleLogin}>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              class="input input-bordered w-full max-w-xs"
            />
            <div class="card-actions justify-center">
              <button type="submit" class="btn btn-primary">
                Login
              </button>
            </div>
          </form>

          <p>
            Have No Account?{" "}
            <Link to="/register" className="underline text-blue-500">
              Registration now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
