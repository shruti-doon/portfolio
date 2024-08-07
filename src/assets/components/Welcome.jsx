import React from 'react';

const About = () => {
  return (
    <div>
      <style>
        {`
          .ticker-container {
           
            overflow: hidden;
            position: relative;
             /* Adjust padding to fit your design */
          }

          .ticker {
            display: flex;
            align-items: center;
            white-space: nowrap;
            animation: scroll 12s linear infinite;
          }

          .ticker p {
            margin: 0;
          }

          @keyframes scroll {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(-100%);
            }
          }
        `}
      </style>

      {/* Ticker Container */}
       <div className='mt-6 ticker-container bg-black/70 h-auto mb-6 md:h-[90px] flex flex-col items-center justify-center md:mx-10 lg:mx-20 xl:mx-32 border-8 rounded-full border-gray-400/30'>
        <div className='ticker'></div>
        <div className='ticker'>
          <p className="uppercase font-mono tracking-widest text-white font-semibold text-xl">Welcome to the digital version of my resume!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to the digital version of my resume!</p>
        </div>
      </div>

     
    </div>
  );
};

export default About;
