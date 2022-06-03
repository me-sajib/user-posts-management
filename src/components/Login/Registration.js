import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../config/firebase.init";

const Registration = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  // update user name
  const [updateProfile] = useUpdateProfile(auth);
  // navigate to the page
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  // user registration
  const handleRegistration = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // check is valid all input field
    if (name && email && password) {
      createUserWithEmailAndPassword(email, password).then(() => {
        // update user profile
        updateProfile({
          displayName: name,
        });
      });

      const body = { name, email };
      fetch(`http://localhost:5000/users/${email}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };
  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <div className="container-width">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-3xl text-blue-500">Registration</h2>
            {/* login form input field */}
            <form onSubmit={handleRegistration}>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                class="input input-bordered w-full max-w-xs"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                class="input input-bordered w-full max-w-xs my-2"
              />
              <input
                type="text"
                name="password"
                placeholder="Enter your password"
                class="input input-bordered w-full max-w-xs mb-2"
              />
              <div class="card-actions justify-center">
                <button class="btn btn-primary">Submit</button>
              </div>
              <div class="divider">OR</div>
              <div class="card-actions justify-center">
                <button class="btn btn-success">Google</button>
              </div>
              {error && <div class="text-red-500">{error.message}</div>}
            </form>
            {loading && <div class="text-blue-500">Loading...</div>}
            <div className="justify-end">
              Already have an account? <Link to="/">Login now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
