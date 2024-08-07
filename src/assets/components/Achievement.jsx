import React from 'react'
import ach from '../../ach.json'

const Achievement = () => {
  return (
    <div >
        <h1  id="ach" className='text-center text-4xl pt-9  font-mono tracking-widest bg-black/70 text-slate-100'>ACHIEVEMENTS</h1>
        <div  className='flex flex-wrap justify-center gap-4' style={{zIndex: 1}}>
        {ach.map((s, index) => {
          console.log(s.name);
          return (
            <div data-aos="zoom-in" key={index} className='bg-white/60 rounded-lg shadow-lg p-4 m-2 w-80 h-[150px] flex items-center justify-center hover:shadow-xl transform hover:scale-105 transition-transform duration-300'>
              <li className='list-none text-lg font-semibold text-gray-900'>
                <h1 className='uppercase'>{s.name}
                    </h1>
                <h3 className='text-sm'>{s.desc}</h3>
              </li>
            </div>
          );
        })}
      </div>
      
    </div>
  )
}

export default Achievement
