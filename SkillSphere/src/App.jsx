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
  const [count, setCount] = useState(0)

  return (
    <> 
      {/* hereo uncle, header */}
      {/* about uncle */}


      {/* design hu */}

      <motion.div className=' p-5  bg-gray-100'>
        {/* main secction */}
        <div className='flex justify-center left-10 '>
          {/* leftside content */}
          <div className=" ">
            {/* heading */}
            <h3 className=''>24/7 hassle-free </h3>
            <h1 className='text-5xl font-bold'>home and businesses  </h1>
            <h1 className='text-5xl font-bold'>installation and Services</h1>
            {/* photo */}
            <div className="flex flex-col md:flex-row gap-4 p-6 bg-gray-100">
              {/* Left Column */}
              <div className="flex-1 flex flex-col gap-4">
                <div className="bg-white rounded-lg overflow-hidden shadow-md mt-10">
                  <img
                    src="https://wdtthemes.kinsta.cloud/mezan/wp-content/uploads/sites/4/2024/03/h1-about-img-01.jpg"
                    alt="Technician working"
                    className="w-full h-fit" />
                  
                </div>
                
            </div>
            
            {/* Right Column */}
            
            <div className="flex-1 flex flex-col gap-4 pt-4">
            {/* Stats Section */}
            <div className="bg-yellow-500 text-white rounded-lg p-6 shadow-md flex flex-col items-center justify-center absolute z-50 left-[25%] top-[60%] ">
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
          {/* right content */}
          <div className=" p-5">
            
            <div className=" w-[500px]">
            
              <p>Imperdiet massa tincidunt nunc pulvinar sapien. Sit amet facilisis magna etiam odio mollis mollis. Integer lacus ligula, imperdiet vel massa in, maximus suscipit turpis. Mauris ac risus sed quam semper auctor. Nam tempus volutpat ipsum, non viverra</p>
            </div>
            <div className="pt-10 pl-2">
              <div className=''>
                <div className="mt-10 flex">
                  <div className='flex'>
                    <img src={worker} alt="" className='w-[120px] h-[60px] '/>
                  </div>
                  <div className='pl-4'>
                    <h1 className='font-bold text-xl ml-2'>Earliest Consultation</h1>
                    <p className='text-l pl-2 pt-5'>Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Aenean vel elit scelerisque mauris pellentesque consectetur adipiscing elitpulvinar.</p>
                  </div>
               
                </div>
               
              </div>
              
              <div className=''>
                <div className="mt-10 flex">
                  <div className='flex'>
                   <img src={docs} alt="" className='w-[120px] h-[60px] before:bg-slate-200'/>
                  </div>
                  <div className='pl-4'>
                   <h1 className='font-bold text-xl ml-2'>Customized Solution</h1>
                   <p className='text-l pl-2 pt-5'>Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Purus gravida quis blandit turpis. Dolor sit amet consectetur adipiscing elit.</p>
                  </div>
               
                </div>
               
              </div>
              <div className=''>
                <div className="mt-10 flex">
                  <div className='flex'>
                   <img src={money} alt="" className='w-[120px] h-[60px] before:bg-slate-200'/>
                  </div>
                  <div className='pl-4'>
                    <h1 className='font-bold text-xl ml-2'>Affordable Pricing</h1>
                    <p className='text-l pl-2 pt-5'>Quis vel eros donec ac odio tempor. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit.Suspendisse interdum consectetur.</p>
                  </div>
               
                </div>
               
              </div>
              <div className=''>
                <div className="mt-10 flex">
                  <div className='flex'>
                   <img src={service} alt="" className='w-[120px] h-[60px] before:bg-slate-200'/>
                  </div>
                  <div className='pl-4'>
                    <h1 className='font-bold text-xl ml-2'>All-In-One Service</h1>
                    <p className='text-l pl-2 pt-5'>Pellentesque id nibh tortor id. Quis vel eros donec ac odio tempor orci. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam.</p>
                  </div>
               
                </div>
               
              </div>

             <div className="flex pt-10">
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




