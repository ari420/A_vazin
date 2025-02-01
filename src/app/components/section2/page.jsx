import Image from "next/image";

const Section2 = () => {
  return (
    <section className=" flex flex-wrap w-full pt-20 px-2 lg:px-40 ">
      <div className=" flex flex-wrap *:w-full *:md:w-[50%] lg:p-4">
        <div className="  flex content-center justify-center flex-wrap p-2 *:w-full  ">
          <p className="font-bold text-3xl  text-center md:text-right">
            هتل اسپیناس بین الملل
          </p>
          <p className="mt-3 text-lg text-center md:text-right font-[20px] text-[#CEA781]">
            اوج احساسات
          </p>
          <p className="mt-8 mb-6 p-4 lg:mb-0 text-lg xl:text-xl text-[#565656] text-justify">
            لابی هتل بین‌المللی اسپیناس با طراحی منحصر به فرد خود در زیباترین و
            باشکوه ترین حالت ممکن قرار دارد. هتل بین‌المللی اسپیناس یکی از ناب
            ترین هتل های مرکز تهران است که با ظرافت هنرمندانه ای در این شهر
            جهانی جذاب توجه ها را به سوی خود جلب می کند. این هتل با تلفیق عناصر
            معماری مدرن واقلام طبیعی غنی، با مهارت تحسین برانگیزی احساس آرامش را
            القا می کند. این هتل با تلفیق عناصر معماری مدرن، با مهارت تحسین
            برانگیزی احساس آرامش را القا می کند. در این هتل همه ی انتظاراتی که
            از یک هتل پنج ستاره می رود به بهترین نحو پاسخ داده می شود. این ویژگی
            سبب شده است تا همه ی مهمانان اقامت راحت و دلچسبی را تجربه کنند. از
            اینکه پذیرای حضور گرم شما در هتل بین المللی اسپیناس باشیم عمیقا
            خوشحال خواهیم بود.
          </p>
        </div>
        <div className="lg:p-4 ">
          <Image
            width={1200}
            height={800}
            // layout="reintrinsic"
            className="w-full h-full"
            src={"/espinas_palace_about_bg-1.png"}
            alt="hotel"
          />
        </div>
      </div>
      <div className="pb-12 md:w-5/6 md:mx-auto *:w-full *:items-center *:md:w-2/4 *:lg:w-1/4 p-4 *:px-2 items-center flex flex-wrap justify-center">
        <div className="*:p-2 flex flex-wrap justify-center border-l-neutral-600">
          <span>
            <Image
              width={100}
              height={100}
              className="w-[60px] "
              src={"/section2/icons/Screenshot 2025-01-07 080826.png"}
              alt="icon"
            />
          </span>
          <p className="w-full flex justify-center items-center font-bold">
            گارانتی بهترین نرخ
          </p>
          <p className="text-center text-[#565656] mb-[20px] font-bold md:w-[80%]">
            بهترین نرخ اتاق برای رزرو آنلاین از طریق وب سایت
          </p>
        </div>
        <div className="flex *:p-2 flex-wrap justify-center  md:border-r">
          <span>
            <Image
              width={100}
              height={100}
              className="w-[60px] object-cover"
              src={"/section2/icons/Screenshot 2025-01-07 080841.png"}
              alt="icon"
            />
          </span>
          <p className="w-full flex justify-center items-center   font-bold ">
            روم سرویس
          </p>
          <p className="text-center text-[#565656] mb-[20px] mr-2 ml-2 font-bold md:w-[80%]">
            ارائه خدمات بیست و چهار ساعته روم سرویس در اتاق ها
          </p>
        </div>
        <div className="flex *:p-2 flex-wrap justify-center  md:border-r">
          <span>
            <Image
              width={100}
              height={100}
              className="w-[60px]  object-cover"
              src={"/section2/icons/Screenshot 2025-01-07 080858.png"}
              alt="icon"
            />
          </span>
          <p className=" w-full flex justify-center items-center font-bold ">
            اینترنت بی سیم
          </p>
          <p className="text-center text-[#565656] mb-[20px] mr-2 ml-2 font-bold md:w-[80%]">
            فراهم بودن اینترنت نامحدود بی سیم با پهنای باند بالا
          </p>
        </div>
        <div className="flex *:p-2 flex-wrap justify-center md:border-r">
          <span>
            <Image
              width={100}
              height={100}
              className="w-[60px] object-cover"
              src={"/section2/icons/Screenshot 2025-01-07 080921.png"}
              alt="icon"
            />
          </span>
          <p className=" w-full flex justify-center items-center font-bold ">
            رزرواسیون شبانه روزی
          </p>
          <p className="text-center text-[#565656] mb-[20px] mr-2 ml-2 font-bold md:w-[80%]">
            امکان رزرو آنلاین اتاق به صورت 24 ساعته و هر روز هفته
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
