import React from 'react'
import DP from "../assets/dp.png"
import MenuPDF from '../assets/Menu.pdf';
import PortfolioPDF from '../assets/portfolio.pdf';

const Home = () => {

  const handleDownload = (pdfFileName) => {
    let pdfUrl;

    // Determine which PDF file to use based on pdfFileName
    if (pdfFileName === 'portfolio') {
      pdfUrl = PortfolioPDF;
    } else if (pdfFileName === 'Menu') {
      pdfUrl = MenuPDF;
    } else {
      // Handle invalid input
      console.error('Invalid PDF file name');
      return;
    }

    const anchor = document.createElement('a');
    anchor.href = pdfUrl;
    anchor.download = `${pdfFileName}.pdf`;

    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <div className=" min-h-[550px] sm:min-h-[600px]  flex justify-center items-center text-white">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* {the content section} */}
          <div>
            <h1 data-aos="fade-up"
              data-aos-once="true"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              We give the marinated <span data-aos="zoom-out"
                data-aos-delay="300"
                className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/90 font-cursive">Catering Service</span>
               in the city
            </h1>
            {/* buttons for menu and portfolio */}
            <div className='py-6 space-x-8 sm:flex'>
            <button  className="bg-primary/70 hover:scale-105 duration-200 text-white  sm:px-4  sm:py-2 rounded-full  items-center text-sm sm:text-base md:text-lg  p-2"
            onClick={() => handleDownload('portfolio')}>
              
              Download Portfolio</button>
            <button  className="bg-primary/70 hover:scale-105 duration-200 text-white  sm:px-4  sm:py-2 rounded-full  items-center text-sm sm:text-base md:text-lg  p-2"
            onClick={() => handleDownload('Menu')}>
              Download Menu</button>
          </div>
          </div>
          {/* {dp image section} */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 "
          >
            <div className=" w-3/5 border-2 border-teal-400 rounded-full overflow-hidden bounce">
              <img src={DP} alt="" className="object-cover w-full h-full" />
            </div>

            <div
              data-aos="fade-left"
              className="backdrop-blur-3xl p-3 rounded-xl absolute top-10 left-10"
            >
              <h1 className="text-white ">From Lucknow</h1>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="0"
              className="backdrop-blur-3xl p-3 rounded-xl absolute bottom-10 right-10"
            >
              <h1 className="text-white">For You, Till You</h1>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home