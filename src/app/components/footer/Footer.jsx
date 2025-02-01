"use client";

import Link from "next/link";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useRef, useState } from "react";

const Footer = () => {
  const rulesCondition = useRef(null);
  const rulesInput = useRef(null);

  const handleRules = () => {
    const checked = rulesInput.current.checked;
    checked
      ? rulesCondition.current.classList.add("hidden-rules")
      : rulesCondition.current.classList.remove("hidden-rules");
  };

  return (
    <section className="w-full flex flex-wrap">
      {/* Newsletter Section */}
      <div
        style={{
          backgroundImage: "url('/footer/espinas_footer_bg.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100%",
        }}
        className="w-full flex flex-wrap justify-center"
      >
        <div className="w-full lg:w-1/2 flex flex-wrap content-center text-center lg:text-start p-8 lg:my-24">
          <div>
            <p className="text-white lg:mx-[80px] text-sm">- در ارتباط باشید</p>
          </div>
          <div>
            <p className="text-white lg:mx-[80px] text-[25px] font-bold">
              برای دریافت اخبار و پیشنهادات ویژه ما در خبرنامه ما ثبت نام کنید.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 flex flex-wrap items-center p-8 lg:px-[80px] mt-6 lg:my-24">
          <div className="w-full flex h-[40px] items-center  border-b border-white">
            <input
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              className="bg-transparent w-3/4 text-white focus:outline-none"
            />
            <button className="bg-transparent w-1/4 text-end text-white">
              ثبت نام
              <TelegramIcon sx={{ mx: 1 }} />
            </button>
          </div>
          <div className="w-full flex flex-wrap items-center">
            <div className="w-full flex items-center mt-6">
              <input
                type="checkbox"
                id="terms"
                className="bg-white w-4 h-4"
                ref={rulesInput}
                // checked={rulesChecker}
                onChange={handleRules}
              />
              <label htmlFor="terms" className="text-white text-lg mr-1">
                شرایط و قوانین ثبت‌نام را می‌پذیرم
              </label>
            </div>
            <p ref={rulesCondition} className="text-white text-xs hidden-rules">
              این فیلد ضروری است.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <footer
        className="footer flex flex-wrap bg-[#191919] text-white"
        dir="ltr"
      >
        <div className="w-full py-4 flex flex-wrap my-10 lg:flex-nowrap justify-center lg:justify-evenly *:w-full  *:justify-center">
          {/* Contact Section */}
          <div className="lg:w-fit p-6 flex flex-col text-center *:lg:text-end border-r border-red-300">
            <h4 className="font-bold mb-2 text-red-300">تماس با ما</h4>
            <p>تلفن: 02175675365</p>
            <p>نمابر: 02175675365</p>
          </div>

          {/* Address Section */}
          <div className="lg:w-fit p-6 flex flex-col text-center *:lg:text-end border-r border-red-300">
            <h4 className="font-bold mb-2 text-red-300">آدرس</h4>
            <p>
              تهران، سعادت آباد، میدان بهرود، خیابان عابدی، خیابان 33،
              <br />
              هتل اسپیناس پالاس
            </p>
          </div>

          {/* Sales Section */}
          <div className="lg:w-fit p-6 flex flex-col text-center *:lg:text-end border-r border-red-300">
            <h4 className="font-bold mb-2 text-red-300">
              واحد فروش، مارکتینگ و رزرواسیون
            </h4>
            <p className="text-[12px]">atena.ghorbanzadeh@espinashotels.com</p>
            <p className="text-[12px]">reservation@espinashotels.com</p>
            <p className="text-[12px]">sales@espinashotels.com</p>
          </div>

          {/* Social Media Section */}
          <div className="lg:w-fit p-6 flex flex-col text-center *:lg:text-end">
            <h4 className="font-bold mb-2 text-red-300 ">در ارتباط باشید</h4>
            <p>ما را در شبکه های اجتماعی دنبال کنید</p>
            <div className="flex gap-4 mt-2 lg:justify-end justify-center">
              <a href="#" className="text-white">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-whatsapp fa-lg"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t w-full flex flex-wrap justify-between items-center py-6 px-4 text-center">
          <p className="w-full xl:w-auto mb-4 xl:mb-0 xl:ml-12">
            © 2025 کپی رایت در آری استودیو
          </p>

          {/* Navigation Links */}
          <div
            className="w-full xl:w-auto hidden xl:flex flex-wrap justify-center xl:justify-end gap-4 text-sm  *:p-2  *:mx-2"
            dir="rtl"
          >
            <Link href="">
              <span className=" text-red-300 ">خانه</span>
            </Link>
            <Link className="hover:text-red-300 duration-300" href="">
              <span className="">رستوران ها</span>
            </Link>
            <Link className="hover:text-red-300 duration-300" href="">
              <span className="">فانسنتر</span>
            </Link>
            <Link className="hover:text-red-300 duration-300" href="">
              <span className="">استخدام</span>
            </Link>
            <Link className="hover:text-red-300 duration-300" href="">
              <span className="">ارتباط باما</span>
            </Link>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
