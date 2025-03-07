import { useScroll } from 'framer-motion'
import React, { useState } from 'react'

export default function Login() {

  const [isActive, setIsActive] = useState();
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData
    ({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }
console.log(formData);

  return (
    <div>
      <div>
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-yellow-700 to-blue-950">
      <div className={`relative w-[768px] min-h-[480px] bg-white rounded-2xl shadow-lg overflow-hidden ${isActive ? "active" : ""}`}>

        {/* Sign Up Form */}
        <div className={`absolute top-0 left-0 w-1/2 h-full flex flex-col items-center justify-center p-10 transition-all duration-500 ${isActive ? "translate-x-full opacity-100 z-10" : "opacity-0 z-1"}`}>
          <h1 className="text-2xl font-bold">Create Account</h1>
          <div className="flex space-x-3 my-3">
            <a href="#" className="p-2 bg-gray-200 rounded-full"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="p-2 bg-gray-200 rounded-full"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="p-2 bg-gray-200 rounded-full"><i className="fab fa-github"></i></a>
            <a href="#" className="p-2 bg-gray-200 rounded-full"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span className="text-xs">or use your email for registration</span>
          <input type="text" placeholder="Name" className="w-full p-2 my-2 bg-gray-100 rounded-lg" id='username'  onChange={handleChange}/>
          <input type="email" placeholder="Email" className="w-full p-2 my-2 bg-gray-100 rounded-lg" id='email' onChange={handleChange}/>
          <input type="password" placeholder="Password" className="w-full p-2 my-2 bg-gray-100 rounded-lg" id='password' onChange={handleChange}/>
          <button className="mt-3 px-6 py-2 bg-blue-600 text-white rounded-lg">Sign Up</button>
        </div>

        {/* Sign In Form */}
        <div className={`absolute top-0 left-0 w-1/2 h-full flex flex-col items-center justify-center p-10 transition-all duration-500 ${isActive ? "-translate-x-full opacity-0 z-1" : "opacity-100 z-10"}`}>
          <h1 className="text-2xl font-bold">Sign In</h1>
          <div className="flex space-x-3 my-3">
            <a href="#" className="p-2 bg-gray-200 rounded-full"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="p-2 bg-gray-200 rounded-full"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="p-2 bg-gray-200 rounded-full"><i className="fab fa-github"></i></a>
            <a href="#" className="p-2 bg-gray-200 rounded-full"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span className="text-xs">or use your email password</span>
          <input type="email" placeholder="Email" className="w-full p-2 my-2 bg-gray-100 rounded-lg" />
          <input type="password" placeholder="Password" className="w-full p-2 my-2 bg-gray-100 rounded-lg" />
          <a href="#" className="text-sm text-gray-500">Forgot Your Password?</a>
          <button className="mt-3 px-6 py-2 bg-blue-600 text-white rounded-lg">Sign In</button>
        </div>

        {/* Toggle Section */}
        <div className={`absolute top-0 left-1/2 w-1/2 h-full transition-all duration-500 ${isActive ? "-translate-x-full" : ""}`}>
          <div className="h-full bg-gradient-to-r from-blue-500 to-blue-700 text-white flex flex-col items-center justify-center p-10">
            <h1 className="text-2xl font-bold">{isActive ? "Hello, Friend!" : "Welcome Back!"}</h1>
            <p className="text-sm mt-2">{isActive ? "Register to use all site features" : "Sign in to use all site features"}</p>
            <button
              className="mt-5 px-6 py-2 bg-transparent border border-white rounded-lg"
              onClick={() => setIsActive(!isActive)}
            >
              {isActive ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}
