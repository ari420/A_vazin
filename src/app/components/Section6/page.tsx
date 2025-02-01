import React from "react";
import { Card, CardContent, Rating, Stack, Typography } from "@mui/material";
import Image from "next/image";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Section6: React.FC = () => {
  return (
    <Stack className="flex !flex-row justify-center py-14 bg-white items-center shadow-lg w-screen !font-vazir">
      <ArrowRightAltIcon sx={{ color: "#999999" }} />
      <CardContent className="w-[70%] !mx-8">
        <Typography
          component="div"
          className="text-center text-sm !font-bold text-black/30 !font-vazir "
        >
          نظرات مهمانان
        </Typography>
        <Typography
          variant="h4"
          className="text-center my-4 !font-vazir !font-extrabold !text-4xl"
        >
          مهمانان هتل در مورد خدمات ما چه گفته اند
        </Typography>

        <Image
          src={"/section6/espinas_tripadviser_icon.jpg"}
          width={500}
          height={500}
          alt="jgksjdbfkj"
          className="mt-4 mb-10 w-20 h-20 mx-auto"
        />

        <Typography className="text-center text-black/60 my-4 !font-vazir !text-xl">
          "در طول مدت اقامت در این هتل زیبا، بهترین تجربه‌ای که داشتم، از تیم
          پذیرش و رفتار مودبانه آنها بسیار سپاسگزارم و از پرسنل هتل که در تهیه
          نقشه شهر به من کمک کردند تشکر می‌کنم."
        </Typography>

        <div className="flex justify-center my-4">
          {/* <span className="text-yellow-500">⭐️⭐️⭐️⭐️⭐️</span> */}
          <Rating
            name="simple-controlled"
            value={5}
            sx={{
              "& .MuiRating-iconFilled": {
                color: "#E4A853",
              },
              "& .MuiRating-icon": {
                fontSize: "1.3rem",
              },
            }}
          />
        </div>

        <Typography
          variant="h6"
          className="text-center text-black font-semibold !font-vazir "
        >
          مهمان هتل
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          className="text-center !font-vazir"
        >
          Feb 2024
        </Typography>
      </CardContent>
      <ArrowRightAltIcon
        sx={{ transform: "rotate(180deg)", color: "#999999" }}
      />
    </Stack>
  );
};

export default Section6;
