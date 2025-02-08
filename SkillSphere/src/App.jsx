import { useState } from 'react'
import logo from './assets/Logo.jpg'
import './App.css'
import {delay, motion} from 'framer-motion'
import icons from './assets/assets'
import background from './assets/background-vid-skillsphere.mp4'


function App() {
  const [count, setCount] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      icon: icons.money,
      title: "Affordable Pricing",
      description: "Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam.",
    },
    {
      icon: icons.license,
      title: "Licensed Technicians",
      description: "Aldus Corporation, which later merged with Adobe Systems.",
    },
    {
      icon: icons.star,
      title: "Top Rated Service",
      description: "Lacinia quis vel eros donec. Ullamcorper a lacus vestibulum sed.",
    },
    {
      icon: icons.support,
      title: "24/7 Support",
      description: "We provide round-the-clock assistance for all your needs.",
    },
    {
      icon: icons.eco,
      title: "Eco-Friendly Solutions",
      description: "Sustainable and eco-friendly plumbing practices for a better tomorrow.",
    },
    {
      icon: icons.star,
      title: "Top Rated Service",
      description: "Lacinia quis vel eros donec. Ullamcorper a lacus vestibulum sed.",
    },
    {
      icon: icons.star,
      title: "Timely Service",
      description: "Lacinia quis vel eros donec. Ullamcorper a lacus vestibulum sed.",
    },
  ];

  const visibleBoxes = 3; // Number of boxes to show at once

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };



  return (
    <div className=''> 
      {/* hereo uncle, header */}
        <div className='relative h-screen w-full bg-gray-900 text-white'>
        <div className="absolute inset-0">
            <video 
            className="absolute top-0 left-0 w-full h-full object-cover" 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src={background} type="video/mp4" />
           
          </video>
        </div>
        <nav className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 bg-black bg-opacity-70">
          <div className="flex items-center space-x-2">
            <div className="text-yellow-500 text-2xl font-bold flex items-center">
            <img src={logo} alt="Logo" className="w-40 h-20 border-s-6 rounded-full "/>
            </div>
          </div>
          <ul className="hidden md:flex space-x-6 text-lg gap-10" >
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
        
        <motion.div className=" absolute inset-0 flex flex-col justify-center items-start px-12 max-w-2xl "
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1,  }} viewport={{ once: true }}>
          <p className="text-sm uppercase tracking-wide">Let's Get To Work</p>
          <h1 className="text-5xl font-bold mt-2 leading-tight">Honest, Trustworthy, And Does Good Work.</h1>
          <p className="mt-4 text-lg text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum soluta quas quisquam minus cupiditate perferendis, voluptatem illum consequuntur itaque quo.</p>
          <div className="mt-6 flex space-x-4">
            <button className="bg-blue-500 text-black px-4 py-2 rounded-lg hover:bg-white hover:text-black transition duration-300">Get A Quote</button>
            <button className="bg-blue-500 text-black hover:bg-white hover:text-black transition duration-300 px-6 py-3 rounded-lg">Click here</button>
          </div>
        </motion.div>
        </div>

      {/* about hu */}
      <div className="flex justify-center bg-blue-100 h-full pt-10 pb-[100px]  rounded-t-none rounded-b-full rounded-r-none rounded-l-none">
      <div className="relative rounded-lg">
      <motion.h2 className="text-center text-5xl font-semibold mb-6 pb-10"
      initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}
      >ABOUT US</motion.h2>
      <motion.h1 className="text-center text-6xl font-bold pb-20"
      initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 , deplay: 0.2}} viewport={{ once: true }}
      >We Offer Plumbing Work Since 1967</motion.h1>

      {/* Slider Content */}
      <div className="flex overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out "
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleBoxes)}%)`,
            width: `${(data.length / visibleBoxes) * 100}%`,
          }}
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              className=" flex flex-shrink-0 w-[32.0%] h-[200px] p-4 pr-0 text-center gap-10 bg-white rounded-3xl mx-2  hover:bg-blue-500 hover:transition-transform duration-300 hover:text-white"
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, deplay: 0.4 }} viewport={{ once: true }}
            >
              <div className='content-evenly'>
                <img src={item.icon} alt="" className='w-[130px] h-[90px] p-2 top-10 '/>
              </div>
              <div className='text-center pt-7 mr-7'>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className=" mt-2 font-bold">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-4 pt-10 space-x-2">
        {Array.from({ length: Math.ceil(data.length / visibleBoxes) }).map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-3 w-3 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-400"
            }`}
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}
          ></motion.button>
        ))}
      </div>
    </div>
    </div>


     
      {/* design hu */}

      <motion.div className=' p-5  bg-gray-100 '>
        {/* main secction */}
        <div className='flex justify-center left-10 '>
          {/* leftside content */}
          <motion.div className=" "
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1,  }} viewport={{ once: true }}>
            {/* heading */}
            <h3 className=''>24/7 hassle-free </h3>
            <h1 className='text-5xl font-bold'>home and businesses  </h1>
            <h1 className='text-5xl font-bold'>installation and Services</h1>
            {/* photo */}
            <motion.div className="!sticky top-0 "
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.3  }} viewport={{ once: true }}>
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
          </motion.div>
          </motion.div>
          {/* right content */}
          <div className=" p-5">
            
            <div className=" w-[500px] border-l-4 border-black">
            
              <motion.p className='pl-3'
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1,  }} viewport={{ once: true }}
              >Imperdiet massa tincidunt nunc pulvinar sapien. Sit amet facilisis magna etiam odio mollis mollis. Integer lacus ligula, imperdiet vel massa in, maximus suscipit turpis. Mauris ac risus sed quam semper auctor. Nam tempus volutpat ipsum, non viverra</motion.p>
            </div>
            <motion.div className="pt-20  group-hover:scale-110 trabnsition-all duration-300"
             initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.3 }} viewport={{ once: true }}
            >
              <div className=''>
                <div className="mt-10 flex hover:">
                  <div className='flex '>
                    <img src={icons.worker} alt="" className='w-[120px] h-[60px]  bg-blue-200 rounded-full  hover:bg-blue-500 hover:scale-110 hover: transition-all duration-300'/>
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
                   <img src={icons.docs} alt="" className='w-[120px] h-[60px]   bg-blue-200 rounded-full  hover:bg-blue-500 hover:scale-110 hover: transition-all duration-300'/>
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
                   <motion.img src={icons.money} alt="" className='w-[120px] h-[60px] bg-blue-200 rounded-full  hover:bg-blue-500 hover:scale-110 hover: transition-all duration-300'/>
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
                   <img src={icons.service} alt="" className='w-[120px] h-[60px] bg-blue-200 rounded-full  hover:bg-blue-500 hover:scale-110 hover: transition-all duration-300'/>
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
                  <img src={icons.call} alt="" className='w-12 h-12 pt-1'/>
                </div>
                  <div className=' font-bold pl-4 '>
                    <p>contact</p>
                    <p>7228833817</p>
                  </div>
              </div>
             </div>
            </motion.div>
          </div>
        </div>
    

      </motion.div>
        


      {/* Our service start */}
      {/* our service main div */}
      <div className="pt-[100px] bg-blue-100"> 

        <div className="text-center">
          <h1 className="font-semibold text-3xl">Our service</h1>
          <h1 className="font-bold text-5xl mt-5">Complete Solution Under One Roof</h1>
        </div>
        <div>
          <div className=" grid grid-cols-4">
            <div className="w-10 h-10 bg-white gap-10">1</div>
            <div className="w-10 h-10 bg-black   gap-10">2</div>
            <div className="w-10 h-10 bg-white gap-10">3</div>
            <div className="w-10 h-10 bg-black   gap-10">4</div>
            <div className="w-10 h-10 bg-white gap-10">5</div>
            <div className="w-10 h-10 bg-black gap-10">6</div>
            <div className="w-10 h-10 bg-white gap-10">7</div>
            <div className="w-10 h-10 bg-black gap-10">8</div>

          </div>
        </div>
        <div className="flex">
          <button></button>
          <button></button>
        </div>





      </div>

      
    </div>
  )
}

export default App













