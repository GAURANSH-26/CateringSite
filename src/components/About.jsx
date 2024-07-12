import React from "react";
import BannerImg from "../assets/homeig.png";
import { LuVegan } from "react-icons/lu";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import BgImg from "../assets/banner.jpg";

const bgImage = {
  backgroundImage: `url(${BgImg})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const about = () => {
  return (
    <>
      <span id="about"></span>
      <div style={bgImage}>
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 ">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div data-aos="zoom-in">
                <img
                  src={BannerImg}
                  alt="biryani img"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)] spin"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0 text-white">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold font-cursive "
                >
                  More About Services
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-sm text-green-300 tracking-wide leading-5 font-normal"
                >
                  Indulge in exquisite culinary experiences with our catering services.
                   From elegant events to casual gatherings, we craft delicious memories for every occasion.
                    Explore our diverse menu and impeccable service today!
                </p>

                <div className="grid grid-cols-2 gap-6 overflow-hidden" >
                  <div className="space-y-5">
                    <div data-aos="fade-up" className="flex items-center gap-3">
                      <LuVegan className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-green-600 " />
                      <span>Vegetarian Food </span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="300"
                      className="flex items-center gap-3"
                    >
                      <IoFastFood className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-500 " />
                      <span>Nonvegetarian Food</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="flex items-center gap-3"
                    >
                      <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-400" />
                      <span>Western Food</span>
                    </div>
                  </div>
                  <div
                    data-aos="slide-left"
                    className="border-l-4 border-primary/50 pl-6 space-y-2 "
                  >
                    <h1 className="text-2xl font-semibold font-cursive ">
                      For You
                    </h1>
                    <p className="text-sm text-yellow-200 ">
                    Savor the extraordinary with our catering expertise. 
                    Elevate your events with our diverse menu, personalized service, and attention to detail. 
                    From corporate gatherings to weddings, let us redefine your culinary experience.
                     Immerse yourself in a world of flavors and impeccable service that transcends expectations. 
                    Our commitment to excellence ensures every moment is unforgettable.
                     Discover the art of catering, where passion meets perfection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;