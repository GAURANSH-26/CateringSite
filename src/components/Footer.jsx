import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import FooterBg from "../assets/footerbg.jpg";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#gallery",
  },
];

const bgImage = {
  backgroundImage: `url(${FooterBg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "400px",
  width: "100%",
};
const Footer = () => {
  return (
    <div style={bgImage} className=" text-white">
      <div className="bg-black/40 min-h-[400px]">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive
"
            >
              Anil Caterers
            </a>
            <p className="  pt-4">
            We give the richest Catering Service in the city.
            </p>
            <a
              href="https://youtube.com/@piyushgupta6455?feature=shared"
              target="_blank"
              className="inline-block bg-primary/70 py-2 px-4 mt-5 text-sm rounded-full"
            >
              Visit our YouTube Channel
            </a>
          </div>

          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            {/* second col links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block hover:scale-105 duration-200 "
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Address
              </h1>
              <div>
                <p className="mb-3">Vip Road, Virat Nagr, Alambagh Lucknow</p>
                <p>+91 9454 363 536</p>
                <p>+91 7459 846 043</p>

                {/* social links */}
                <div className="flex items-center gap-3 mt-6">
                  <a href="https://www.instagram.com/_anil_caterers?igsh=ejh6YWlnbWtuYWp1&utm_source=qr">
                    <FaInstagram className="text-3xl hover:text-red-500 duration-300" />
                  </a>
                  <a href="https://www.facebook.com/share/JMFX6Ua6gpfuxLam/?mibextid=qi2Omg">
                    <FaFacebook className="text-3xl hover:text-blue-600 duration-200" />
                  </a>
                  <a href="https://api.whatsapp.com/send?phone=9454363536">
                    <FaWhatsapp className="text-3xl hover:text-green-500 duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
      <p>&copy; 2024 Anil Caterers. All Rights Reserved. Developed by <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer">Gauransh Kumar</a>.</p>
      </div>
    </div>
  );
};

export default Footer;