import React from 'react'
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
  useUpdateProfile,
} from 'react-firebase-hooks/auth'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import auth from '../../config/firebase.init';
import './Login.css'

const Registration = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth)
  // update user name
  const [updateProfile] = useUpdateProfile(auth)
  // navigate to the page
  const navigate = useNavigate()
  const location = useLocation()

  let from = location.state?.from?.pathname || '/'
  // user registration
  const handleRegistration = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value

    // check is valid all input field
    if (name && email && password) {
      createUserWithEmailAndPassword(email, password).then(() => {
        // update user profile
        updateProfile({
          displayName: name,
        })
      })

      const body = { name, email }
      fetch(
        `https://fathomless-brushlands-22227.herokuapp.com/users/${email}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        },
      )
        .then((res) => res.json())
        .then((data) => console.log(data))
    }
  }
  // Google signin
  const [signInWithGoogle, userG, loadingG, errorG] = useSignInWithGoogle(auth)
  // git hub singin
  const [signInWithGithub, userGIT, loadingGIT, errorGIT] = useSignInWithGithub(
    auth,
  )

  if (user || userG || userGIT ) {
    navigate('/Home');
  }

  return (
    <div className='bg-slate-100 py-24'>
      <div className="  ">
        <div className="flex justify-center items-center">
          <div class="card card-css w-96 bg-white-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title  text-3xl text-blue-500">Registration</h2>
              {/* login form input field */}
              <form onSubmit={handleRegistration}>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  class="input input-css bg-slate-100  input-bordered w-full max-w-xs" required
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  class="input input-css bg-slate-100 input-bordered w-full max-w-xs my-5" required
                />
                <input
                  type="text"
                  name="password"
                  placeholder="Enter your password"
                  class="input input-css bg-slate-100 input-bordered w-full max-w-xs mb-10" required
                />
                <div class="card-actions justify-center">
                  <button class="btn btn-css">Submit</button>
                </div>
                <div class="divider text-black py-3">OR</div>
                <div class="card-actions justify-center">
                  <button
                    onClick={() => signInWithGoogle()}
                    class="btn btn-g text-black bg-slate-300"
                  >
                    Google
                  </button>
                  <button
                    onClick={() => signInWithGithub()}
                    class="btn btn-g text-black bg-slate-300 "
                  >
                    GitHuub
                  </button>
                  {errorG && <div class="text-red-500">{errorG?.message}</div>}
                  {errorGIT && (
                    <div class="text-red-500">{errorGIT?.message}</div>
                  )}
                  {loadingG && <div class="text-blue-500">Loading...</div>}
                  {loadingGIT && <div class="text-blue-500">Loading...</div>}
                </div>
                {error && <div class="text-red-500">{error.message}</div>}
              </form>
              {loading && <div class="text-blue-500">Loading...</div>}
              <div className="justify-end text-blue-500 mt-2 ">
                Already have an account? <Link to="/">Login now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration
