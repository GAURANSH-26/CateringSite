import React, { useEffect, } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About'
import Contact from './components/Contact';
import Footer from './components/Footer';
import Homebg from './assets/storebg.jpg';
import Testimonial from './components/Testimonial'
import ContactForm from './components/ContactForm'



const App = () => {
  
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: 'ease-in',
      delay: 100,
    });
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url(${Homebg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className='scroll-smooth'>
      <div className='overflow-x-hidden' style={backgroundImageStyle}>
        <Navbar  />
        <Home />
      </div>
      <Services />
      <About />
      <Contact />
      <Testimonial/> 
      <ContactForm/>
      <Footer />
    </div>
  );
};

export default App;
