import Image from "next/image";
import ilustration from "@/assets/ilustration.png";
import { Icon } from "@iconify/react";
import user from "@/assets/user.jpg";

export default function HomePage() {
  return (
    <div className="w-screen h-[100vh] flex  justify-between items-center px-20">
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
          <h2 className="absolute left-36 top-2 text-white bg-black p-1 rounded-2xl px-4">
            Trusted 100+
          </h2>
        </div>
        <h1 className="text-4xl font-medium text-black w-[90%]">
          Find the best destinations, book with ease, and make memories that
          last forever.
        </h1>
        <p className=" text-black w-[50%] text-justify">
          Discover the world's most beautiful destinations and create
          unforgettable memories with our travel platform.
        </p>
        <div className="buttonGetStarted mb-10">
          <button className="bg-black text-white flex items-center gap-2 py-2 px-4 rounded-3xl">
            <span>Get Started</span>
            <Icon icon="material-symbols:arrow-right-alt" />
          </button>
        </div>
        <div className="forImformation flex flex-col gap-4">
          <p className="text-black">
            For more Information, enter your email address
          </p>
          <div className="parentInputEmail flex items-center">
            <div className="inputEmail border-[1px] flex border-black rounded-4xl w-[35% px-2 py-1.5">
              <Icon icon="material-symbols:mail-outline" className="" />
              <input
                type="text"
                placeholder="Email Address"
                className="flex-grow outline-none text-black"
              />
            </div>
            <button className="bg-black text-white p-1 rounded-4xl">
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
  );
}
