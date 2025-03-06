import { useEffect, useRef, useState } from 'react'

import {delay, motion} from 'framer-motion'
import icons from '../assets/assets'
import background from '../assets/background-vid-skillsphere.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { div, image, li } from 'framer-motion/client'
import beforeAfterImg from '../assets/beforeAfter'
import contactWorkerBg from '../assets/ContactWorkerBg.jpg'
import logoBg from '../assets/logoBg.jpg'
import { Link } from 'react-router-dom'
import { BrowserRouter, createBrowserRouter, RouterProvider,Route, Routes } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isActive, setIsActive] = useState(false);
  // review section
  const [activeReview, setActiveReview] = useState(0);
  const reviews = [
    {
      name: "Consolata Daria",
      role: "Entrepreneur",
      text: "Donec volutpat ligula nec ipsum ultrices fringilla. Quisque vitae est turpis. Nulla sodales convallis mi, quis semper ante lacinia sit amet. Maecenas porta velit a justo commodo mattis at et magna. Cras auctor felis erat, sit amet imperdiet metus lacinia in.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "John Doe",
      role: "Businessman",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod rerum quasi eligendi, consequuntur quia possimus tenetur, odio animi earum, blanditiis iusto. Commodi eligendi reiciendis accusamus aliquam excepturi magnam facilis similique.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Jane Smith",
      role: "Designer",
      text: "Voluptatum esse illum, est asperiores nostrum porro quasi debitis dolorum, eligendi rerum cupiditate expedita necessitatibus tempore quae nihil aperiam ut quas enim? Modi sint quod, reprehenderit aspernatur natus esse ipsam.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/46.jpg",
    },
    {
      name: "Johny Smith",
      role: "Plumber",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod rerum quasi eligendi, consequuntur quia possimus tenetur, odio animi earum, blanditiis iusto. Commodi eligendi reiciendis accusamus aliquam excepturi magnam facilis similique.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/47.jpg",
    },
  ];

    useState(() => 
    {
      const interval = setInterval(() => 
      {
        setActiveReview((prevIndex) =>
        
          prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        );
      }, 7000);
      return () => clearInterval(interval);
    }, [reviews.length]);
    
  // about section
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

  // our service slider
  const brands = [
    "https://static.vecteezy.com/system/resources/previews/022/101/084/large_2x/philips-logo-transparent-free-png.png",
    "https://th.bing.com/th/id/R.a8a655ee926daaff53a7e98fff27f2e9?rik=%2bHZnveegkBfayg&riu=http%3a%2f%2fpngimg.com%2fuploads%2flg_logo%2flg_logo_PNG15.png&ehk=04d34z32I95izfs%2b6b%2bh8Iq6hnex%2bx7nUJ6i5Jw5%2flM%3d&risl=&pid=ImgRaw&r=0",
    "https://brandeps.com/logo-download/G/Godrej-logo-01.png",
    "https://iconape.com/wp-content/png_logo_vector/syska-led-logo.png",
    "https://seeklogo.com/images/U/usha-logo-C928D9208C-seeklogo.com.png",
    "https://download.logo.wine/logo/Havells/Havells-Logo.wine.png",
    "https://static.vecteezy.com/system/resources/previews/024/555/227/original/bajaj-logo-transparent-free-png.png",
    "https://global.jaquar.com/images/thumbs/0049616_0037051_Jaquar-logo-new-764x101.png"
  ];

 
//  before after images 

const beforeAfter = [
  {
    before: beforeAfterImg.home2_before1_1,
    after: beforeAfterImg.home2_after1_2,
  },
  {
    before: beforeAfterImg.home2_before2_1,
    after: beforeAfterImg.home2_after2_2,
  },
  {
    before: beforeAfterImg.home2_before3_1,
    after: beforeAfterImg.home2_after3_2,
  },
  {
    before: beforeAfterImg.home2_before4_1,
    after: beforeAfterImg.home2_after4_2,
  },
  {
    before: beforeAfterImg.home2_before5_1,
    after: beforeAfterImg.home2_after5_2,
  },
];

const inputSlider = useRef(null); // Reference for the slider input
const beforeImg = useRef(null); // Reference for the "before" image
const [sliderValues, setSliderValues] = useState(beforeAfter.map(() => 50)); // State to control slider values
const visibleImgBoxes = 1
const handleInput = (index, e) => {
  const sliderVal = e.target.value; // Get the slider value
  const newSliderValues = [...sliderValues];
  newSliderValues[index] = sliderVal;
  setSliderValues(newSliderValues); // Update the state
};

const [currentImgIndex, setCurrentImgIndex] = useState(0);
useState(() => 
{
  const interval = setInterval(() => 
  {
    setCurrentImgIndex((prevIndex) =>
    
      prevIndex === beforeAfter.length - 1 ? 0 : prevIndex + 1
    );
  }, 5000);
  return () => clearInterval(interval);
}, [beforeAfter.length]);



const handleImgDotClick = (indexImg) => {
  
  setCurrentImgIndex(indexImg * visibleImgBoxes);
};



// contact us Style

const ContactUsInput = "appearance-none border-2 bg-blue-100 h-10 border-red-50 rounded-xl p-4 invalid:border-red-500   valid:border-green-400"

const service =
[
  "Furniture",
  "Web Dev",
  "Programmer",
  "Plimbing",
  "Electrition",
  "Pinting",
  "Other Services",
  
]

const [selectedService, setSelectedService] = useState("");
const [isOpen, setIsOpen] = useState(false);
const [searchBar, setSearchBar] = useState("");
const dropDownRef = useRef(null);

const filteredService = service.filter(service => service.toLowerCase().includes(searchBar.toLowerCase()));

useEffect(() =>
{
  function handleClickOutside(event)
  {
    if(dropDownRef.current && !dropDownRef.current.contains(event.target))
    {
      setIsOpen(false);
    }
  }
  document.addEventListener("mousedown", handleClickOutside);
  return () =>
  {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);


// router 



  return (
    <div className=' overflow-hidden z-20 m-0 p-0 font-serif '> 
    
      {/* hereo uncle, header */} 
        <div className=' h-screen w-full text-white '> 
        <div className="absolute inset-0"> 
            <video 
            className=" fixed -z-20  top-0 left-0 w-full h-full object-cover" 
            autoPlay 
            loop 
            muted 
            playsInline 
          >
            
            <source src={background} type="video/mp4" />
           
          </video>
        </div>
        
        
        <motion.div className=" absolute inset-0 flex flex-col justify-center items-start px-12 max-w-2xl "
          >
          <motion.p 
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
          className="text-sm uppercase tracking-wide">Let's Get To Work</motion.p>
          <motion.h1 
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}
          className="text-5xl font-bold mt-2 leading-tight">Honest, Trustworthy, And Does Good Work.</motion.h1>
          <motion.p 
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}
          className="mt-4 text-lg text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum soluta quas quisquam minus cupiditate perferendis, voluptatem illum consequuntur itaque quo.</motion.p>
          <motion.div 
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
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
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5,  }} viewport={{ once: true }}>
            {/* heading */}
            <h3 className=''>24/7 hassle-free </h3>
            <h1 className='text-5xl font-bold'>home and businesses  </h1>
            <h1 className='text-5xl font-bold'>installation and Services</h1>
            {/* photo */}
            <motion.div className="!sticky top-0 "
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3  }} viewport={{ once: true }}>
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
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5,  }} viewport={{ once: true }}
              >Imperdiet massa tincidunt nunc pulvinar sapien. Sit amet facilisis magna etiam odio mollis mollis. Integer lacus ligula, imperdiet vel massa in, maximus suscipit turpis. Mauris ac risus sed quam semper auctor. Nam tempus volutpat ipsum, non viverra</motion.p>
            </div>
            <motion.div className="pt-20  group-hover:scale-110 trabnsition-all duration-300"
             initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}
            >
              <div className=''>
                <motion.div 
                initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, deplay:0.2 }} viewport={{ once: true }}
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
                initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}
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
                initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }} viewport={{ once: true }}
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
                initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.6 }} viewport={{ once: true }}
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
             initial={{ opacity: 0, translateZ: 50 }} whileInView={{ opacity: 1, translateZ: 0 }} transition={{ duration: 0.5,  }} viewport={{ once: true }}
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

      {/* get a quate form */}
      <div className=''>
        <section className='bg-white pt-10 flex justify-center  '>
          <div className='flex'>
          <div className=' bg-white  w-[1280px] h-[735px] flex flex-row'>
            {/* left content */}
            <div className='w-[880px] h-[386px]'>
            <div className="">
              <motion.p 
              initial={{ opacity: 0,  x:-50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}
              className='text-lg '>For Free Estimate!</motion.p>
              <motion.h1 
              initial={{ opacity: 0,  x:-50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.3 }} viewport={{ once: true }}
              className='text-6xl font-bold'>Request A Quote</motion.h1>
            </div>

           

           {/* form */}
          <div>
          <motion.form 
          
          initial={{ opacity: 0,  translateZ:50 }} whileInView={{ opacity: 1, translateZ: 0 }} transition={{ duration: 1.5 }} viewport={{ once: true }}className='grid grid-cols-3 gap-10  pt-10'>
              
                <input
              
                className={`appearance-none border-2 bg-blue-100 h-10 border-red-50 rounded-xl p-4 invalid:border-red-500   valid:border-green-400`}
                type="text"
                placeholder='Name'
                minLength={3}
                required
                />
                
                <input
                className={` appearance-none border-2 bg-blue-100 h-10 border-red-50 rounded-xl p-4 invalid:border-red-500   valid:border-green-400 `}
                type="email"
                placeholder='email'
                required

                /> 

                <input 
                className={` appearance-none border-2 bg-blue-100 h-10 border-red-50 rounded-xl p-4 invalid:border-red-500   valid:border-green-400 `}
                type="number"
                placeholder='Mobile Number'
                minLength="10"
                maxLength="10"
                
                required/>
                <input 
                className={` appearance-none border-2 bg-blue-100 h-10 border-red-50 rounded-xl p-4 invalid:border-red-500   valid:border-green-400 `}
                type="text" 
                placeholder='Select service'
                required
                />
                <input 
                className={` appearance-none border-2 bg-blue-100 h-10 border-red-50 rounded-xl p-4 invalid:border-red-500   valid:border-green-400 `}
                type="datetime-local"
                required
                />
                <button
                type="submit"
                placeholder='get qu'
                className='bg-yellow-400 rounded-2xl '
                >Get A Quote </button> 
                <textarea 
                className={` appearance-none resize-none bg-blue-100  rounded-xl pl-4 pt-4 pr-2 pb-3 col-span-2 h-24  invalid:border-red-500   valid:border-green-400 `}
                type="text" 
                placeholder='Description' 
                minLength="20"
                rows='4'
                required
                />
             
            </motion.form>
            </div>
            <motion.div 
            initial={{ opacity: 0,  y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}
            
            className="mt-[60px] bg-gray-100 w-[1000px] h-[256px] flex flex-row rounded-[30px]  ">
              <div className="flex flex-col  items-center bg-yellow-400 rounded-[30px] w-72 pt-3  ">
                <p className='text-xl pt-3 font-semibold'>People Trust</p>
                <h1 className='text-3xl pt-4 font-bold'>Why We 
                  <br />
                  Are Best</h1>
                <p className='pt-5 p-4'>Curabitur vitae nunc sed velit dignissim sodales ut eu. Leo vel orci porta non.
                </p>
              </div>
              <div className="w-[270px] flex flex-col items-center pl-5">
                <div>
                  <img src={icons.license}
                  className='h-[63px]] w-[68px] pt-4'
                  alt="" />
                </div>                
                <div className="pt-1">
                <h1 className='text-2xl pt-4 font-bold pl-1 text-center'>Licensed Technician</h1>
                <p className='pl-2'>Mauris augue neque gravida in fermentum et sollicitudin.</p>
                </div>
                
              </div>
              <div className="w-[270px] flex flex-col items-center pl-5 ">
                <div>
                  <img src={icons.star}
                  className='h-[63px]] w-[68px] pt-4'
                  alt="" />
                </div>                
                <div className="pt-1">
                <h1 className='text-2xl pt-4 font-bold'>Top Rated Service</h1>
                <p>Mauris augue neque gravida in fermentum et sollicitudin.</p>
                </div>
                
              </div>
              <div className="w-[270px]  flex flex-col items-center pl-5">
                <div >
                  <img src={icons.support}
                  className='h-[63px]] w-[68px] pt-4'
                  alt="" />
                </div>                
                <div className="pt-1">
                <h1 className='text-2xl pt-4 font-bold'>Timely Services</h1>
                <p>Mauris augue neque gravida in fermentum et sollicitudin.</p>
                </div>
                
              </div>
              
            </motion.div>
           </div>
           <motion.div 
           initial={{ opacity: 0,  y:50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}
           className="">
            <img 
            className='h-[700px] w-[400px]'
            src="https://wdtthemes.kinsta.cloud/mezan/wp-content/uploads/sites/4/2024/04/req-img.png" alt="" />
           </motion.div>
           
            </div>
            
            
        </div>
        
        </section>
        
       
        
        
      </div>

      {/* our work section */}

      <div>
        <section className=' bg-blue-400'>
          <div className='flex flex-row mx-40 py-10 '>
            <div className='w-[587px] h-[163px]'>
              <h1 className='text-yellow-400 font-semibold'>Friendly Services</h1>
              <h1 className='text-5xl text-white font-bold'>safe and secure Plumbing, Electrical and Carpenter  Work</h1>
            </div>
            <div className='w-[368px] ml-20 border-l-2'>
                <p className='text-white pl-10'>Egestas erat imperdiet sed euismod nisi porta lorem mollis. Nunc scelerisque viverra mauris in aliquam. Morbi non arcu risus quis.Libero enim sed faucibus turpis in eu mi. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh.</p>
            </div>
          </div>
          <div className='flex flex-row justify-around w-[1020px] mx-[200px] gap-20 text-white '>
            <div className=''>
              <h1 className='text-yellow-400 text-6xl font-extrabold'>980+</h1>
              <p>Successful Services</p>
            </div>
            <div>
            <h1 className='text-yellow-400 text-6xl font-extrabold'>900+</h1>
            <p>Satisfied Clients</p>
            </div>
            <div>
            <h1 className='text-yellow-400 text-6xl font-extrabold'>450+</h1>
            <p>Professionals</p>
            </div>
            <div>
            <h1 className='text-yellow-400 text-6xl font-extrabold'>220+</h1>
            <p>Global Stores</p>
            </div>
          </div>
          <div className='bg-gradient-to-b from-blue-400 to-blue-300'>
            <div className='w-full h-10 '></div>
          </div>
          <div className='flex flex-row px-40 p-10 pt-10 bg-blue-300'>
            <div className='w-[587px] h-[163px]'>
              <h1 className=' text-white font-semibold'>Quality Product</h1>
              <h1 className='text-5xl font-bold pt-5'>We Use Finest ingredients</h1>
            </div>
            <div className='w-[368px] ml-20 border-l-2 border-blue-500'>
                <p className='text-black pl-10'>Egestas erat imperdiet sed euismod nisi porta lorem mollis. Nunc scelerisque viverra mauris in aliquam. Morbi non arcu risus quis.Libero enim sed faucibus turpis in eu mi. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh.</p>
            </div>
          </div>
          <main className="max-w-screen pl-[80px] bg-blue-300">
      <div
        className="relative overflow-hidden w-full"
        style={{
          height: "100px",
          maskImage:
            "linear-gradient(to right, transparent, #000 25%, #000 25%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 25%, #000 25%, transparent)"
        }}
      >
        <div className="relative flex bg-blue-400 ml-24 gap-10">
          {brands.map((brand, idx) => (
            <motion.div
              key={idx}
              className="absolute gap-10"
              style={{
                width: "150px",
                height: "100px"
              }}
              initial={{ left: "100%" }}
              animate={{ left: "-150px" }}
              transition={{
                duration: 10,
                ease: "linear",
                repeat: Infinity,
                delay: (10 / brands.length) * idx
              }}
              
            >
              <img src={brand} alt="" className="w-full h-full object-contain mix-blend-color-do" />
            </motion.div>
          ))}
        </div>
      </div>
    </main>

          
          

        </section>
      </div>
      
      {/* before after image */}
     
      <div className="flex flex-col justify-center items-center bg-white pt-7">
      <div className="pt-7">
        <motion.h1 
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
         viewport={{ once: true }}
        className="font-semibold text-3xl text-center">Before & After</motion.h1>
        <motion.h1 
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: 0.3 }}
         viewport={{ once: true }}
        className="font-bold text-5xl mt-5">Amazing Work Results</motion.h1>
        <div className=""></div>
      </div>
      <div className="">
        <div className="relative flex">{/* Before Image */}</div>
        <div className="flex overflow-hidden w-screen">
          <div
            className="flex transition-transform duration-500 w-[800px] pl-[370px] gap-10 ease-in-out pt-10"
            style={{
             
              transform: `translateX(-${currentImgIndex * 800}px)`,
              transition: "transform 0.5s ease-in-out",
              // width: `${beforeAfter.length * 100}px`,
            }}
          >
            {beforeAfter.map((itemImg, indexImg) => (
              <motion.div
                key={indexImg}
                className="w-[800px] flex-shrink-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="relative flex">
                  {/* Before Image */}
                  <img
                    ref={beforeImg}
                    className="absolute top-0 h-full object-cover object-left border-blue-300"
                    src={itemImg.before}
                    alt="before"
                    style={{ width: `${sliderValues[indexImg]}%` }} // Dynamically set width
                  />

                  {/* After Image */}
                  <img
                    className="w-full h-full object-cover object-left"
                    src={itemImg.after}
                    alt="after"
                  />

                  {/* Slider Input */}
                  <input
                    ref={inputSlider}
                    type="range"
                    className="absolute inset-0 z-10 appearance-none bg-transparent cursor-pointer"
                    min={0}
                    max={100}
                    value={sliderValues[indexImg]} // Use individual slider value
                    onInput={(e) => handleInput(indexImg, e)} // Pass index and event to handleInput
                    onChange={(e) => 
                    {
                      clearInterval(autoSlideRef.current);
                    }
                    }
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4 pt-10 space-x-2">
          {Array.from({ length: beforeAfter.length }).map((_, indexImg) => (
            <motion.button
              key={indexImg}
              onClick={() => handleImgDotClick(indexImg)}
              className={`h-3 w-3 rounded-full ${
                currentImgIndex === indexImg ? 'bg-blue-500' : 'bg-gray-400'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            ></motion.button>
          ))}
        </div>
      </div>
    </div>

    {/* customer review card */}
    <div className="w-screen   h-[500px]">
      <section className="bg-white relative  w-screen  pt-10">
      <div className=" mx-auto  p-10   flex flex-col md:flex-row items-center">
        {/* Left Side - Illustration */}
        <motion.div 
         initial={{ opacity: 0, x: -50 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.5 }}
         viewport={{ once: true }}
        className="w-full md:w-1/3">
          <img
          className='w-[500px] '
           src="https://wdtthemes.kinsta.cloud/mezan/wp-content/uploads/sites/4/2024/02/testimonial-type2.png"   
            alt="Illustration"
          />
        </motion.div>

        {/* Right Side - Testimonial Content */}
        <div className=" bg-gray-100 rounded-[50px] w-[80%] h-[640px] p-4 flex flex-col">
        <motion.h3 
         initial={{ opacity: 0, x: -50 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.5 }}
         viewport={{ once: true }}
        className="text-gray-500 uppercase text-sm font-bold">Client Says</motion.h3>
          <div className='flex' >
          
          <motion.h2 
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay:0.2 }}
           viewport={{ once: true }}
          className=" font-semibold text-5xl mr-10">Happy Customers</motion.h2>
          <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5 }}
           viewport={{ once: true }}
          className='pl-[70px] mt-4 border-l-4 border-yellow-500'>Sem viverra aliquet eget sit amet tellus cras. Scelerisque felis imperdiet proin fermentum leo vel orci.Tortor at auctor urna nunc id. Sit amet facilisis magna etiam odio mollis.</motion.div>
          
          </div>
          <div className="flex pt-8 "
           style={{
             
            
            transition: "transform 0.5s ease-in-out",
            // width: `${beforeAfter.length * 100}px`,
          }}
          >
            {Array(reviews[activeReview].rating).fill().map((_, i) => (
              <motion.span 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              key={i} className="text-yellow-500  text-3xl">★</motion.span>
            ))}
          </div>
          

          {/* Profile Section */}
          <motion.div 
           initial={{ opacity: 0, z: 50 }}
           whileInView={{ opacity: 1, z: 0 }}
           transition={{ duration: 1 }}
           viewport={{ once: true }}
          className='flex flex-col'>
            <p className="pt-7 text-gray-600 text-3xl">{reviews[activeReview].text} </p>
            <div className="mt-4 flex pt-3 items-center space-x-3  border-t-2 border-yellow-500"
            
            >
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
          <div className="mt-6   space-x-4 pt-7">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveReview(index)}
            className={`px-4 py-2 rounded-full w-3 transition-colors duration-300 ${
              activeReview === index ? "bg-yellow-300 text-black" : "bg-gray-300 text-gray-700"
            }`}
          >
        
          </button>
        ))}
      </div>
      </motion.div>
        </div>
        





              

      </div>

    </section>
  </div>

 {/* contact form */}
 <div>
  <section className=' bg-gradient-to-t from-yellow-300 to-white pt-[300px] pb-[100px]'>
    <div className='flex flex-row  justify-around'>
      {/* left content */}
      <div className='pt-20 pl-10' >
        <div className='flex flex-col'>
        <img 
        className='h-50 w-50 rounded-3xl w-[555px] h-[740px]'
        src={contactWorkerBg} alt="" />
        <div className='flex justify-center gap-2 text-center pb-10 h-[90px] rounded-3xl mt-[-90px] backdrop-blur backdrop-grayscale-1'>
          <img src={icons.call} alt=""
          className=' w-10 h-[50px] mt-4'
          />
          <p className='text-yellow-300 opacity-100 mt-4'>contact@skillsphere.com <br />
          24/7 Contact Support</p>
        </div>
        </div>
      </div>
      {/* right content */}
      <div className='pt-20 w-[604px] h-[740px]'>
        <div>
        <p className='font-semibold text-3xl'>Get In Touch</p>
        <h1 className='font-bold text-5xl mt-5'>Effortless Booking with us</h1>
        <h3 className='pt-3'>Habitasse platea dictumst quisque sagittis purus sit. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Et leo duis ut diam quam nulla porttitor.</h3>
        </div>
        <div className=''>
          <form className='grid grid-cols-2 gap-5 pt-10'>
            <input 
            className={`${ContactUsInput} col-span-2 `}
            placeholder='Select A Service'
            type="text"
            value={selectedService}
            onChange={(e) => setSearchBar(e.target.value)}
            onFocus={() => setIsOpen(!isOpen)}
            readOnly
            />
            {isOpen &&
            (
              <div 
              ref={dropDownRef}
              className="absolute w-[600px] h-64 bg-white shadow-md rounded-lg mt-12 z-10 max-h-60 overflow-y-auto">
                <input type="text"
                placeholder='Search service...'
                value={searchBar}
                onChange={(e) => setSearchBar(e.target.value)}
                autoFocus
                className={`${ContactUsInput} w-full pt-4 p-3 rounded-lg  border-yellow-400`} />
                <ul className='w-full'>
                  {filteredService.length > 0 ?
                  (
                    filteredService.map((service, index) =>
                    (
                      <li
                      key={index}
                      className='p-3 hover:bg-gray-100 cursor-pointer'
                      onClick={() =>
                      {
                        setSelectedService(service);
                        setIsOpen(false);
                      }
                      }
                      >
                        {service}
                      </li>
                    ))
                  ) : (
                    <li
                    className='p-3 text-gray-500'
                    >
                      No Service Found Use Other Services
                    </li>
                  )
                 }
                  
                 
                </ul>
              </div>
            )

            }

            <input
            type="text" 
            placeholder='Name*'
            className={`${ContactUsInput}`}
            required
            />

            <input 
            type="datetime-local"
            className={`${ContactUsInput}`}
            required
            />
            
            <input 
            type="email"
            placeholder='E-mail*'
            className={`${ContactUsInput}`} 
            required
            />

            <input 
            type="number"
            placeholder='Phone Number'
            className={`${ContactUsInput}`}
            minLength="10"
            maxLength="10"
            required
             />


            <input 
            type="text"
            placeholder='Address*'
            className={`col-span-2 ${ContactUsInput}`}
            required
             />

            <textarea 
            className={` col-span-2 h-[150px] resize-none  ${ContactUsInput}`}
            placeholder='Description'
            name="description" 
            id=""
            rows="9"
            ></textarea>

            <button
            type="submit"
            className='bg-blue-300 rounded-3xl h-10 w-36 hover:bg-yellow-400 translate transition duration-300'
            >Submit Now</button>
          </form>

        </div>
      </div>
    </div>
  </section>
 </div>
        
  {/* Links */}
  <div className="">
    <section className=' bg-blue-950  text-white bg-opacity-40 pt-10'>
      
      <div className="flex justify-evenly pb-10">
        <div className="">
          <img 
          className='w-[300px] h-[150px] bg-white mix-blend-lighten mt-[-44px]'
          src={logoBg} alt="" />
          <p>
          Duis ultricies libero sit amet aliquam fermentum. <br /> Nunc tincidunt mollis dui <br /> in tempor
          </p>
          <div className="flex pt-7 gap-5">
            <img src="   https://cdn-icons-png.flaticon.com/512/2370/2370279.png "
             alt=""
             className='h-16 w-16 text-white hover:text-yellow-400 ' />
             <p className='pt-2'>Monday-Saturday <br /> 9.00 Am - 9.00 Pm</p> 
             
          </div>
        </div>
        <div className="">
          <h1 className='text-yellow-400 font-semibold text-2xl'>Information</h1>
          <ul className='pt-5'>
            <li className='my-3'>Request Service</li>            
            <li className='my-3'>Our Work</li>
            <li className='my-3'>What We Do</li>
            <li className='my-3'>Our Process</li>
            <li className='my-3'>Reviews</li>
          </ul>
        </div>
        <div className="">
          <h1 className='text-yellow-400 font-semibold text-2xl'>Support</h1>
          <ul className='pt-5' >
            <li className='my-3'>About</li>
            <li className='my-3'>Careear</li>
            <li className='my-3'>Privacy Policy</li>
            <li className='my-3'>Term of Use</li>
            <li className='my-3'>Contact</li>
           
          </ul>
        </div>
        <div className="">
          <h1 className='text-yellow-400 font-semibold text-2xl'>Quick Contact</h1>
          <div className=' flex flex-row pt-3'>
            <img
            className='bg-yellow-400 rounded-full h-10 w-10 mt-4'
            src="https://img.icons8.com/?size=100&id=85049&format=png&color=000000" alt="" />
          <p className='pt-3 ml-3' >Silver Oak Univercity, Gota, <br /> Ahmedabad, 382405</p>
          </div>
          <div className='flex flex-row pt-3'>
            <img src={icons.call} className='h-10 w-10 mt-4 ' alt="" />
            <p className='my-3 ml-3'>+91 998982435 <br /> contact@skillsphere.com</p>
            <p></p>
          </div>
        </div>
        <div className="">
          <h1 className='text-yellow-400 font-semibold text-2xl'>Our Pyment Methods</h1>
        </div>

      </div>

      {/* bottom footer */}
      <div className="p-7 pt-7 border-t-2 border-white w-full bg-blue-950 ">
        <div className='flex justify-between'>
          <p>© WedesignTech All rights Reserved.</p>
          <p>Privacy Policy -
          Terms & Condition</p>

        </div>
      </div>
    </section>
  </div>

            
  
</div>

     
  )
}
 

export default App;













