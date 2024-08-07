import React, { useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div id="about" className='relative h-auto w-full flex flex-col lg:flex-row items-center p-6 lg:p-12 bg-gray-900/60'>
      <div className='w-full lg:w-1/3 flex justify-center lg:justify-start mb-6 lg:mb-0'>
        {/* <img className="rounded-full w-48 h-48 lg:w-64 lg:h-64 object-cover shadow-lg" src={photo} alt="Profile" /> */}
      </div>
      <div className='w-full lg:w-2/3 p-6 bg-slate-800/50 rounded-lg shadow-lg text-white'>
        <h2 data-aos="fade-left" className='font-extrabold text-3xl lg:text-4xl mb-4'>HELLO!!!</h2>
        <p data-aos="fade-right" className='tracking-widest text-sm md:text-base lg:text-lg leading-relaxed'>
          I’m <b>Shruti Dhasmana</b>, an enthusiastic engineering student currently pursuing a Bachelor of Technology in Electronics and Communication Engineering (ECE) at the Indian Institute of Information Technology (IIIT) Hyderabad.
          As a passionate and driven software engineer, I thrive on solving complex problems and building innovative solutions. With a strong foundation in JavaScript, Python, React, and a keen eye for detail, I bring both technical expertise and creative thinking to every project.
        </p>
        <button 
          data-aos="fade-up" 
          data-aos-delay="400"
          onClick={toggleVisibility}
          className="mt-6 px-6 py-3 bg-teal-700 text-white rounded-lg shadow-md hover:bg-teal-600 transition-transform transform hover:scale-105"
        >
          MORE ABOUT ME
        </button>

        {/* Conditionally render additional content */}
        {isVisible && (
          <div className='mt-6 p-6 bg-gray-800 rounded-lg'>
            <h3 className='text-xl font-bold text-teal-400'>Additional Information</h3>
            <p className='mt-2 text-gray-300'>
              {/* Add your additional information here */}
              School: HCAS
              {/* You can include more details or content here */}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
