import Image from "next/image";
import logoDarkMode from "@/assets/logoDarkMode.png";
import { Icon } from "@iconify/react";
export default function Navbar() {
  return (
    <nav className="flex justify-between w-screen h-16 items-center px-14 fixed z-10">
      <div className="logo flex items-center justify-center">
        <Image src={logoDarkMode} alt="Logo" width={90} height={90} />
        <h1 className="text-black font-bold">LumoTrip</h1>
        <ul className="flex gap-5 text-black ml-5 text-[13.5px]">
          <li>Home</li>
          <li>Destinations</li>
          <li>About</li>
        </ul>
      </div>
      <div className="buttonLogin border-[1px] border-black w-[100px] flex justify-center p-1 rounded-4xl">
        <button className=" text-black ">Login</button>
      </div>
    </nav>
  );
}
