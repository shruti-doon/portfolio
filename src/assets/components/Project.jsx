import React from 'react'
import pro from '../../Project.json'
const Project = () => {
  return (
    <div  className='text-white'>
      <h1 id="project" className='m-7 p-4 text-center text-2xl uppercase '>MY PROJECTS</h1>
      <div className='justify-evenly space-x-3 space-y-4 p-4'>

      {pro.map((p,index)=>{
        return(
          <div key={index} data-aos="fade-left" className='z-10 h-auto p-5 rounded-xl border-r-4 border-b-4 bg-black/70 flex flex-wrap hover:shadow-xl transform hover:scale-90 transition-transform duration-300 '>
              <h1 className='uppercase font-mono tracking-widest text-lg md:text-2xl bg-white/30 p-2 rounded-3xl hover:text-shadow-white-lg border-white/70 border-2'>{p.name}</h1>
              <h1 className='text-shadow-white-lg text-sm md:text-lg'>{p.desc}</h1>
              </div>
           )
          })}
          </div>
    </div>
  )
}

export default Project
