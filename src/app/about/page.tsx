import { Icon } from "@iconify/react";
import Image from "next/image";
import about from "@/assets/about.jpg";
import aboutpeminjaman from "@/assets/aboutpeminjaman.jpg";
import { HowItWorks } from "@/app/lib/components/how-it-works";
import { Mission } from "@/app/lib/components/mission";
import { Philosophy } from "@/app/lib/components/philosophy";
import { Team } from "@/app/lib/components/team";
import { Features } from "@/app/lib/components/features";
import { Experience } from "../lib/components/experience";
import { CTA } from "../lib/components/cta";

export default function AboutPage() {
  return (
    <>
      <div className="">
        <div className="heroPageAbout flex justify-center items-center h-screen w-screen relative ">
          <div className="bg-gradient-to-br from-[#6D94C5] via-[#8BA8CE] to-[#A9BED7] absolute top-0 left-0 w-[40vw] sm:w-[30vw] lg:w-[25vw] h-[40vw] sm:h-[30vw] lg:h-[25vw] rounded-full blur-3xl opacity-40 z-[-1] animate-pulse"></div>
          <div className="bg-gradient-to-tl from-[#CBDCEB] via-[#B8D4E8] to-[#9CC4DD] absolute bottom-0 right-0 w-[45vw] sm:w-[35vw] lg:w-[30vw] h-[45vw] sm:h-[35vw] lg:h-[30vw] rounded-full blur-3xl opacity-30 z-[-1]  animate-pulse delay-700"></div>
          <div className="flex flex-col items-center">
            <h1 className="text-8xl font-bold max-sm:text-6xl">LumoTrip</h1>
            <p className="text-2xl">Home / About</p>
          </div>
        </div>

        <HowItWorks />
        <Mission />
        <Philosophy />
        <Team />
        <Features />
        <Experience />
        <CTA />
      </div>
    </>
  );
}
