import React from 'react'
import { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';

export default function Signin() {
     const [isActive, setIsActive] = useState();
      const [formData, setFormData] = useState({});
      const [error, setError] = useState(null);
      const [load, setload] = useState(false);
      const navigate = useNavigate();
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.id]: e.target.value,
        });
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          setload(true);
        const res = await fetch('/api/auth/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (data.success === false) {
          setload(false);
          setError(data.message);
          
          return;
        }
        setload(false);
        setError(null);
        navigate('/');
        console.log(data);
        } 
        catch (error) 
        {
          setload(false);
          setError(error.message);
        }
        
      }
    

  return (
    <div>
      <div>
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-yellow-700 to-blue-950">
          
      <form 
      onSubmit={handleSubmit}
      
      className={`relative w-[768px] min-h-[480px] bg-white rounded-2xl shadow-lg overflow-hidden ${isActive ? "active" : ""}`}>

        {/* Sign Up Form */}
        

        {/* Sign In Form */}
        <div className={`absolute top-0 left-0 w-1/2 h-full flex flex-col items-center justify-center p-10 transition-all duration-500 ${isActive ? "-translate-x-full opacity-0 z-1" : "opacity-100 z-10"}`}>
          <h1 className="text-2xl font-bold">Sign In</h1>
          <div className="flex space-x-3 my-3">
            <a href="#" className="p-2 bg-gray-200 rounded-full"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="p-2 bg-gray-200 rounded-full"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="p-2 bg-gray-200 rounded-full"><i className="fab fa-github"></i></a>
            <a href="#" className="p-2 bg-gray-200 rounded-full"><i className="fab fa-linkedin-in"></i></a>
          </div>
          
          <input 
          onChange={handleChange}
          type="email" placeholder="Email" className="w-full p-2 my-2 bg-gray-100 rounded-lg" id='email' />
          <input 
          onChange={handleChange}
          type="password" placeholder="Password" className="w-full p-2 my-2 bg-gray-100 rounded-lg" id='password' />
          <a href="#" className="text-sm text-gray-500">Forgot Your Password?</a>
          <button
          disabled={load}
          type='submit'
          className="mt-3 px-6 py-2 bg-blue-600 text-white rounded-lg">
            {load ? 'Loading...' : 'Sign In'}
          </button>
          {error && <div className='absolut pt-3 text-red-500 text-center'>{error}</div>}
        </div>

        {/* Right Section */}
        <div className={`absolute top-0 left-1/2 w-1/2 h-full transition-all duration-500 `}>
          <div className="h-full bg-gradient-to-r from-blue-500 to-blue-700 text-white flex flex-col items-center justify-center p-10">
            <h1 className="text-2xl font-bold">Welcome Back!</h1>
            <p className="text-sm mt-2">Dont Have Accout SignUp Now</p>
            <Link
            to={'/login'}
            >
            <div
              className="mt-5 px-6 py-2 bg-transparent border border-white rounded-lg cursor-pointer"
              
            >
              SignUp
            </div>
            </Link>
           
          </div>
        </div>
       
      </form>
      
    </div>
    </div>
    </div>
  )
}
