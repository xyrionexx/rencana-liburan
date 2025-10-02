import Image from "next/image";
import ilustration from "@/assets/ilustration.png";
import { Icon } from "@iconify/react";
import user from "@/assets/user.jpg";
import SliderHomePage from "./slider/sliderHomePage";
import company1 from "@/assets/company1.png";

export default function HomePage() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col lg:flex-row justify-between items-center px-5 sm:px-10 lg:px-20 py-10 lg:py-0 relative overflow-hidden">
        <div className="bg-gradient-to-br from-[#6D94C5] via-[#8BA8CE] to-[#A9BED7] absolute top-0 left-0 w-[40vw] sm:w-[30vw] lg:w-[25vw] h-[40vw] sm:h-[30vw] lg:h-[25vw] rounded-full blur-3xl opacity-40 z-[-1] animate-pulse"></div>
        <div className="bg-gradient-to-tl from-[#CBDCEB] via-[#B8D4E8] to-[#9CC4DD] absolute bottom-0 right-0 w-[45vw] sm:w-[35vw] lg:w-[30vw] h-[45vw] sm:h-[35vw] lg:h-[30vw] rounded-full blur-3xl opacity-30 z-[-1] dark:right-40 dark:bottom-14 animate-pulse delay-700"></div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:40px_40px] z-[-1] opacity-50"></div>

        <div className="flex flex-col w-full lg:w-[50%] gap-6 sm:gap-7 mb-8 lg:mb-0 max-sm:mt-10">
          <div className="user flex relative h-10 mb-2">
            <div className="absolute w-8 h-8 sm:w-10 sm:h-10 lg:w-[45px] lg:h-[45px] rounded-full bg-gradient-to-r from-blue-400 to-blue-600 blur-md opacity-60 z-[-1]"></div>
            <Image
              src={user}
              alt="User"
              width={45}
              height={45}
              className="rounded-full z-[0] absolute w-8 h-8 sm:w-10 sm:h-10 lg:w-[45px] lg:h-[45px]  dark:border-gray-800 shadow-lg"
            />
            <Image
              src={user}
              alt="User"
              width={45}
              height={45}
              className="rounded-full z-[1] absolute left-6 sm:left-8 lg:left-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-[45px] lg:h-[45px]  dark:border-gray-800 shadow-lg"
            />
            <Image
              src={user}
              alt="User"
              width={45}
              height={45}
              className="rounded-full z-[2] absolute left-12 sm:left-16 lg:left-20 w-8 h-8 sm:w-10 sm:h-10 lg:w-[45px] lg:h-[45px]  dark:border-gray-800 shadow-lg"
            />
            <div className="absolute left-20 sm:left-28 lg:left-36 top-1 sm:top-2 bg-blue-300 text-black dark:bg-gray-700 dark:text-white text-xs sm:text-sm px-3 sm:px-4 py-1 rounded-full shadow-lg font-medium">
              Trusted by 100K+
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold w-full lg:w-[95%] leading-tight bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">
            Craft Your Perfect Journey, Create Timeless Memories
          </h1>

          <p className="w-full sm:w-[85%] lg:w-[70%] text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Experience curated luxury travel planning with AI-powered
            recommendations. From hidden gems to iconic destinations, every
            journey is tailored to perfection.
          </p>

          <div className="buttonGetStarted mb-6 sm:mb-8 lg:mb-10">
            <button className="group relative flex items-center gap-3 py-3 px-6 sm:py-4 sm:px-8 rounded-full text-sm sm:text-base font-semibold dark:hover:text-black dark:bg-gray-800 hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden">
              <span className="absolute inset-0 bg-blue-300 dark:bg-gray-700  group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">Start Your Journey</span>
              <Icon
                icon="material-symbols:arrow-right-alt"
                className="relative z-10 text-xl group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
          </div>

          <div className="forImformation flex flex-col gap-3 sm:gap-4">
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">
              Subscribe for exclusive travel insights and offers
            </p>
            <div className="parentInputEmail flex items-center gap-3">
              <div className="inputEmail backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 border-2 border-gray-200 dark:border-gray-700 flex rounded-full w-full sm:w-[65%] lg:w-[55%] px-4 py-2.5 justify-start items-center gap-3 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Icon
                  icon="material-symbols:mail-outline"
                  className="text-xl sm:text-2xl dark:text-gray-700"
                />
                <input
                  type="text"
                  placeholder="your@email.com"
                  className="flex-grow outline-none text-sm sm:text-base bg-transparent placeholder:text-gray-400"
                />
              </div>
              <button className="group bg-blue-300 dark:bg-gray-700 p-2.5 rounded-full flex-shrink-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                <Icon
                  icon="line-md:arrow-up"
                  width="30"
                  height="30"
                  className="rotate-[40deg] w-6 h-6 sm:w-7 sm:h-7 lg:w-[30px] lg:h-[30px] text-white group-hover:rotate-[50deg] transition-transform duration-300"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="ilustration-image w-full lg:w-[50%] flex justify-center mt-8 lg:mt-0 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl blur-2xl"></div>
          <Image
            src={ilustration}
            alt="Ilustration"
            className="w-full max-w-md lg:max-w-full relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      <div className="px-5 sm:px-8 lg:px-12 py-16 sm:py-24 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent dark:via-gray-900/50">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r  bg-clip-text ">
            Luxury Planning Features
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need for the perfect vacation experience
          </p>
        </div>
        <SliderHomePage />
      </div>

      <div className="px-5 sm:px-10 lg:px-20 flex items-center w-full min-h-screen py-16 lg:py-24">
        <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12 w-full">
          <div className="headline flex flex-col gap-4 sm:gap-5 lg:gap-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl w-full lg:w-[90%] font-bold leading-tight bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
              Explore World-Class Destinations with Confidence
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300">
              Join millions of discerning travelers who trust Lumotrip for
              unforgettable experiences.
            </p>
          </div>

          <div className="search w-full sm:w-[80%] lg:w-[60%] xl:w-[40vw] rounded-2xl flex border-2 border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white dark:bg-gray-800 overflow-hidden">
            <input
              type="text"
              placeholder="Where would you like to go?"
              className="w-full px-5 sm:px-6 py-3.5 outline-none text-sm sm:text-base bg-transparent placeholder:text-gray-400"
            />
            <button className="w-14 sm:w-16 lg:w-[12%] dark:bg-blue-500 rotate-180 flex-shrink-0 transition-all duration-300 group">
              <i className="flex items-center justify-center">
                <Icon
                  icon="proicons:arrow-reply"
                  width="40"
                  height="40"
                  className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10  group-hover:scale-110 transition-transform duration-300"
                />
              </i>
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 w-full mt-4">
            {[
              {
                label: "Active Users",
                value: "100K",
                icon: "mdi:account-group",
              },
              { label: "Trips Planned", value: "500K", icon: "mdi:airplane" },
              { label: "5-Star Reviews", value: "120K", icon: "mdi:star" },
              { label: "Happy Travelers", value: "200M", icon: "mdi:earth" },
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon
                      icon={stat.icon}
                      className="text-3xl  dark:text-blue-400"
                    />
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </p>
                  </div>
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-bold  bg-clip-text ">
                    {stat.value}
                    <span className="text-2xl">+</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 sm:px-10 lg:px-20 min-h-screen w-full py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6   bg-clip-text ">
            What Our Travelers Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real stories from real travelers who discovered their perfect
            journeys with us
          </p>
        </div>
      </div>
    </>
  );
}
