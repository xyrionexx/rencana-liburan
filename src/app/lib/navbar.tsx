"use client";

import Image from "next/image";
import logoDarkMode from "@/assets/logoDarkMode.png";
import logoLightMode from "@/assets/logoLightMode.png";
import { usePathname } from "next/navigation";
import Link from "next/link";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function Navbar() {
  const { setTheme } = useTheme();
  return (
    <nav className="flex justify-between w-screen h-16 items-center px-14 fixed z-10">
      <div className="logo flex items-center justify-center">
        <Image
          src={logoLightMode}
          alt="Logo"
          width={90}
          height={90}
          className="dark:block hidden"
        />
        <Image
          src={logoDarkMode}
          alt="Logo"
          width={90}
          height={90}
          className="dark:hidden block"
        />

        <h1 className=" font-bold">LumoTrip</h1>
        <ul className="flex gap-5  ml-5 text-[13.5px]">
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
        <div className="buttonLeanguege flex border-[1px] border-black dark:border-white relative rounded-4xl w-[90px] ">
          <button className=" rounded-4xl hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black p-1 h-full w-[55%] active:bg-black active:text-white absolute top-0 left-0">
            EN
          </button>
          <button className=" rounded-4xl hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black  h-full w-[55%] absolute top-0 right-0">
            ID
          </button>
        </div>
        <div className="buttonLogin border-[1px] border-black dark:border-white w-[100px] flex justify-center p-1 rounded-4xl">
          <Link href="/login">
            <button className="  ">Login</button>
          </Link>
        </div>
        <div className="">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
