import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const PackageCard: React.FC<{
  title: string;
  price: string;
  details: string;
  imageUrl: string;
  className?: string
}> = ({ title, price, details, imageUrl, className }) => {
  return (
    <Card className={`relative mx-2 rounded-lg shadow-lg overflow-hidden border-[1px] border-[#CEA781] ${className} `}>
      {/* Card Image */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-[80vh] object-cover"
      />
      {/* Card Content */}
      <CardContent className="  absolute top-[20%] left-1/2 transform -translate-x-1/2 group  rounded-xl p-4 w-[90%]">
        <Typography
          variant="h5"
          className="!font-vazir font-bold mb-2 text-white text-center leading-6 group-hover:text-yellow-300 duration-500"
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          className="!font-vazir text-center !leading-10 !font-bold mb-2 text-white"
        >
          {price}
        </Typography>
        <Typography
          variant="body1"
          className="!font-vazir text-center !leading-6 text-white"
        >
          {details}
        </Typography>
      </CardContent>
    </Card>
  );
};

const Section7: React.FC = () => {
  const packages = [
    {
      title: "پکیج ویژه ازدواج",
      price: "دیزاین اتاق رایگان",
      details: "خروج رایگان تا ساعت ۱۳",
      imageUrl: "/section7/cards/espinas_birthday_offer.jpg",
    },
    {
      title: "پکیج ساده ازدواج",
      price: "تخفیف ۴۰۰ هزار تومانی شام",
      details: "نیم شارژ خروج رایگان تا ساعت ۱۳",
      imageUrl: "/section7/cards/espinas_anniversary_offer.jpg",
    },
    {
      title: "پکیج ویژه تولد",
      price: "دیزاین ساده اتاق",
      details: "کیک تولد نیم شارژ خروج رایگان تا ساعت ۱۳",
      imageUrl: "/section7/cards/espinas_marriage_offer.jpg",
    },
  ];

  return (
    <div className="relative bg-white">
      {/* Background Section */}
      <div className="p-20 bg-[url('/section7/header/espinas_offer_bg.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="my-44">
          <span className="text-sm font-bold">- بسته های اقامتی</span>
          <p className="text-4xl font-bold">
            پکیج های اقامتی ویژه هتل اسپیناس پالاس
          </p>
        </div>
      </div>

      {/* Card Section */}
      <div className="flex  translate-y-[-100px] xl:translate-y-[-200px] flex-wrap justify-center gap-8 wf mx-auto items-start p-10 bg-transparent">
        {packages.map((pkg, index) => (
          <PackageCard
            key={index}
            title={pkg.title}
            price={pkg.price}
            details={pkg.details}
            imageUrl={pkg.imageUrl}
            className={index === 1 ? 'xl:mt-28' : ''}
          />
        ))}
      </div>
    </div>
  );
};

export default Section7;
