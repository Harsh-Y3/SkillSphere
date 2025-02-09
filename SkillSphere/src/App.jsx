import { useState } from 'react'
import logo from './assets/Logo.jpg'
import './App.css'
import {delay, motion} from 'framer-motion'
import icons from './assets/assets'
import background from './assets/background-vid-skillsphere.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { image } from 'framer-motion/client'


function App() {
  const [count, setCount] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0);

  const [activeReview, setActiveReview] = useState(0);

  const reviews = [
    {
      name: "Consolata Daria",
      role: "Entrepreneur",
      text: "Until the Ligula Volutpat Nor the Fringe. Everyone's life is ugly. There are no members of my Convallis, Who is always ahead of Lacinia Amet.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "John Doe",
      role: "Businessman",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac magna ut dolor cursus fermentum.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Jane Smith",
      role: "Designer",
      text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/46.jpg",
    },
  ];

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

  const serviceStyle = "flex justify-center items-center group  w-[270px] h-[250px]  bg-white rounded-3xl shadow-md  hover:bg-blue-500 hover:shadow-lg transition-shadow duration-300 ";
 
  const serviceContentStyle = "text-blue-500 text-7xl pt-4 transition-transform duration-300 group-hover:scale-125 group-hover:text-white";

  const serviceHover = "flex justify-center items-center rounded-3xl group-hover:bg-blue-500 group-hover:bg-opacity-50  h-[250px] w-[270px]"
  return (
    <div className=' overflow-hidden z-20'> 
      {/* hereo uncle, header */}
        <div className='relative h-screen w-full text-white'>
        <div className="absolute inset-0">
            <video 
            className="  fixed -z-20  top-0 left-0 w-full h-full object-cover" 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src={background} type="video/mp4" />
           
          </video>
        </div>
        <nav className="absolute top-[-50px] left-0 right-0 flex justify-between items-center p-4  bg-opacity-70">
          <div className="flex items-center space-x-2">
            <div className="text-yellow-500 text-2xl font-bold flex items-center">
            <img src={logo} alt="Logo" className="w-[250px] h-[150px] border-s-6 rounded-full mix-blend-lighten "/>
            </div>
          </div>
          <ul className="hidden md:flex space-x-6 text-lg gap-10" >
            <li className="hover:text-yellow-500 cursor-pointer">Home</li>
            <li className="hover:text-yellow-500 cursor-pointer">About Us</li>
            <li className="hover:text-yellow-500 cursor-pointer">Shop</li>
            <li className="hover:text-yellow-500 cursor-pointer">Blogs</li>
            <li className="hover:text-yellow-500 cursor-pointer">Contact</li>
          </ul>
          <button className="bg-blue-100 text-black px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-black transition duration-300">
            Get A Quote
          </button>
        </nav>
        
        <motion.div className=" absolute inset-0 flex flex-col justify-center items-start px-12 max-w-2xl "
          >
          <motion.p 
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}
          className="text-sm uppercase tracking-wide">Let's Get To Work</motion.p>
          <motion.h1 
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }} viewport={{ once: true }}
          className="text-5xl font-bold mt-2 leading-tight">Honest, Trustworthy, And Does Good Work.</motion.h1>
          <motion.p 
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.3 }} viewport={{ once: true }}
          className="mt-4 text-lg text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum soluta quas quisquam minus cupiditate perferendis, voluptatem illum consequuntur itaque quo.</motion.p>
          <motion.div 
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}
          className="mt-6 flex space-x-4">
            <button className="bg-blue-100 text-black px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-black transition duration-300">Get A Quote</button>
            <button className="bg-blue-100 text-black hover:bg-blue-500 hover:text-black transition duration-300 px-6 py-3 rounded-lg">Click here</button>
          </motion.div>
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
                <motion.div 
                initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, deplay:0.2 }} viewport={{ once: true }}
                className="mt-10 flex hover:">
                  <div className='flex '>
                    <img src={icons.worker} alt="" className='w-[120px] h-[60px]  bg-blue-200 rounded-full  hover:bg-blue-500 hover:scale-110 hover: transition-all duration-300'/>
                  </div>
                  <div className='pl-4'>
                    <h1 className='font-bold text-xl ml-2'>Earliest Consultation</h1>
                    <p className='text-l pl-2 pt-5'>Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Aenean vel elit scelerisque mauris pellentesque consectetur adipiscing elitpulvinar.</p>
                  </div>
               
                </motion.div>
               
              </div>
              
              <div className=''>
                <motion.div 
                initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }} viewport={{ once: true }}
                className="mt-10 pt-5 flex">
                  <div className='flex'>
                   <img src={icons.docs} alt="" className='w-[120px] h-[60px]   bg-blue-200 rounded-full  hover:bg-blue-500 hover:scale-110 hover: transition-all duration-300'/>
                  </div>
                  <div className='pl-4'>
                   <h1 className='font-bold text-xl ml-2'>Customized Solution</h1>
                   <p className='text-l pl-2 pt-5'>Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Purus gravida quis blandit turpis. Dolor sit amet consectetur adipiscing elit.</p>
                  </div>
               
                </motion.div>
               
              </div>
              <div className=''>
                <motion.div
                initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.4 }} viewport={{ once: true }}
                className="mt-10 pt-5 flex">
                  <div className='flex'>
                   <motion.img src={icons.money} alt="" className='w-[120px] h-[60px] bg-blue-200 rounded-full  hover:bg-blue-500 hover:scale-110 hover: transition-all duration-300'/>
                  </div>
                  <div className='pl-4'>
                    <h1 className='font-bold text-xl ml-2'>Affordable Pricing</h1>
                    <p className='text-l pl-2 pt-5'>Quis vel eros donec ac odio tempor. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit.Suspendisse interdum consectetur.</p>
                  </div>
               
                </motion.div>
               
              </div>
              <div className=''>
                <motion.div
                initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1,  }} viewport={{ once: true }}
                className="mt-10 pt-5 flex ">
                  <div className='flex'>
                   <img src={icons.service} alt="" className='w-[120px] h-[60px] bg-blue-200 rounded-full  hover:bg-blue-500 hover:scale-110 hover: transition-all duration-300'/>
                  </div>
                  <div className='pl-4'>
                    <h1 className='font-bold text-xl ml-2'>All-In-One Service</h1>
                    <p className='text-l pl-2 pt-5'>Pellentesque id nibh tortor id. Quis vel eros donec ac odio tempor orci. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam.</p>
                  </div>
               
                </motion.div>
               
              </div>

             <motion.div
             initial={{ opacity: 0, translateZ: 50 }} whileInView={{ opacity: 1, translateZ: 0 }} transition={{ duration: 1,  }} viewport={{ once: true }}
             className="flex pt-20">
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
             </motion.div>
            </motion.div>
          </div>
        </div>
    

      </motion.div>
        


      {/* Our service start */}
      {/* our service main div */}
      <div className="pt-[100px] bg-blue-100 pb-[100px]"> 

        <div className="text-center">
          <motion.h1 
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1,  }} viewport={{ once: true }}
          className="font-semibold text-3xl">Our service</motion.h1>
          <motion.h1
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} viewport={{ once: true }}
          className="font-bold text-5xl mt-5">Complete Solution Under One Roof</motion.h1>
        </div>
        <div className='pt-10'>
          <div className=" grid grid-cols-4 gap-10 place-items-center pl-20">
            <motion.div 
            initial={{ opacity: 0,  translateZ:-50 }} whileInView={{ opacity: 1, translateZ: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}
            className="group">
              <div className={`group ${serviceStyle} group-hover:bg-[url('https://wdtthemes.kinsta.cloud/mezan/wp-content/uploads/sites/4/2024/03/General-Plumbing.jpg')] bg-contain bg-center`}>  
                <div className={serviceHover}>
              <FontAwesomeIcon
              icon={icons.tool}
              className={serviceContentStyle}
              />
              </div>
              
              </div>
              <div className="font-bold pl-[65px] pt-4 hover:text-blue-500">
                <p>General Plumbing</p>
              </div>
            </motion.div>

            <motion.div
            initial={{ opacity: 0,  translateZ:-50 }} whileInView={{ opacity: 1, translateZ: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}
            className="group">
              <div className={`group ${serviceStyle} group-hover:bg-[url('https://wdtthemes.kinsta.cloud/mezan/wp-content/uploads/sites/4/2024/03/Electrical-Works.jpg')] bg-contain bg-center `}>  
                <div className={serviceHover}>
              <FontAwesomeIcon
              icon={icons.plug}
              className={serviceContentStyle}
              />
              </div>

              </div>
              <div className="font-bold pl-[80px] pt-4 hover:text-blue-500">
                <p>Electrical Works</p>
              </div>
            </motion.div>

            <motion.div 
            initial={{ opacity: 0,  translateZ:-50 }} whileInView={{ opacity: 1, translateZ: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}
            className="group">
              <div className={`group ${serviceStyle} group-hover:bg-[url('https://wdtthemes.kinsta.cloud/mezan/wp-content/uploads/sites/4/2024/02/service-bg-imgbox.jpg')] bg-contain bg-center `}>  
                <div className={serviceHover}>
              <FontAwesomeIcon
              icon={icons.hammer}
              className={serviceContentStyle}
              />
              </div>

              </div>
              <div className="font-bold pl-[75px] pt-4 hover:text-blue-500">
                <p>Carpentry Works</p>
              </div>
            </motion.div>
            <motion.div
            initial={{ opacity: 0,  translateZ:-50 }} whileInView={{ opacity: 1, translateZ: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}
            className="group">
              <div className={`group ${serviceStyle} group-hover:bg-[url('https://wdtthemes.kinsta.cloud/mezan/wp-content/uploads/sites/4/2024/03/Bathroom-Plumbing.jpg')] bg-contain bg-center `}>  
                <div className={serviceHover}>
              <FontAwesomeIcon
              icon={icons.shower}
              className={serviceContentStyle}
              />
              </div>

              </div>
              <div className="font-bold pl-[65px] pt-4 hover:text-blue-500">
                <p>Bathroom Plumbing</p>
              </div>
            </motion.div>
            <motion.div
            initial={{ opacity: 0,  translateZ:-50 }} whileInView={{ opacity: 1, translateZ: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}
            className="group">
              <div className={`group ${serviceStyle} group-hover:bg-[url('https://wdtthemes.kinsta.cloud/mezan/wp-content/uploads/sites/4/2024/03/Water-Filtration.jpg')] bg-contain bg-center `}>  
                <div className={serviceHover}>
              <FontAwesomeIcon
              icon={icons.burner}
              className={serviceContentStyle}
              />
              </div>

              </div>
              <div className="font-bold pl-[90px] pt-4 hover:text-blue-500">
                <p>Gas Service</p>
              </div>
            </motion.div>
            <motion.div 
            initial={{ opacity: 0,  translateZ:-50 }} whileInView={{ opacity: 1, translateZ: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}
            className="group">
              <div className={`group ${serviceStyle} group-hover:bg-[url('https://wdtthemes.kinsta.cloud/mezan/wp-content/uploads/sites/4/2024/03/Door-Windows-1.jpg')] bg-contain bg-center `}>  
                <div className={serviceHover}>
              <FontAwesomeIcon
              icon={icons.door}
              className={serviceContentStyle}
              />
              </div>

              </div>
              <div className="font-bold pl-[95px] pt-4 hover:text-blue-500">
                <p>Door Fitting</p>
              </div>
            </motion.div>
            <motion.div
            initial={{ opacity: 0,  translateZ:-50 }} whileInView={{ opacity: 1, translateZ: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}
             className="group">
              <div className={`group ${serviceStyle} group-hover:bg-[url('https://wdtthemes.kinsta.cloud/mezan/wp-content/uploads/sites/4/2024/03/Home-Repairs.jpg')] bg-contain bg-center `}>  
                <div className={serviceHover}>
              <FontAwesomeIcon
              icon={icons.house}
              className={serviceContentStyle}
              />
              </div>

              </div>
              <div className="font-bold pl-[85px] pt-4 hover:text-blue-500">
                <p>Home Repairs</p>
              </div>
            </motion.div>
            <motion.div 
            initial={{ opacity: 0,  translateZ:-50 }} whileInView={{ opacity: 1, translateZ: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}
            className="group">
              <div className={`group ${serviceStyle} group-hover:bg-[url('https://wdtthemes.kinsta.cloud/mezan/wp-content/uploads/sites/4/2024/03/Painting-Services.jpg')] bg-contain bg-center `}>  
                <div className={serviceHover}>
              <FontAwesomeIcon
              icon={icons.paint}
              className={serviceContentStyle}
              />
              </div>

              </div>
              <div className="font-bold pl-[75px] pt-4 hover:text-blue-500">
                <p>Painting Services</p>
              </div>
            </motion.div>          
            
          </div>
        </div>
        <div className="flex pt-[70px] justify-center gap-7 pl-20">
          <motion.button 
           initial={{ opacity: 0,  translateZ:-50 }} whileInView={{ opacity: 1, translateZ: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}
          className="border rounded-full bg-yellow-300  w-[122px] h-[50px] text-black text-xl hover:bg-black transition duration-300 hover:text-white ">Get a Queat</motion.button>
          <button className="border rounded-full bg-blue-500 w-[202px] h-[50px] text-white text-xl  hover:bg-yellow-300 transition duration-300 hover:text-black ">Browse all service</button>
        </div>
      </div>



      
    {/* customer review card */}
    <div className="w-screen h-screen">
      <section className="bg-white relative h-screen w-screen  pt-10">
      <div className=" mx-auto  p-10 h-auto rounded-lg shadow-lg flex flex-col md:flex-row items-center">
        {/* Left Side - Illustration */}
        <div className="w-full md:w-1/3">
          <img
          className='w-[500px]'
           src="https://wdtthemes.kinsta.cloud/mezan/wp-content/uploads/sites/4/2024/02/testimonial-type2.png"   
            alt="Illustration"
          />
        </div>

        {/* Right Side - Testimonial Content */}
        <div className=" bg-gray-100 rounded-[50px] w-[70%] h-[800px] p-4 ">
        <h3 className="text-gray-500 uppercase text-sm font-bold">Client Says</h3>
          <div className='flex' >
          
          <h2 className=" font-semibold text-5xl mr-10">Happy Customers</h2>
          <div className='pl-[70px] mt-4 border-l-4 border-yellow-500'>Sem viverra aliquet eget sit amet tellus cras. Scelerisque felis imperdiet proin fermentum leo vel orci.Tortor at auctor urna nunc id. Sit amet facilisis magna etiam odio mollis.</div>
          
          </div>
          <div className="flex pt-8">
            {Array(reviews[activeReview].rating).fill().map((_, i) => (
              <span key={i} className="text-yellow-500 text-lg">★</span>
            ))}
          </div>
          

          {/* Profile Section */}
          <p className="pt-7 text-gray-600 ">{reviews[activeReview].text} Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatem nihil beatae perspiciatis repellendus dolor quidem magnam, inventore modi totam voluptate, minima quaerat alias culpa fuga laudantium nemo tempore quas dicta accusamus illo id repellat. Itaque, deleniti? Consectetur alias velit dignissimos voluptatibus perspiciatis sapiente? Molestiae, repellendus similique corporis magni, libero quia quidem, quasi laboriosam repudiandae possimus sint laudantium sit fuga voluptas provident cupiditate? Illo omnis maiores vero voluptatum eveniet ullam, nihil fugiat praesentium obcaecati neque perspiciatis qui consectetur optio asperiores, atque commodi enim, tenetur illum! Autem, numquam repellat ducimus iste facere pariatur illum assumenda dignissimos consequuntur. Quibusdam quos nisi doloremque!</p>
          <div className="mt-4 flex items-center space-x-3">
            <img
              src={reviews[activeReview].image}
              alt={reviews[activeReview].name}
              className="w-10 h-10 rounded-full"
            />
            <div className='pt-7'>
              <h4 className="font-semibold">{reviews[activeReview].name}</h4>
              <p className="text-gray-500 text-sm font-bold">{reviews[activeReview].role}</p>
            </div>
          </div>
        
        
          
          {/* previous review button and next review button */}
          <div className="mt-6 flex space-x-4 pt-7">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveReview(index)}
            className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
              activeReview === index ? "bg-yellow-300 text-black" : "bg-gray-300 text-gray-700"
            }`}
          >
            Review {index + 1}
          </button>
        ))}
      </div>
        </div>
      </div>

    </section>
  </div>
</div>

     
    )
  }
 

export default App;













