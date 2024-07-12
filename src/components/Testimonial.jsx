import React from "react";
import Slider from "react-slick";
import AnilDP from "../assets/dp.png"
import AshishDP from "../assets/Ashishdp.jpg"
import PiyushDP from "../assets/piyushdp.png"

const TestimonialData = [
  {
    id: 1,
    name: "Anil Gupta",
    text: "Service Provider",
    img: AnilDP,
  },
  {
    id: 2,
    name: "Ashish Gupta",
    text: "Service Provider",
    img: AshishDP,
  },
  {
    id: 3,
    name: "Piyush Gupta",
    text: "Service Provider",
    img: PiyushDP,
  },

];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-1 mb-5 bg-green-300 ">
      <div className="container ">
        {/* header section */}
        <div className="mb-10 ">
          <h1
            data-aos="fade-up"
            className="text-center text-4xl font-bold font-cursive"
          >
            Testimonials
          </h1>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div
                  
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl  bg-green-500 relative"
                >
                  <div className="mb-4 ">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 "
                    />
                  </div>
                  {/* content section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80  font-cursive2">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;