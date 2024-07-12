// Navbar.js
import React from 'react';
import Logo from "../assets/logo.png";
import { FaPhoneFlip, FaBars, FaX } from "react-icons/fa6";
import '../style/navbar.css';

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
];

const Navbar = () => {
  // Function to handle phone call click
  const handlePhoneCall = () => {
    window.location.href = 'tel:9454363536';
  };

  return (
    <div className='backdrop-blur-3xl text-white rounded-2xl mx-3 '>
      <div className="container py-2 ">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <div data-aos="fade-down" data-aos-once="true">
            <a href="#" className='font-bold text-2xl sm:text-3xl flex justyfy-center items-center gap-2 tracking-wider font-cursive'>
              <img src={Logo} alt="Logo" className='w-[7rem]' />
            </a>
          </div>

          {/* Link section */}
          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            className="flex justify-between items-center gap-4"
          >
            <ul className="hidden sm:flex items-center gap-4">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
            {/* Phone call button */}
            <button
              onClick={handlePhoneCall}
              className="bg-primary/70 hover:scale-105 duration-200 text-white  sm:px-4 py-1 sm:py-2 rounded-full flex items-center gap-3 text-sm sm:text-base p-2"
            >
              Call
              <FaPhoneFlip className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
