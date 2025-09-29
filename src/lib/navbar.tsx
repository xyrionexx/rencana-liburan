import Image from "next/image";
import logoDarkMode from "@/assets/logoDarkMode.png";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex justify-between w-screen h-16 items-center px-14 fixed z-10">
      <div className="logo flex items-center justify-center">
        <Image src={logoDarkMode} alt="Logo" width={90} height={90} />
        <h1 className="text-black font-bold">LumoTrip</h1>
        <ul className="flex gap-5 text-black ml-5 text-[13.5px]">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/destinations">Destinations</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className=" flex gap-2">
        <div className="buttonLeanguege flex border-[1px] border-black relative rounded-4xl w-[90px] ">
          <button className="text-black rounded-4xl hover:bg-black hover:text-white p-1 w-[55%] active:bg-black active:text-white absolute top-0 left-0">
            EN
          </button>
          <button className="text-black rounded-4xl hover:bg-black hover:text-white p-1 w-[55%] absolute top-0 right-0">
            ID
          </button>
        </div>
        <div className="buttonLogin border-[1px] border-black w-[100px] flex justify-center p-1 rounded-4xl">
          <button className=" text-black ">Login</button>
        </div>
      </div>
    </nav>
  );
}
