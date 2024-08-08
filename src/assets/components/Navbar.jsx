import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center' 
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.md:hidden')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='font-mono fixed top-0 left-0 right-0 bg-cyan-950/60 backdrop-blur-sm h-14 flex items-center px-4 shadow-lg z-50'>
      {/* Navbar Title */}
      <div className='flex text-white font-mono flex-1 justify-start'>
        <FontAwesomeIcon className='text-4xl mx-3' icon={faAddressCard} />
        <span
          onClick={scrollToTop}
          className="text-2xl md:text-3xl font-mono text-shadow-white-lg transform transition-transform duration-300 ease-in hover:scale-110 cursor-pointer"
        >
          PORTFOLIO
        </span>
      </div>

      {/* Navbar Items */}
      <div ref={menuRef} className={`fixed top-14 left-0 right-0 bg-slate-900 md:static md:bg-transparent md:flex md:items-center md:justify-between ${isOpen ? 'block' : 'hidden'} md:block`}>
        <ul className='list-none flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0'>
          <li
            className='text-white uppercase hover:text-shadow-white-lg transform transition-transform duration-300 ease-in hover:scale-110 cursor-pointer'
            onClick={() => {
              scrollToSection('about');
              setIsOpen(false); 
            }}
          >
            About Me
          </li>
          <li
            className='text-white uppercase hover:text-shadow-white-lg transform transition-transform duration-300 ease-in hover:scale-110 cursor-pointer'
            onClick={() => {
              scrollToSection('skills');
              setIsOpen(false); 
            }}
          >
            My Skills
          </li>
          <li
            className='text-white uppercase hover:text-shadow-white-lg transform transition-transform duration-300 ease-in hover:scale-110 cursor-pointer'
            onClick={() => {
              scrollToSection('ach');
              setIsOpen(false);
            }}
          >
            Achievements
          </li>
          <li
            className='text-white uppercase hover:text-shadow-white-lg transform transition-transform duration-300 ease-in hover:scale-110 cursor-pointer'
            onClick={() => {
              scrollToSection('exp');
              setIsOpen(false); 
            }}
          >
            Experience
          </li>
          <li
            className='text-white uppercase hover:text-shadow-white-lg transform transition-transform duration-300 ease-in hover:scale-110 cursor-pointer'
            onClick={() => {
              scrollToSection('project');
              setIsOpen(false);
            }}
          >
            Project
          </li>
          <li
            className='text-white uppercase hover:text-shadow-white-lg transform transition-transform duration-300 ease-in hover:scale-110 cursor-pointer'
            onClick={() => {
              scrollToSection('contact');
              setIsOpen(false); 
            }}
          >
            Contact Me
          </li>
        </ul>
      </div>

      <button
        className='md:hidden text-white text-3xl'
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
};

export default Navbar;
