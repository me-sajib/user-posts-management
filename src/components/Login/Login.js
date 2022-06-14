import React, {useEffect} from 'react'
import {useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle} from 'react-firebase-hooks/auth'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import auth from '../../config/firebase.init'

const Login = () => {
    const [signInWithEmailAndPassword,
        user,
        loading,
        error] = useSignInWithEmailAndPassword(auth)
    // navigate to the page
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state
        ?.from
            ?.pathname || '/'

    // user login
    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        if (email && password) {
            signInWithEmailAndPassword(email, password)
        }
    }
    // Google signin
    const [signInWithGoogle,
        userG,
        loadingG,
        errorG] = useSignInWithGoogle(auth)
    // git hub singin
    const [signInWithGithub,
        userGIT,
        loadingGIT,
        errorGIT] = useSignInWithGithub(auth,)

    useEffect(() => {
        if (user || userG || userGIT ) {
          navigate('/Home');
        }
    }, [user,userG,userGIT, navigate, from])

    return (
        <div className="bg-slate-100 py-28">
            <div className="flex justify-center items-center">
                <div className="card card-css w-96 bg-white-100 shadow-xl">
                    <div className="card-body ">
                        <h2 className="card-title text-3xl text-blue-500">Login </h2>
                        {/* login form input field */}
                        <form onSubmit={handleLogin}>
                            <input
                                type="text"
                                name="email"
                                placeholder="Enter your email"
                                className="input input-css mb-4 bg-slate-100  input-bordered w-full max-w-xs my-2" required/>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className="input input-css mb-6 bg-slate-100  input-bordered w-full max-w-xs my-2" required/> {error && <div className="text-red-500">{error.message}</div>}
                            {loading && <div className="text-blue-500">Loading...</div>}
                            <div className="card-actions justify-center">
                                <button type="submit" className="btn btn-css">
                                    Login
                                </button>
                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <div className="card-actions justify-center">
                            <button
                                onClick={() => signInWithGoogle()}
                                className="btn btn-g text-black bg-slate-300">
                                Google
                            </button>
                            <button
                                onClick={() => signInWithGithub()}
                                className="btn btn-g text-black bg-slate-300 ">
                                GitHuub
                            </button>
                            {errorG && <div className="text-red-500">{errorG
                                    ?.message}</div>}
                            {errorGIT && <div className="text-red-500">{errorGIT
                                    ?.message}</div>}
                            {loadingG && <div className="text-blue-500">Loading...</div>}
                            {loadingGIT && <div className="text-blue-500">Loading...</div>}
                        </div>

                        <p>
                            Have no account?{' '}
                            <Link to="/register" className="underline text-blue-500">
                                Registration now
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
