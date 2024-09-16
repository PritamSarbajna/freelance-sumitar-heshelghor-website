import React from "react";
import {
  FaFacebook,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import Logo from "../../assets/food-logo.png";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <section className="max-w-[1200px] mx-auto">
        <div className=" grid md:grid-cols-3 py-5">
          <div className=" py-8 px-4 ">
              <h1 href="#" className="font-bold text-2xl sm:text-3xl flex gap-2 p-5 tracking-widest" style={{ fontFamily: 'Kalpana, KalpanaUnicode, sans-serif' }}>
                <img src={Logo} alt="Logo" className="w-12" />
                সুমিতার হেঁশেলঘর
              </h1>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Durgapur, West Bengal</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91 8116568704</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="https://wa.me/8116568704">
                <FaWhatsapp className="text-3xl" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61556963933494">
                <FaFacebook className="text-3xl" />
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
  <p>
    Enjoy fresh, tasty meals with our convenient delivery and takeaway options.
  </p>
  <ul className="mt-3 list-disc">
    <li>We take large orders for events and gatherings</li>
    <li>Full catering services for weddings, birthdays, and more</li>
  </ul>
</div>


        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
          &copy; 2024 All rights reserved | Created by Pritam Sarbajna
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
