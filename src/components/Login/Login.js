import React, { useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../config/firebase.init";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  // navigate to the page
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  // user login
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (email && password) {
      signInWithEmailAndPassword(email, password);
    }
  };
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

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
              class="input input-bordered w-full max-w-xs my-2"
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              class="input input-bordered w-full max-w-xs my-2"
            />
            {error && <div class="text-red-500">{error.message}</div>}
            {loading && <div class="text-blue-500">Loading...</div>}
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
