"use client";
import Image from "next/image";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import MenuIcon from "@mui/icons-material/Menu";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMenu2 = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="absolute top-0 bg-black/10 z-50">
      <div className="flex w-screen border-b-[1px] border-white/50 justify-evenly lg:justify-between p-4  text-white ">
        <span
          className=" flex items-center lg:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          <MenuIcon fontSize="large" />
        </span>
        <div className=" order-3 lg:order-1  flex items-center text-center">
          <div className=" flex">
            <span
              onClick={toggleMenu2}
              className=" ml-4 px-2 lg:flex items-center hidden cursor-pointer"
            >
              <MenuIcon fontSize="large" />
            </span>
            <div className="">
              <div className=" p-1 ">اوج احساسات</div>
              <div className=" ">
                <button className="bg-black bg-opacity-50 px-4 py-1 text-white me-3">
                  فارسی
                </button>
                <button className="bg-black bg-opacity-50 px-4 py-1 text-white">
                  English
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" order-2 lg:order-2  ">
          <Image
            src={"/layout/navbar/espinas_palace_top_new_logo-1.png"}
            alt="لوگوی اسپیناس"
            width={150}
            height={150}
          />
        </div>
        <div className=" lg:order-3 hidden lg:flex items-center">
          <ul className="p-4 text-left text-sm">
            <li className="items-center">
              <span className="me-2">reservation@espinashotels.com</span>
              <span>
                <EmailIcon />
              </span>
            </li>
            <li className="items-center">
              <span className="me-2">02175675</span>
              <span>
                <CallIcon />
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <ul className=" hidden lg:flex  justify-around w-[80vw] mx-auto text-white text-sm *:p-4">
          <li key={1}>
            <button className="hover:text-[#B78948] duration-500">
              درباره هتل
            </button>
          </li>
          <li key={2}>
            <button className="hover:text-[#B78948] duration-500">
              اتاق ها و سوئیت ها
            </button>
          </li>
          <li key={3}>
            <button className="hover:text-[#B78948] duration-500">
              فان سنتر
            </button>
          </li>
          <li key={4}>
            <button className="hover:text-[#B78948] duration-500">
              مرکز سلامتی
            </button>
          </li>
          <li key={5}>
            <button className="hover:text-[#B78948] duration-500">
              رستوران ها
            </button>
          </li>
          <li key={6}>
            <button className="hover:text-[#B78948] duration-500">
              جلسات و رویدادها
            </button>
          </li>
          <li key={7}>
            <button className="hover:text-[#B78948] duration-500">
              تهران رویال هال
            </button>
          </li>
          <li key={8}>
            <button className="hover:text-[#B78948] duration-500">
              گروه هتل ها
            </button>
          </li>
          <li key={9}>
            <button className="hover:text-[#B78948] duration-500">
              ارتباط با هتل
            </button>
          </li>
        </ul>
      </div>
      {/* sidbar mobile*/}
      <div className="fixed block  lg:hidden top-0 left-[-100%] w-[300px] h-[100vh] bg-footer overflow-y-scroll shadow-xl z-50">
        <div
          className={`fixed block lg:hidden top-0 ${
            isMenuOpen ? "left-0" : "left-[-100%]"
          } w-[300px] h-[100vh] bg-footer  shadow-xl z-50 transition-all duration-300`}
        >
          {/* Close Icon */}
          <div className="flex justify-between items-center p-4 border-b border-gray-600/60">
            <h2 className="text-xl font-bold text-white">منو</h2>
            <i
              className="fas fa-times text-gray-400 text-2xl cursor-pointer transition duration-300"
              onClick={toggleMenu}
            ></i>
          </div>

          {/* Sidebar Links */}
          <div className="text-white">
            {[
              "درباره هتل",
              "اتاق‌ها و سوئیت‌ها",
              "فان سنتر",
              "مرکز سلامتی",
              "رستوران",
              "جلسات و رویدادها",
              "تهران رویال هال",
              "گروه هتل‌ها",
            ].map((link, index) => (
              <div
                key={index}
                className="p-2 border-b border-gray-600/60 hover:bg-gray-600 transition duration-300 cursor-pointer"
              >
                {link}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* sidbar xl */}
      <div
        className={`fixed hidden xl:flex flex-wrap justify-center content-center top-0 ${
          isSidebarOpen ? "right-0" : "right-[-100%]"
        } h-[100vh] w-[350px] bg-[#f9f4ef] overflow-y-scroll p-6 transition-all duration-300`}
      >
        <div className="flex w-full justify-end">
          <i
            className="fas fa-times text-gray-400 text-2xl cursor-pointer transition duration-300 p-2"
            onClick={toggleMenu2}
          ></i>
        </div>
        <div className="justify-center">
          <figure className="w-[150px] mx-auto mb-12">
            <Image
              className="w-full h-full object-cover"
              src="/text_spinas.png"
              layout="intrinsic"
              width={300}
              height={200}
              alt="Espinas Logo"
            />
          </figure>
        </div>

        <div className="mb-8 flex flex-col justify-center *:text-center">
          <h1 className="text-[#d48f68] font-bold text-lg mb-4">
            دفتر فروش و مارکتینگ:
          </h1>
          <div className="text-[#333] text-sm mb-1">تلفن تماس: 02175675</div>
          <div className="text-[#333] text-sm mb-1">نمابر: 02175675365</div>
          <div className="text-[#333] text-sm mb-1">
            sales@espinashotels.com
          </div>
        </div>

        <div className="mb-8 flex flex-col justify-center *:text-center ">
          <h1 className="text-[#d48f68] font-bold text-lg mb-4">
            رزرواسیون مرکزی هتل اسپیناس:
          </h1>
          <div className="text-[#333] text-sm mb-1">تلفن تماس: 02175675</div>
          <div className="text-[#333] text-sm mb-1">
            reservation@espinashotels.com
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center space-x-6 rtl:space-x-reverse mt-8 text-2xl text-[#333]">
          <a href="https://instagram.com" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://whatsapp.com" aria-label="WhatsApp">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
