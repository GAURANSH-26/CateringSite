import React from 'react'
import { Gallery } from './Gallery';
import GalleryBG from "../assets/gallerybg.jpg"


const Services = () => {

  const backgroundImageStyle = {
    backgroundImage: `url(${GalleryBG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div id='services' py-10>
      <div style={backgroundImageStyle}>
        {/* {header title} */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold font-cursive text-gray-100">
            Best Service and Theam For You
          </h1>
        </div >
        <Gallery/>
      </div>
    </div>
  )
}

export default Services;