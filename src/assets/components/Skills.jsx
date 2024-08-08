import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import skills from '../../skills.json';

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.1,   
  });

  return (
    <div
      ref={ref}
      className='bg-black/50 w-full min-h-screen flex-col items-center py-8'
    >
      <motion.h1
        id="skills"
        className='text-center tracking-widest font-mono text-3xl font-bold mb-8 text-white'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
        transition={{ duration: 1}}
      >
        MY SKILLS
      </motion.h1>
      <p className='text-gray-200 font-bold text-2xl text-center'>
        I have equipped myself with a diverse set of following skills that form the core of my technical expertise and drive my passion for software development
      </p>
      <div className='flex flex-wrap justify-center gap-4'>
        {skills.map((s, index) => (
          <motion.div
            key={index}
            className='bg-teal-100/70 shadow-inner rounded-lg p-4 m-2 w-80 h-[50px] flex items-center justify-center hover:shadow-2xl transform hover:scale-110 transition-transform duration-300'
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
            transition={{ duration: 1, delay: index * 0.1 }}
          >
            <li className='list-none text-md font-mono font-semibold text-gray-900'>
              {s.name}
            </li>
          </motion.div>
        ))}
      </div>
      {/* <a href="/">
        <motion.button
          className='mt-8 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          Back to home
        </motion.button>
      </a> */}
    </div>
  );
};

export default Skills;
