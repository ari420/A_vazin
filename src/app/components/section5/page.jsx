import Image from "next/image";

const Section5 = () => {
  return (
    <main>
      {/* Restaurant Section */}
      <div className="w-full  flex flex-col mb-20 mt-[950px] lg:mt-[500px] items-center">
        <p className="text-[#565656] text-sm lg:text-base">
          رستوران های هتل اسپیناس پالاس
        </p>
        <p className="font-bold text-lg lg:text-[35px] h-16 flex items-end">
          رستوران های ایرانی و بین المللی
        </p>
        <p className="text-[#565656] mt-4 text-sm lg:text-base text-center">
          طعم های ناب و غذاهای خلاقانه را با هنر بی نظیر آشپزی سرآشپزهای ستاره
          دار ما، کشف کنید.
        </p>
      </div>

      <section className=" w-full pt-20  flex bg-[url('/espinas_birthday_offer_(1).jpg')] bg-center bg-no-repeat bg-cover  flex-col items-center">
        {/* Main Section with Image and Text */}

        {/* Slider Section */}
        <div className="slider  items-end flex ">
          {/* Navigation Arrows */}
          <div className=" flex flex-col mr-[50px] lg:mr-[100px] ">
            <div className="w-[5rem] h-[5rem] bg-slate-700 flex items-center justify-center hover:bg-[#CEA781]">
              <svg
                className="fill-[#ffffff] hover:fill-[#ffffff]"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
              >
                <path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z" />
              </svg>
            </div>
            <div className="w-[5rem] h-[5rem] bg-slate-700 flex items-center justify-center hover:bg-[#CEA781]">
              <svg
                className="fill-[#ffffff] rotate-180 hover:fill-[#ffffff]"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
              >
                <path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z" />
              </svg>
            </div>
          </div>
          {/* Sky Lounge Section */}
          <div className=" w-[60%]  lg:w-[40%] border-b bg-white p-4 lg:p-8 self-end ">
            <p className="text-[#565656] text-[12px] lg:text-[10px]">
              رستوران تلفیقی
            </p>
            <p className="text-black mt-4 lg:mt-6 text-xl lg:text-[25px] font-bold">
              اسکای لانژ
            </p>
            <p className="text-[#565656] mt-2 text-sm lg:text-[18px]">
              یک مکان پر زرق و برق با منظره جادویی از شهر تهران و غذاهای بین
              المللی که توسط سرآشپز برجسته ما تهیه شده است. فضای پر جنب و جوش
              اسکای لانژ خاطره ای فراموش نشدنی را برای شما رقم خواهد زد.
            </p>
            <div className="mt-6 flex items-center">
              <div className="click bg-zinc-900 w-20 h-8 rounded-full flex items-center justify-center group hover:bg-white transition-all">
                <svg
                  className="rotate-180 group-hover:fill-black"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="15px"
                  fill="white"
                >
                  <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                </svg>
                <p className="text-white text-[10px] group-hover:text-black">
                  مطالعه بیشتر
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Section5;
