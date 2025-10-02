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
          <div className="bg-[#6D94C5] absolute top-0 left-0 w-[25vw] h-[25vw] rounded-4xl blur-3xl z-[-1]"></div>
          <div className="bg-[#CBDCEB] absolute bottom-0 right-0 w-[30vw] h-[30vw] rounded-4xl blur-3xl z-[-1]"></div>
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
