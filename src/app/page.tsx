import Navbar from "@/lib/navbar";
import HomePage from "@/lib/heropage";
import { Icon } from "@iconify/react";
import SliderHomePage from "@/lib/slider/sliderHomePage";

export default function HeroPage() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <div className=" px-8">
        <h2 className="text-2xl font-bold text-black text-center mb-6">
          Vacation Planning Features
        </h2>
        <SliderHomePage />
      </div>
      <div className=""></div>
    </div>
  );
}
