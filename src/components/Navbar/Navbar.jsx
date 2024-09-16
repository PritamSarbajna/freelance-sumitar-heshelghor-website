import React from "react";
import Logo from "../../assets/food-logo.png";
import { FaUtensils } from "react-icons/fa6";
// import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Dishes",
    link: "/#services",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
];
const Navbar = () => {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div>
              <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2 p-5 tracking-widest" style={{ fontFamily: 'Kalpana, KalpanaUnicode, sans-serif' }}>
                <img src={Logo} alt="Logo" className="w-12" />
                সুমিতার হেঁশেলঘর
              </a>
            </div>
            <div className="flex justify-between items-center gap-4 text-lg">
              {/* <div>
                <DarkMode />
              </div> */}
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block py-4 px-4 hover:text-yellow-500"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              <a href="https://menufic.com/restaurant/cm158hljz0000jv0culdz8zqu/menu" target="__blank">
                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3">
                  Menu
                  <FaUtensils className="text-xl text-white drop-shadow-sm cursor-pointer" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
