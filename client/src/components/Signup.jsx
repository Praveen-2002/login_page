import {Link, useNavigate} from 'react-router-dom';
import { add_user } from './authHandler';

export default function Signup() {
    const navigate = useNavigate();
    const signupHandler = async (e)=>{
      e.preventDefault();
      let [name, email, password] = [e.target.name.value, e.target.email.value, e.target.password.value];
      let isSuccess = await add_user(name, email, password)
      isSuccess ? navigate("/home") : ""
    }
    
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        {/* Card Container */}
        <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
          {/* Header */}
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Create an Account 🚀
          </h2>
          <p className="text-center text-gray-500">Join us today!</p>
  
          {/* Signup Form */}
          <form className="mt-6" onSubmit={(e) => {signupHandler(e)}}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 mt-2 border rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-2 border rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Create a password"
                className="w-full px-4 py-2 mt-2 border rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
              Sign Up
            </button>
          </form>
  
          {/* Footer */}
          <p className="text-center text-gray-500 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-semibold hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    );
  }
  