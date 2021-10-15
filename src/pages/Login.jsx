import React from 'react'
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useCustomContext from './../hooks/useCustomContext';
import { FcGoogle } from "react-icons/fc";
const Login = () => {

    const { firebase: { googleSignIn, getEmail, getPassword, logInUser, setUser, setError, setIsLoading } } = useCustomContext();

    const location = useLocation();

    const redirect_URL = location.state?.from || "/";

    const history = useHistory();

    const signInUser = () => {
        setIsLoading(true);
        logInUser()
            .then((result) => {
                setUser(result.user);
                history.push(redirect_URL);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }

    const handleGoogleSignIn = () => {
        setIsLoading(true);
        googleSignIn()
            .then((result) => {
                setUser(result.user);
                history.push(redirect_URL);
            })
            .catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoading(false))
    }

   

    return (
        <div>
            <div className="py-10 flex items-center justify-center">
                <div className="bg-white  rounded-md overflow-hidden shadow-xl">
                    <h3 className="text-center text-yellow-400 text-2xl my-4 font-semibold">SIGN IN </h3>
                    <div>
                        <div className="px-7 py-4">
                            <input onBlur={getEmail} className="border-2 focus:border-yellow-200 rounded-full block w-full px-4 py-3 mb-4 outline-none" type="email" placeholder="Your Email" />
                            <input onBlur={getPassword} className="border-2 focus:border-yellow-200 rounded-full block w-full px-4 py-3 mb-6 outline-none" type="password" placeholder="Your password" />
                            <button onClick={signInUser} className="px-8 mr-2 py-2 rounded-3xl bg-blue-500 hover:bg-blue-600  text-white shadow-lg">
                                Sing In </button>
                            <p className="inline-block pb-2">New to AB  Shop?<NavLink to="/signup" className="text-blue-500 cursor-pointer">Register </NavLink> </p>
                        </div>

                        <div className="p-3">
                            <h4 className="text-blue-500 text-lg text-center font-medium">Or sign in with </h4>
                            <ul className="flex items-center justify-center py-3 gap-5 text-blue-500 text-lg">
                                <li><span onClick={handleGoogleSignIn} className="cursor-pointer" >  <FcGoogle /> </span></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
