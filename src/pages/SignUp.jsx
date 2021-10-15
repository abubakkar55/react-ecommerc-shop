import React from 'react';
import { NavLink } from 'react-router-dom';
import useCustomContext from './../hooks/useCustomContext';

const SignUp = () => {

    const { firebase: { getName, getEmail, getPassword, createUser } } = useCustomContext();
    const createUserWithInputFields = (e) => {
        e.preventDefault();
        createUser();
    }

    return (
        <div className="p-5 md:p-16 flex items-center justify-center">
            <div className="bg-white  rounded-md overflow-hidden shadow-xl">
                <h3 className="text-center text-yellow-400 text-2xl mt-8 font-semibold">SIGN UP </h3>
                <div>
                    <div className="p-6 md:p-8">
                        <input onBlur={getName} className="border-2 focus:border-yellow-400 rounded-full block w-full px-4 py-3 mb-3 outline-none" type="text" placeholder="Your Name" />
                        <input onBlur={getEmail} className="border-2 focus:border-yellow-400 rounded-full block w-full px-4 py-3 my-4 outline-none" type="email" placeholder="Your Email" />
                        <input onBlur={getPassword} className="border-2 focus:border-yellow-400 rounded-full block w-full px-4 py-3 my-3 outline-none" type="password" placeholder="Your password" />
                        <div className="my-4">
                            <input className="w-7 h-4" type="checkbox" name="" id="terms" />
                            <label htmlFor="terms">Accepts The <span className="text-blue-500">Terms & Condition </span> </label>
                        </div>
                        <div className="flex items-center">
                            <button onClick={createUserWithInputFields} className=" px-7 mr-1 py-2 rounded-3xl bg-blue-500 hover:bg-blue-600  text-white shadow-lg">Sing Up </button>
                            <p className="inline-block pb-2">Already have an account?<NavLink to="/login" className="text-blue-500 cursor-pointer">Login </NavLink> </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SignUp
