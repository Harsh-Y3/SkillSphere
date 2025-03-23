import React from 'react'
import logo from '../assets/Logo.jpg'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <nav className="z-10 fixed top-[-50px] left-0 right-0 h-36 flex justify-between items-center p-4 bg-blue-950 bg-opacity-40 scroll-smooth ">
          <div className="flex pt-10 items-center space-x-2">
            <div className="text-yellow-500 text-2xl font-bold flex items-center">
            <img src={logo} alt="Logo" className="w-[250px] h-[150px] border-s-6 rounded-full "/>
            </div>
          </div>
          <ul className="hidden md:flex space-x-6 text-lg gap-10 pt-10" >
            <li className="text-white hover:text-yellow-500 cursor-pointer"><a href="#home">Home</a></li>
            <li className="text-white hover:text-yellow-500 cursor-pointer"><a href="#about">About Us</a></li>
            <li className="text-white hover:text-yellow-500 cursor-pointer"><a href="#service">Services</a></li>
            <li className="text-white hover:text-yellow-500 cursor-pointer"><a href="#work">Our Work</a></li>
            <li className="text-white hover:text-yellow-500 cursor-pointer"><a href="#contact">Contact</a></li>
          </ul>
          <div
           className='items-end '>
            <Link
            to="/login"
            >
          <button
            
            className="bg-blue-100 text-black w-20 mr-10 h-10 mt-10 rounded-lg hover:bg-blue-500 hover:text-black transition duration-300"
           >
      Login
    </button>
    </Link>
          <button className="bg-blue-100 text-black px-4 h-10 mt-10 rounded-lg hover:bg-blue-500 hover:text-black transition duration-300">
           <a href="#quote"> Get A Quote </a>
          </button>
          </div>
        </nav>
    </div>
  )
}

