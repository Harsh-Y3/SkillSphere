import { useState } from 'react'
import logo from './assets/Logo.jpg'
import './App.css'
import {motion} from 'framer-motion'
import worker from './assets/worker.png'
import docs from './assets/docs.png'
import money from './assets/money.png'
import service from './assets/service.png'
import call from './assets/call.png'

function App() {  
  return (
    <> 
      {/* hereo uncle, header */}
        <div className='relative h-screen w-full bg-gray-900 text-white'>
        <div className="absolute inset-0">
        <img src="https://i.pinimg.com/originals/4e/93/d7/4e93d726dda450fd18476f78bbf8388d.jpg" alt="Electrician working" className="w-full h-full object-cover opacity-60" />
        </div>
        <nav className="absolute top-0 left-0 right-0 flex justify-between items-center p-6 bg-black bg-opacity-70">
          <div className="flex items-center space-x-2">
            <div className="text-yellow-500 text-2xl font-bold flex items-center">
            <img src={logo} alt="Logo" className="w-40 h-20 border-s-6 rounded-full"  />
            </div>
          </div>
          <ul className="hidden md:flex space-x-6">
            <li className="hover:text-yellow-500 cursor-pointer">Home</li>
            <li className="hover:text-yellow-500 cursor-pointer">About Us</li>
            <li className="hover:text-yellow-500 cursor-pointer">Shop</li>
            <li className="hover:text-yellow-500 cursor-pointer">Blogs</li>
            <li className="hover:text-yellow-500 cursor-pointer">Contact</li>
          </ul>
          <button className="bg-blue-500 text-black px-4 py-2 rounded-lg hover:bg-white hover:text-black transition duration-300">
            Get A Quote
          </button>
        </nav>
        <div className="absolute inset-0 flex flex-col justify-center items-start px-12 max-w-2xl">
          <p className="text-sm uppercase tracking-wide">Let's Get To Work</p>
          <h1 className="text-5xl font-bold mt-2 leading-tight">Honest, Trustworthy, And Does Good Work.</h1>
          <p className="mt-4 text-lg text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum soluta quas quisquam minus cupiditate perferendis, voluptatem illum consequuntur itaque quo.</p>
          <div className="mt-6 flex space-x-4">
            <button className="bg-blue-500 text-black px-4 py-2 rounded-lg hover:bg-white hover:text-black transition duration-300">Get A Quote</button>
            <button className="bg-blue-500 text-black hover:bg-white hover:text-black transition duration-300 px-6 py-3 rounded-lg">Click here</button>
          </div>
        </div>
        </div>

      {/* about uncle */}
  



      {/* design hu */}

      <motion.div className=' p-5  bg-gray-100'>
        {/* main secction */}
        <div className='flex justify-center left-10 '>
          {/* leftside content */}
          <div className=" ">
            {/* heading */}
            <h3 className='sticky '>24/7 hassle-free </h3>
            <h1 className='text-5xl font-bold'>home and businesses  </h1>
            <h1 className='text-5xl font-bold'>installation and Services</h1>
            {/* photo */}
            <div className="sticky top-0">
            <div className="flex flex-col md:flex-row gap-4 p-6 bg-gray-100">
              {/* Left Column */}
              <div className="flex-1 flex flex-col gap-4 mt-5">
                <div className="bg-white rounded-lg overflow-hidden shadow-md mt-10">
                  <img
                    src="https://wdtthemes.kinsta.cloud/mezan/wp-content/uploads/sites/4/2024/03/h1-about-img-01.jpg"
                    alt="Technician working"
                    className="w-[500px] h-fit" />
                  
                </div>
                
            </div>
            
            {/* Right Column */}
            
            <div className="flex-1 flex flex-col gap-4 pt-4 ">
            {/* Stats Section */}
            <div className="bg-yellow-500 text-white rounded-lg p-6 shadow-md flex flex-col items-center justify-center absolute z-50 left-[40%] top-[40%] ">
                <h2 className="text-3xl font-bold">560+</h2>
                <p className="text-lg">Projects Done</p>
                <h2 className="text-3xl font-bold mt-4">180+</h2>
                <p className="text-lg">Technicians</p>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img
                    src="https://wdtthemes.kinsta.cloud/mezan/wp-content/uploads/sites/4/2024/03/h1-about-img-02.jpg"
                    alt="Technician fixing sink"
                    className="w-full h-auto"
                  />
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://wdtthemes.kinsta.cloud/mezan/wp-content/uploads/sites/4/2024/03/h1-about-img-03.jpg"
                  alt="Smiling technician"
                  className="w-full h-auto"/>

              </div>
            </div>
          </div>
          </div>
          </div>
          {/* right content */}
          <div className=" p-5">
            
            <div className=" w-[500px]">
            
              <p>Imperdiet massa tincidunt nunc pulvinar sapien. Sit amet facilisis magna etiam odio mollis mollis. Integer lacus ligula, imperdiet vel massa in, maximus suscipit turpis. Mauris ac risus sed quam semper auctor. Nam tempus volutpat ipsum, non viverra</p>
            </div>
            <div className="pt-20  group-hover:scale-110 trabnsition-all duration-300">
              <div className=''>
                <div className="mt-10 flex hover:">
                  <div className='flex '>
                    <img src={worker} alt="" className='w-[120px] h-[60px]  bg-blue-200 rounded-full  hover:bg-blue-500 hover:scale-110 hover: transition-all duration-300'/>
                  </div>
                  <div className='pl-4'>
                    <h1 className='font-bold text-xl ml-2'>Earliest Consultation</h1>
                    <p className='text-l pl-2 pt-5'>Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Aenean vel elit scelerisque mauris pellentesque consectetur adipiscing elitpulvinar.</p>
                  </div>
               
                </div>
               
              </div>
              
              <div className=''>
                <div className="mt-10 pt-5 flex">
                  <div className='flex'>
                   <img src={docs} alt="" className='w-[120px] h-[60px]   bg-blue-200 rounded-full  hover:bg-blue-500 hover:scale-110 hover: transition-all duration-300'/>
                  </div>
                  <div className='pl-4'>
                   <h1 className='font-bold text-xl ml-2'>Customized Solution</h1>
                   <p className='text-l pl-2 pt-5'>Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Purus gravida quis blandit turpis. Dolor sit amet consectetur adipiscing elit.</p>
                  </div>
               
                </div>
               
              </div>
              <div className=''>
                <div className="mt-10 pt-5 flex">
                  <div className='flex'>
                   <motion.img src={money} alt="" className='w-[120px] h-[60px] bg-blue-200 rounded-full  hover:bg-blue-500 hover:scale-110 hover: transition-all duration-300'/>
                  </div>
                  <div className='pl-4'>
                    <h1 className='font-bold text-xl ml-2'>Affordable Pricing</h1>
                    <p className='text-l pl-2 pt-5'>Quis vel eros donec ac odio tempor. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit.Suspendisse interdum consectetur.</p>
                  </div>
               
                </div>
               
              </div>
              <div className=''>
                <div className="mt-10 pt-5 flex ">
                  <div className='flex'>
                   <img src={service} alt="" className='w-[120px] h-[60px] bg-blue-200 rounded-full  hover:bg-blue-500 hover:scale-110 hover: transition-all duration-300'/>
                  </div>
                  <div className='pl-4'>
                    <h1 className='font-bold text-xl ml-2'>All-In-One Service</h1>
                    <p className='text-l pl-2 pt-5'>Pellentesque id nibh tortor id. Quis vel eros donec ac odio tempor orci. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam.</p>
                  </div>
               
                </div>
               
              </div>

             <div className="flex pt-20">
              <button className='border rounded-full bg-red-950 w-[122px] h-[50px] text-white text-xl'>Read More</button>
              <div className="pl-[50px] flex">
                <div>
                  <img src={call} alt="" className='w-12 h-12 pt-1'/>
                </div>
                  <div className=' font-bold pl-4 '>
                    <p>contact</p>
                    <p>7228833817</p>
                  </div>
              </div>
             </div>
            </div>
          </div>
        </div>
    

      </motion.div>
      


      {/* why us hu*/}

      
    </>
  )
}

export default App




