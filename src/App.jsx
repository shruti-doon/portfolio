import React from 'react';

import Navbar from "./assets/components/Navbar";
import Welcome from "./assets/components/Welcome";
import About from "./assets/components/About";
import Skills from "./assets/components/Skills";
import Experience from './assets/components/Experience';
import Achievement from './assets/components/Achievement';
import Project from './assets/components/Project';
import Footer from './assets/components/Footer';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
AOS.init({
  duration: 1000, 
  easing: 'ease-in-out',
  once: false,
  mirror: true, 
}); 
import Bg from "./assets/images/bg.mp4";

const App = () => {
  return (
    <>
      <div className="relative min-h-screen">
        <video autoPlay loop muted className="fixed right-0 top-0 h-full w-full object-cover z-[-1]">
          <source src={Bg} type="video/mp4" />
        </video>
        <div className="relative z-10">
          <Navbar />
          <Welcome />
          <About />
          <Skills />
          <Experience />
          <Achievement />
          <Project />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
