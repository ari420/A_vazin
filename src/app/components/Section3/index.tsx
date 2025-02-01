"use client";

import React from "react";
import { roomData } from "./roomData";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Correct import for modules
import "swiper/css"; // Swiper core CSS
import "swiper/css/navigation"; // Navigation module CSS
import "swiper/css/pagination"; // Pagination module CSS

interface Section3Props {
  slides: string[]; // Expecting an array of strings (though not used in this case)
}

export default function Section3({ slides = [] }: Section3Props) {
  return (
    <div className="bg-[#ECECEC] py-10 px-5">
      {/* Header Section */}
      <div className="flex flex-wrap items-center justify-between mx-4  lg:mx-8 mt-8 lg:mt-16 mb-8">
        <div className="w-full lg:w-2/3">
          <p className="text-sm mb-2 font-bold">
            - اتاق ها و سوئیت های هتل اسپیناس پالاس
          </p>
          <h2 className="text-2xl lg:text-4xl font-extrabold mb-2 font-vazir">
            تجربه‌ای منحصر به فرد در انتظار شماست
          </h2>
          <p className="text-gray-600 text-sm lg:text-lg leading-6 max-w-2xl font-vazir text-justify">
            اسپیناس پالاس با احترام به کسانی که این هتل را برای اقامت خود انتخاب
            می کنند، تمامی امکانات و سرویس های رفاهی یک هتل پنج ستاره ی لوکس را
            دارا می باشد. لابی این هتل مطابق بروزترین مدل طراحی شده است. این هتل
            مجلل با 400 اتاق هر آن چیزی که مهمان برای تجربه اقامتی خاص با منظره
            ای نمادین از شهر تهران نیاز دارد، دارا می باشد
          </p>
        </div>
        <div className="w-full lg:w-auto mt-4 lg:mt-0 flex justify-center lg:justify-end">
          <Button
            variant="text"
            sx={{
              fontFamily: "Vazir",
              color: "black",
              border: "1px solid white",
            }}
            className="w-full lg:w-fit !font-bold !text-gray-600 !text-[.7rem] !px-16 py-2 border-2 !bg-[#CDCDCD] !rounded-none hover:bg-[#DD9127] font-vazir"
          >
            مشاهده لیست اتاق ها
            <ArrowRightAltIcon sx={{ color: "#4b556381", marginRight: 1 }} />
          </Button>
        </div>
      </div>

      {/* Slider Section for Room Cards */}
      <div className="room-slider-section">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          slidesPerView={1} // Show 3 cards at once
          spaceBetween={20} // Space between the cards
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={false} // Disabling pagination (bullets)
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // Responsive settings
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 1,
            },
          }}
        >
          {roomData.map((room) => (
            <SwiperSlide key={room.id}>
              <Card
                className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl border transition-shadow duration-300"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%", // Ensure the card takes full height inside the swiper
                }}
              >
                {/* Card Image */}
                <CardMedia
                  component="img"
                  height="200"
                  image={room.image}
                  alt={room.title}
                  className="object-cover"
                />
                {/* Card Content */}
                <CardContent className="p-4 flex-grow">
                  {/* Title */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Vazir",
                      fontWeight: 900,
                      fontSize: 20,
                      marginBottom: 1,
                    }}
                    className="font-bold mb-3 text-gray-800 font-vazir"
                  >
                    {room.title}
                  </Typography>
                  {/* Details */}
                  <Typography
                    variant="body2"
                    sx={{ fontFamily: "Vazir", fontSize: 14, marginBottom: 1 }}
                    className="text-gray-400 mb-3 text-base font-vazir"
                  >
                    {room.size} | {room.view}
                  </Typography>
                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Vazir",
                      lineHeight: 1.5,
                      fontWeight: 600,
                      fontSize: 14,
                    }}
                    className="text-gray-700/70 leading-6 text-sm mb-4 font-vazir text-justify"
                  >
                    {room.description}
                  </Typography>
                  <Stack
                    sx={{
                      marginTop: 4,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      pt: 2,
                    }}
                    className="mx-auto w-[90%] border-t-[1px] border-black/40 text-center"
                  >
                    {/* Price */}
                    <Typography
                      variant="body2"
                      sx={{ fontFamily: "Vazir", fontWeight: "bold" }}
                      className="font-bold mb-4 text-base font-vazir"
                    >
                      {room.price}
                    </Typography>
                    {/* Button */}
                    <Button
                      variant="text"
                      sx={{ fontFamily: "Vazir", color: "black" }}
                      className="w-fit text-sm py-2 border-2 border-gray-300 hover:bg-[#DD9127] font-vazir"
                    >
                      جزئیات بیشتر
                      <ArrowRightAltIcon sx={{ color: "#DD9127" }} />
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </div>
  );
}
