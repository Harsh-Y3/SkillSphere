import React from 'react'
import logo from '../assets/Logo.jpg'

export default function Header() {
  return (
    <div>
        <nav className="absolute top-[-50px] left-0 right-0 h-36 flex justify-between items-center p-4 bg-blue-950 bg-opacity-40">
          <div className="flex pt-10 items-center space-x-2">
            <div className="text-yellow-500 text-2xl font-bold flex items-center">
            <img src={logo} alt="Logo" className="w-[250px] h-[150px] border-s-6 rounded-full mix-blend-lighten "/>
            </div>
          </div>
          <ul className="hidden md:flex space-x-6 text-lg gap-10 pt-10" >
            <li className="hover:text-yellow-500 cursor-pointer">Home</li>
            <li className="hover:text-yellow-500 cursor-pointer">About Us</li>
            <li className="hover:text-yellow-500 cursor-pointer">Shop</li>
            <li className="hover:text-yellow-500 cursor-pointer">Blogs</li>
            <li className="hover:text-yellow-500 cursor-pointer">Contact</li>
          </ul>
          <div
           className='items-end '>
          <button
            
            className="bg-blue-100 text-black w-20 mr-10 h-10 mt-10 rounded-lg hover:bg-blue-500 hover:text-black transition duration-300"
           >
      Login
    </button>
          <button className="bg-blue-100 text-black px-4 h-10 mt-10 rounded-lg hover:bg-blue-500 hover:text-black transition duration-300">
            Get A Quote
          </button>
          </div>
        </nav>
    </div>
  )
}

