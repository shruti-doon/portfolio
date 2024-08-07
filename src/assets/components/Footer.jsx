import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div id="contact" className='bg-cyan-950/95 h-[200px] text-white p-6 text-center'>
      <h1 className='text-xl font-bold mb-4'>Contact Details</h1>
      <div className='flex flex-col items-center space-y-4'>
        <div className='flex space-x-4'>
          <a
            href="https://linkedin.com/in/shrutidoon"
            target="_blank"
            rel="noopener noreferrer"
            className='text-2xl hover:text-cyan-300 transition-colors duration-300'
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/shruti-doon"
            target="_blank"
            rel="noopener noreferrer"
            className='text-2xl hover:text-cyan-300 transition-colors duration-300'
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.instagram.com/_shruti202_/"
            target="_blank"
            rel="noopener noreferrer"
            className='text-2xl hover:text-cyan-300 transition-colors duration-300'
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <p className='mt-4'>
          <span>Email: </span>
          <a
            href="mailto:shruti23cc12@gmail.com"
            className='text-cyan-300 hover:underline'
          >
            shruti23cc12@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
