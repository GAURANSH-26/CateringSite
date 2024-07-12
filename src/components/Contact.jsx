import React from "react";
import Insta from "../assets/instagram.png"
import Facebook from "../assets/facebook.png"
import Whatsapp from "../assets/whatsapp.png"
import BgPng from "../assets/storebg.jpg";

const backgroundStyle = {
  backgroundImage: `url(${BgPng})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const contact = () => {
  return (
    <>
      <div id="contact" className="py-14" style={backgroundStyle}>
        <div className="container">
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4">
            <div
              data-aos="fade-up"
              data-aos-duration="300"
              className="space-y-6 max-w-xl mx-auto"
            >
              {/* text section */}
              <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-white/90 pl-3">
                Discover more on our social pages for tasty delights and updates!
              </h1>
              {/* img section */}
              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-8">
                <a href="https://www.instagram.com/_anil_caterers?igsh=ejh6YWlnbWtuYWp1&utm_source=qr" target="_blank">
                  <img
                    src={Insta}
                    alt="Play store"
                    className="max-w-[50px] sm:max-w-[20px] md:max-w-[50px]"
                  />
                </a>
                <a href="https://www.facebook.com/share/JMFX6Ua6gpfuxLam/?mibextid=qi2Omg" target="_blank">
                  <img
                    src={Facebook}
                    alt="App store"
                    className="max-w-[50px] sm:max-w-[20px] md:max-w-[50px]"
                  />
                </a>
                <a href="https://api.whatsapp.com/send?phone=9454363536" target="_blank">
                  <img
                    src={Whatsapp}
                    alt="WhatsApp"
                    className="max-w-[50px] sm:max-w-[20px] md:max-w-[50px]"
                  />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default contact;