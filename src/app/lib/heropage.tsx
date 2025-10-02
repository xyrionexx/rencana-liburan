import Image from "next/image";
import ilustration from "@/assets/ilustration.png";
import { Icon } from "@iconify/react";
import user from "@/assets/user.jpg";
import SliderHomePage from "./slider/sliderHomePage";
import company1 from "@/assets/company1.png";

export default function HomePage() {
  return (
    <>
      <div className="w-screen h-[100vh] flex  justify-between items-center px-20 #home relative">
        <div className="bg-[#6D94C5] absolute top-0 left-0 w-[25vw] h-[25vw] rounded-4xl blur-3xl z-[-1]"></div>
        <div className="bg-[#CBDCEB] absolute bottom-0 right-0 w-[30vw] h-[30vw] rounded-4xl blur-3xl z-[-1]"></div>
        <div className="flex flex-col w-[50%] gap-5">
          <div className="user flex relative h-10 ">
            <Image
              src={user}
              alt="User"
              width={45}
              height={45}
              className="rounded-full z-[0] absolute"
            />
            <Image
              src={user}
              alt="User"
              width={45}
              height={45}
              className="rounded-full z-[1] absolute left-10"
            />
            <Image
              src={user}
              alt="User"
              width={45}
              height={45}
              className="rounded-full z-[2] absolute left-20"
            />
            <h2 className="absolute left-36 top-2   p-1 rounded-2xl px-4">
              Trusted 100+
            </h2>
          </div>
          <h1 className="text-4xl font-medium  w-[90%]">
            Find the best destinations, book with ease, and make memories that
            last forever.
          </h1>
          <p className="  w-[50%] text-justify">
            Discover the world's most beautiful destinations and create
            unforgettable memories with our travel platform.
          </p>
          <div className="buttonGetStarted mb-10">
            <button className="  flex items-center gap-2 py-2 px-4 rounded-3xl">
              <span>Get Started</span>
              <Icon icon="material-symbols:arrow-right-alt" />
            </button>
          </div>
          <div className="forImformation flex flex-col gap-4">
            <p className="">For more Information, enter your email address</p>
            <div className="parentInputEmail flex items-center">
              <div className="inputEmail border-[1px] flex border-black rounded-4xl w-[35% px-2 py-1.5 flex justify-center items-center gap-3">
                <Icon icon="material-symbols:mail-outline" className="" />
                <input
                  type="text"
                  placeholder="Email Address"
                  className="flex-grow outline-none flex "
                />
              </div>
              <button className=" bg-black dark:bg-white  p-1 rounded-4xl">
                <Icon
                  icon="line-md:arrow-up"
                  width="30"
                  height="30"
                  className="rotate-[40deg]"
                  style={{ color: "#ffffff" }}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="ilustration-image w-[50%] flex">
          <Image src={ilustration} alt="Ilustration" />
        </div>
      </div>

      <div className=" px-8">
        <h2 className="text-2xl font-bold  text-center mb-6">
          Vacation Planning Features
        </h2>
        <SliderHomePage />
      </div>

      <div className="Community Growth Section  px-20 flex items-center w-screen h-screen">
        <div className="flex flex-col gap-10">
          <div className="headline flex flex-col gap-5">
            <h2 className="text-5xl  w-[90%] font-bold">
              Discover top destinations and enjoy unforgettable journeys
            </h2>
            <p className="text-2xl">
              Join millions of travelers who trust Lumotrip.
            </p>
          </div>
          <div className="search w-[40vw] rounded-xl flex border-[1px] border-black">
            <input
              type="text"
              placeholder="Find your destination"
              className="w-[100%] px-5 py-2 outline-none rounded-xl"
            />
            <button className="w-[10%] rotate-180 ">
              <i className="flex items-center justify-center">
                <Icon
                  icon="proicons:arrow-reply"
                  width="40"
                  height="40"
                  style={{ color: "#000" }}
                />
              </i>
            </button>
          </div>
          <div className="flex w-full justify-between ">
            <div className="">
              <p className="text-2xl">Users</p>
              <p className="text-5xl font-bold pl-5">
                100<span>+</span>
              </p>
            </div>
            <div className="">
              <p className="text-2xl">Trips planned</p>
              <p className="text-5xl font-bold pl-5">500K</p>
            </div>
            <div className="">
              <p className="text-2xl">Reviews</p>
              <p className="text-5xl font-bold pl-5">
                120,000<span>+</span>
              </p>
            </div>
            <div className="">
              <p className="text-2xl">Travelers</p>
              <p className="text-5xl font-bold pl-5">
                200,000,000 <span>+</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="  px-20 h-screen w-screen">
        <h2 className="text-5xl font-bold">Testimonials</h2>
      </div>
    </>
  );
}
