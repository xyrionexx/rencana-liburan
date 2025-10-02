import Image from "next/image";
import ilustration from "@/assets/ilustration.png";
import { Icon } from "@iconify/react";
import user from "@/assets/user.jpg";
import SliderHomePage from "./slider/sliderHomePage";
import company1 from "@/assets/company1.png";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full min-h-screen flex flex-col lg:flex-row justify-between items-center px-5 sm:px-10 lg:px-20 py-10 lg:py-0 relative">
        <div className="bg-[#6D94C5] absolute top-0 left-0 w-[40vw] sm:w-[30vw] lg:w-[25vw] h-[40vw] sm:h-[30vw] lg:h-[25vw] rounded-4xl blur-3xl z-[-1]"></div>
        <div className="bg-[#CBDCEB] absolute bottom-0 right-0 w-[45vw] sm:w-[35vw] lg:w-[30vw] h-[45vw] sm:h-[35vw] lg:h-[30vw] rounded-4xl blur-3xl z-[-1] dark:right-40 dark:bottom-14"></div>

        <div className="flex flex-col w-full lg:w-[50%] gap-4 sm:gap-5 mb-8 lg:mb-0 max-sm:mt-10">
          {/* User Avatars */}
          <div className="user flex relative h-10">
            <Image
              src={user}
              alt="User"
              width={45}
              height={45}
              className="rounded-full z-[0] absolute w-8 h-8 sm:w-10 sm:h-10 lg:w-[45px] lg:h-[45px]"
            />
            <Image
              src={user}
              alt="User"
              width={45}
              height={45}
              className="rounded-full z-[1] absolute left-6 sm:left-8 lg:left-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-[45px] lg:h-[45px]"
            />
            <Image
              src={user}
              alt="User"
              width={45}
              height={45}
              className="rounded-full z-[2] absolute left-12 sm:left-16 lg:left-20 w-8 h-8 sm:w-10 sm:h-10 lg:w-[45px] lg:h-[45px]"
            />
            <h2 className="absolute left-20 sm:left-28 lg:left-36 top-1 sm:top-2 text-sm sm:text-base p-1 rounded-2xl px-3 sm:px-4">
              Trusted 100+
            </h2>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium w-full lg:w-[90%]">
            Find the best destinations, book with ease, and make memories that
            last forever.
          </h1>

          {/* Description */}
          <p className="w-full sm:w-[80%] lg:w-[60%] text-sm sm:text-base text-justify">
            Discover the world's most beautiful destinations and create
            unforgettable memories with our travel platform.
          </p>

          {/* Get Started Button */}
          <div className="buttonGetStarted mb-6 sm:mb-8 lg:mb-10">
            <button className="flex items-center gap-2 py-2 px-4 sm:py-2.5 sm:px-5 rounded-3xl text-sm sm:text-base">
              <span>Get Started</span>
              <Icon icon="material-symbols:arrow-right-alt" />
            </button>
          </div>

          {/* Email Input Section */}
          <div className="forImformation flex flex-col gap-3 sm:gap-4">
            <p className="text-sm sm:text-base">
              For more Information, enter your email address
            </p>
            <div className="parentInputEmail flex items-center gap-2">
              <div className="inputEmail border-[1px] flex border-black rounded-4xl w-full sm:w-[60%] lg:w-[50%] px-2 py-1.5 justify-start items-center gap-2 sm:gap-3">
                <Icon
                  icon="material-symbols:mail-outline"
                  className="text-lg sm:text-xl"
                />
                <input
                  type="text"
                  placeholder="Email Address"
                  className="flex-grow outline-none text-sm sm:text-base"
                />
              </div>
              <button className="bg-black dark:bg-white p-1 rounded-4xl flex-shrink-0">
                <Icon
                  icon="line-md:arrow-up"
                  width="30"
                  height="30"
                  className="rotate-[40deg] w-6 h-6 sm:w-7 sm:h-7 lg:w-[30px] lg:h-[30px]"
                  style={{ color: "#ffffff" }}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Illustration */}
        <div className="ilustration-image w-full lg:w-[50%] flex justify-center mt-8 lg:mt-0">
          <Image
            src={ilustration}
            alt="Ilustration"
            className="w-full max-w-md lg:max-w-full"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="px-5 sm:px-8 lg:px-12 py-10 sm:py-16">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6 sm:mb-8">
          Vacation Planning Features
        </h2>
        <SliderHomePage />
      </div>

      {/* Community Growth Section */}
      <div className="px-5 sm:px-10 lg:px-20 flex items-center w-full min-h-screen py-10 lg:py-0">
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 w-full">
          <div className="headline flex flex-col gap-3 sm:gap-4 lg:gap-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl w-full lg:w-[90%] font-bold">
              Discover top destinations and enjoy unforgettable journeys
            </h2>
            <p className="text-base sm:text-xl lg:text-2xl">
              Join millions of travelers who trust Lumotrip.
            </p>
          </div>

          {/* Search Bar */}
          <div className="search w-full sm:w-[80%] lg:w-[60%] xl:w-[40vw] rounded-xl flex border-[1px] border-black">
            <input
              type="text"
              placeholder="Find your destination"
              className="w-full px-4 sm:px-5 py-2 outline-none rounded-xl text-sm sm:text-base"
            />
            <button className="w-12 sm:w-14 lg:w-[10%] rotate-180 flex-shrink-0">
              <i className="flex items-center justify-center">
                <Icon
                  icon="proicons:arrow-reply"
                  width="40"
                  height="40"
                  className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
                  style={{ color: "#000" }}
                />
              </i>
            </button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full">
            <div className="text-center lg:text-left">
              <p className="text-base sm:text-xl lg:text-2xl">Users</p>
              <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold lg:pl-5">
                100<span>+</span>
              </p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-base sm:text-xl lg:text-2xl">Trips planned</p>
              <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold lg:pl-5">
                500K
              </p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-base sm:text-xl lg:text-2xl">Reviews</p>
              <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold lg:pl-5">
                120,000<span>+</span>
              </p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-base sm:text-xl lg:text-2xl">Travelers</p>
              <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold lg:pl-5">
                200M<span>+</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="px-5 sm:px-10 lg:px-20 min-h-screen w-full py-10 lg:py-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold">
          Testimonials
        </h2>
      </div>
    </>
  );
}
