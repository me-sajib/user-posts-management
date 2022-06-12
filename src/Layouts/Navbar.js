import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../config/firebase.init";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div class="navbar bg-base-200">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl" href="/">
          User Management
        </a>
      </div>
      {user && (
        <div class="flex-none gap-2">
          <Link to="/home">Home</Link>
          <Link to="/users">Users</Link>

          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img
                  src={
                    user.photoURL
                      ? user.photoURL
                      : "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes-thumbnail.png"
                  }
                  alt=""
                />
              </div>
            </label>
            <ul
              tabindex="0"
              class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/profile" class="justify-between">
                  Profile
                  <span class="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="/posts" class="justify-between">
                  My Post
                  <span class="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="/addPost" class="justify-between">
                  Add Post
                </Link>
              </li>

              <li>
                <button onClick={() => signOut(auth)}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
