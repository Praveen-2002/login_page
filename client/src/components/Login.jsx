import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { get_user } from './authHandler';

export default function Loginpage() {
  const navigate = useNavigate();
  const LoginHadler = async (e)=>{
      e.preventDefault();
      let [Enteredemail, Enteredpassword] = [e.target.email.value, e.target.password.value];
      let isSuccess = await get_user(Enteredemail, Enteredpassword);
      if(isSuccess){
        navigate("/home")
      }
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Card Container */}
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
        {/* Header */}
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Welcome Back 👋
        </h2>
        <p className="text-center text-gray-500">Login to continue</p>

        {/* Login Form */}
        <form className="mt-6" onSubmit={(e)=>LoginHadler(e)}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="w-full px-4 py-2 mt-2 border rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              name='password'
              className="w-full px-4 py-2 mt-2 border rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-500 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>

  )
}
