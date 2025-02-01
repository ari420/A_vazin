"use client";
import Image from "next/image";
import React, { useState } from "react";

const Section4 = () => {
  // حالت (State) برای کنترل نمایش div های مختلف
  const [activeSection, setActiveSection] = useState("pool");

  // تابع برای تغییر وضعیت بخش فعال
  const handleIconClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <section className="w-full relative py-32 bg-[url('/espinas_spa_bg.jpg')] bg-cover bg-center flex flex-col items-center">
        {/* Logo Section */}
        <div className="w-full flex justify-center items-end">
          <Image
            width={230}
            height={40}
            className="object-cover max-h-fit"
            src={"/section4/espinas_palace_wellness_center.png"}
            alt="logo"
          />
        </div>

        {/* Subtext */}
        <p className="w-full text-[#CEA781] flex justify-center items-end font-medium text-sm md:text-base lg:text-lg mt-2">
          حس آرامش و جوانی
        </p>

        {/* Title */}
        <p className="w-full text-white flex justify-center items-center text-[22px] md:text-[30px] lg:text-[35px] text-center mt-4">
          در اسپیناس پالاس از سلامتی خود مراقبت کنید
        </p>

        {/* Description */}
        <p className="w-[90%] md:w-[70%] lg:w-1/2 text-white text-center text-[12px] md:text-[15px] lg:text-[18px] mt-4">
          مرکز سلامتی هتل اسپیناس پالاس با در برداشتن فضای مجزا برای خانم ها و
          آقایان و بهره مندی از تیم حرفه ای، مجموعه ای کامل از خدمات سلامتی و
          زیبایی را ارائه می دهد تا تجربه ای بی نظیر و آرامش بخش داشته باشید.
        </p>

        {/* Icon Section */}
        <div className="w-[90%]  md:w-[60%] lg:w-1/3 flex flex-wrap justify-evenly gap-y-6 mt-6">
          {/* Pool Icon */}
          <div
            className={`w-[70px] md:w-[90px] h-[70px] md:h-[90px] rounded-full flex justify-center items-center 
            ${
              activeSection === "pool"
                ? "bg-[#ebbc79]"
                : "bg-[#ffffff30] hover:bg-[#ebbc79]"
            } transition`}
            onClick={() => handleIconClick("pool")}
          >
            <Image
              width={40}
              height={40}
              src={"/section4/pool-icon.png"}
              alt="pool"
            />
          </div>
          {/* Spa Icon */}
          <div
            className={`w-[70px] md:w-[90px] h-[70px] md:h-[90px] rounded-full flex justify-center items-center 
            ${
              activeSection === "spa"
                ? "bg-[#ebbc79]"
                : "bg-[#ffffff30] hover:bg-[#ebbc79]"
            } transition`}
            onClick={() => handleIconClick("spa")}
          >
            <Image
              width={40}
              height={40}
              src={"/section4/spa-icon.png"}
              alt="spa"
            />
          </div>
          {/* Gym Icon */}
          <div
            className={`w-[70px] md:w-[90px] h-[70px] md:h-[90px] rounded-full flex justify-center items-center 
            ${
              activeSection === "gym"
                ? "bg-[#ebbc79]"
                : "bg-[#ffffff30] hover:bg-[#ebbc79]"
            } transition`}
            onClick={() => handleIconClick("gym")}
          >
            <Image
              width={40}
              height={40}
              src={"/section4/gym-icon.png"}
              alt="gym"
            />
          </div>

          {/* Captions */}
          <div className="w-full flex justify-evenly text-[10px] md:text-[12px] lg:text-[14px] font-bold text-white mt-4">
            <p>استخر و سونا</p>
            <p>خدمات ماساژ</p>
            <p>تناسب اندام</p>
          </div>
        </div>
        {/* Extra Content */}
        <div
          className={`${
            activeSection === "pool" ? "block opacity-100" : "hidden opacity-0"
          } pool transition-opacity duration-500 absolute top-[calc(100%-80px)] w-[90%] lg:w-[80%] bg-white flex flex-col lg:flex-row`}
        >
          {/* Image Section */}
          <div className="photo w-full lg:w-1/2 h-[500px] ">
            <Image
              width={500}
              height={500}
              src={"/section4/espinas_palace_pool.jpg"}
              alt="pool"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="para w-full lg:w-1/2 flex items-center">
            <div className="w-full p-8 lg:p-20 h-[500px]">
              <p className="text-[#565656] text-sm lg:text-base">
                مرکز سلامتی هتل اسپیناس پالاس
              </p>
              <p className="font-bold mt-3 text-xl lg:text-[30px]">
                استخر و سونا
              </p>
              <p className="mt-6 text-justify text-[#565656] text-sm lg:text-base">
                حس آرامش و جوانی را در مرکز سلامت لوکس ما، که در طبقه ی منفی سه
                قرار گرفته است، تجربه کنید. ساعاتی به دور از شلوغی و آلودگی شهر
                باشید. مرکز سلامتی هتل اسپیناس پالاس با در برداشتن فضای اختصاصی
                مجزا برای خانم ها و آقایان و بهره مندی از تیم حرفه ای، مجموعه ای
                کامل از خدمات سلامتی و زیبایی را ارائه می دهد.
              </p>
              <div className="mt-12 lg:mt-20 flex items-center">
                <div className="w-[150px] h-[45px] bg-stone-200 border border-black rounded-full flex items-center justify-center group hover:bg-black">
                  <p className="text-[13px] font-bold group-hover:text-white">
                    ادامه مطلب
                  </p>
                  <svg
                    className="ml-3 fill-[#CEA781] group-hover:translate-x-1 group-hover:fill-white transition"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                  >
                    <path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${
            activeSection === "spa" ? "block opacity-100" : "hidden opacity-0"
          } pool transition-opacity duration-500 absolute top-[calc(100%-80px)] w-[90%] lg:w-[80%] bg-white flex flex-col lg:flex-row`}
        >
          <div className="photo w-full lg:w-1/2 h-[500px] ">
            <Image
              width={500}
              height={500}
              src={"/section4/espinas_palace_massage.jpg"}
              alt="pool"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="para w-full lg:w-1/2 flex items-center">
            <div className="w-full p-8 lg:p-20 h-[500px]">
              <p className="text-[#565656] text-sm lg:text-base">
                مرکز سلامتی هتل اسپیناس پالاس
              </p>
              <p className="font-bold mt-3 text-xl lg:text-[30px]">
                خدمات ماساژ{" "}
              </p>
              <p className="mt-6 text-justify text-[#565656] text-sm lg:text-base">
                وارد محیط آرام اسپای اسپیناس شوید که به زیبایی برای تمرکز بر
                آرامش و تجدید قوا طراحی شده است. برای مهمانانی که می خواهند یک
                تجربه ماساژ فراموش نشدنی داشته باشند، به شما توصیه می کنیم از
                قبل قرار خود را با کارشناسان حرفه ای ما رزرو کنید.
              </p>
              <div className="mt-12 lg:mt-20 flex items-center">
                <div className="w-[150px] h-[45px] bg-stone-200 border border-black rounded-full flex items-center justify-center group hover:bg-black">
                  <p className="text-[13px] font-bold group-hover:text-white">
                    ادامه مطلب
                  </p>
                  <svg
                    className="ml-3 fill-[#CEA781] group-hover:translate-x-1 group-hover:fill-white transition"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                  >
                    <path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${
            activeSection === "gym" ? "block opacity-100" : "hidden opacity-0"
          } pool transition-opacity duration-500 absolute top-[calc(100%-80px)] w-[90%] lg:w-[80%] bg-white flex flex-col lg:flex-row`}
        >
          <div className="photo w-full lg:w-1/2 h-[500px] ">
            <Image
              width={500}
              height={500}
              src={"/section4/espinas_palace_gym.jpg"}
              alt="pool"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="para w-full lg:w-1/2 flex items-center">
            <div className="w-full p-8 lg:p-20 h-[500px]">
              <p className="text-[#565656] text-sm lg:text-base">
                مرکز سلامتی هتل اسپیناس پالاس
              </p>
              <p className="font-bold mt-3 text-xl lg:text-[30px]">
                باشگاه تناسب اندام
              </p>
              <p className="mt-6 text-justify text-[#565656] text-sm lg:text-base">
                تناسب اندام را بدون زحمت در برنامه سفر خود بگنجانید و با تجهیزات
                پیشرفته، استخر و سونا هتل خوش فرم بمانید. خدمات بهداشتی لوکس ما
                در طبقه -3 واقع شده است و حس آرامش و تجدید قوا را در شهر شلوغ
                ارائه می دهد.{" "}
              </p>
              <div className="mt-12 lg:mt-20 flex items-center">
                <div className="w-[150px] h-[45px] bg-stone-200 border border-black rounded-full flex items-center justify-center group hover:bg-black">
                  <p className="text-[13px] font-bold group-hover:text-white">
                    ادامه مطلب
                  </p>
                  <svg
                    className="ml-3 fill-[#CEA781] group-hover:translate-x-1 group-hover:fill-white transition"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                  >
                    <path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section4;
