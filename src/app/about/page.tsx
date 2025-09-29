import { Icon } from "@iconify/react";
import Image from "next/image";
import about from "@/assets/about.jpg";
import aboutpeminjaman from "@/assets/aboutpeminjaman.jpg";

export default function AboutPage() {
  return (
    <>
      <div className="text-black">
        <div className="heroPageAbout flex justify-center items-center h-screen w-screen relative ">
          <div className="bg-[#6D94C5] absolute top-0 left-0 w-[25vw] h-[25vw] rounded-4xl blur-3xl z-[-1]"></div>
          <div className="bg-[#CBDCEB] absolute bottom-0 right-0 w-[30vw] h-[30vw] rounded-4xl blur-3xl z-[-1]"></div>
          <div className="flex flex-col items-center">
            <h1 className="text-8xl font-bold">LumoTrip</h1>
            <p className="text-2xl">Home / About</p>
          </div>
        </div>

        <div className="w-screen  flex items-center px-20">
          <div className="flex flex-col gap-8">
            <h2 className="text-6xl font-medium">ABOUT LUMOTRIP</h2>
            <div className="line border-[1px] border-black"></div>
            <div className="flex gap-14">
              <div className="">
                <p>
                  Lumotrip is a modern travel platform designed to provide
                  easier, more comfortable, and more enjoyable travel
                  experiences. We believe that every journey is not just about
                  moving from one place to another, but a valuable story worth
                  remembering.
                </p>
              </div>
              <div className="">
                <p>
                  With the support of advanced technology and a dedicated team,
                  Lumotrip helps you plan your trips more efficiently—from
                  bookings and destination recommendations to reliable travel
                  services.
                </p>
              </div>
              <div className="">
                <p>
                  We are committed to delivering the best service by
                  prioritizing comfort, safety, and customer satisfaction. With
                  Lumotrip, discover a new way to explore the world and create
                  unforgettable travel moments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
