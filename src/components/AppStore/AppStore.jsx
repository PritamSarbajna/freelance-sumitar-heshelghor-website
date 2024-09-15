import React from "react";
import WhatsAppChatImg from "../../assets/play_store.png";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon from react-icons

import Gif from "../../assets/mobile_bike.gif";

const AppStore = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 py-14">
        <div className="container">
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-2">
            <div
              data-aos="fade-up"
              data-aos-duration="300"
              className="space-y-3 max-w-xl mx-auto"
            >
              <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold">
                Delivery and takeaway available.
              </h1>
              <p className="text-[#bbb] py-5">We deliver at your home, ensuring fresh, delicious meals right to your doorstep, making healthy eating more convenient than ever.</p>
              <div className="flex items-center justify-center py-4 px-6 bg-green-100 rounded-lg shadow-lg my-10">
                <a href="https://wa.me/8116568704" className="flex items-center text-green-600 hover:text-green-800">
                  <FaWhatsapp size={24} />
                  <span className="ml-2 text-lg font-semibold">Find out more, Click to order!</span>
                </a>
              </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="300">
              <img
                src={Gif}
                alt="mobile bike"
                className="w-full sm:max-w-[60%] block rounded-md mx-auto mix-blend-multiply dark:mix-blend-difference"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
