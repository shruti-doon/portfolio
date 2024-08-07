import React, { useState } from 'react';
import exp from '../../exp.json';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className='relative'>
      <h1 id="exp" className='uppercase font-mono tracking-widest text-4xl text-center text-white'>Experience</h1>
      <div  data-aos="zoom-in" className='flex flex-wrap justify-center gap-4'>
        {exp.map((s, index) => (
          <div
            key={index}
            className='bg-white/80 rounded-lg shadow-lg p-4 m-2 w-[400px] h-[200px] flex flex-col items-center justify-center hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ' 
            // style={{
            //   backgroundImage: `url(${Vlead})`,
            //   backgroundSize: 'cover',
            //   backgroundPosition: '40% 29%',
              
            //    backdropFilter:'blur(8px)',              
            // }}
          >
            <h2 className='text-lg font-semibold text-black w-full'>
              COMPANY: {s.name}
            </h2>
            <h3 className='text-md font-medium text-black w-full'>
              ROLE: {s.role}
            </h3>
            <button
              onClick={toggleVisibility}
              className="mt-4 px-4 py-2 bg-black/60 text-white rounded hover:transform transition-transform duration-200 ease-in-out hover:scale-110"
            >
              CLick here for more details
            </button>
          </div>
        ))}
      </div>
      {isVisible && (
        <div
          className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 p-4 z-50`}
        >
          <div className={`bg-lime-200 text-black p-8 rounded-lg w-1/2 max-w-lg transform transition-transform duration-500 ease-in-out `}>
            <h2 className="uppercase text-2xl font-bold">hello !! once again</h2>
            <p className='list-none font-mono'>
            During my tenure at Virtual Labs (VLEAD), I was deeply involved in enhancing the educational experience for students through the development and refinement of virtual experiments. My role primarily focused on debugging and optimizing experiments within the electronics section, ensuring their accuracy and effectiveness. I worked on improving the user interface to make it more engaging and intuitive, thereby enhancing the overall learning experience. This role allowed me to combine my technical skills with a passion for educational technology, contributing to the creation of a more accessible and interactive learning environment. Through my contributions, I helped in making complex concepts more comprehensible and engaging for learners.</p>
            <button
              onClick={toggleVisibility}
              className="mt-4 px-4 py-2 bg-black/70 text-white rounded hover:scale-110"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
