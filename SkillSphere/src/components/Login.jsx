import { useScroll } from 'framer-motion'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
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
    const res = await fetch('/api/auth/signup', {
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
    navigate('/signin');
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
          <form onSubmit={handleSubmit} className={`relative w-[768px] min-h-[480px] bg-white rounded-2xl shadow-lg overflow-hidden flex`}>
            {/* left content */}
            <div className='bg-h-full bg-gradient-to-r from-blue-500 to-blue-700 w-[50%] text-white flex flex-col items-center justify-center p-10'>
              <h1 className='text-2xl font-bold'>Hello Friend!</h1>
              <p className='text-sm mt-2'>Already Have Account SignIn</p>
              <Link to={'/signin'}>
                <div className='mt-5 px-6 py-2 bg-transparent border border-white rounded-lg cursor-pointer'>
                  SignUp
                </div>
              </Link>
            </div>

            {/* right content */}
            <div className='top-0 left-0 w-1/2 h-full flex flex-col items-center justify-center p-10'>
              <h1 className='text-2xl font-bold'>Sign Up</h1>
              <input
              onChange={handleChange}
               type="text" placeholder='User Name' id='username' className='w-full p-2 my-2 bg-gray-100 rounded-lg' />
              <input 
              onChange={handleChange}
              type="email" placeholder='E-mail' id='email' className='w-full p-2 my-2 bg-gray-100 rounded-lg' />
              <input 
              onChange={handleChange}
              type="password" placeholder='Password' id='password' className='w-full p-2 my-2 bg-gray-100 rounded-lg' />
              <button disabled={load} type='submit' className="mt-3 px-6 py-2 bg-blue-600 text-white rounded-lg">
                {load ? 'Loading...' : 'Sign Up'}
              </button>
              {error && <div className='absolut pt-3 text-red-500 text-center'>{error}</div>}
            </div>
            
          </form>
          
        </div>
       

      </div>
     
    </div>
  )
}
