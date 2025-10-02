import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Footer() {
  return (
    <>
      <footer className="w-screen  p-10 bg-[#E8DFCA]">
        <div className="flex justify-between gap-32 text-black">
          <div className="perkenalan justify-center w-[40%] gap-5 flex flex-col">
            <h2 className="text-5xl font-bold">LumoTrip</h2>
            <p className=" mb-3">
              Every journey begins with a dream — we’re here to turn your travel
              ideas into real experiences. Discover destinations, plan with
              ease, and create meaningful memories wherever your adventure takes
              you.
            </p>
            <div className="sosialMedia flex gap-3">
              <div className="youtube">
                <Icon
                  icon="line-md:youtube"
                  width="35"
                  height="35"
                  style={{ color: "#000000" }}
                />
              </div>
              <div className="instagram">
                <Icon
                  icon="line-md:instagram"
                  width="35"
                  height="35"
                  style={{ color: "#000000" }}
                />
              </div>
              <div className="x">
                <Icon
                  icon="line-md:twitter-x"
                  width="35"
                  height="35"
                  style={{ color: "#000000" }}
                />
              </div>
              <div className="facebook">
                <Icon
                  icon="line-md:facebook"
                  width="35"
                  height="35"
                  style={{ color: "#000000" }}
                />
              </div>
            </div>
          </div>
          <div className="websiteKontak flex flex-col gap-10 w-[20%]">
            <div className="website flex flex-col gap-5">
              <h2 className="text-3xl font-bold">Legal</h2>
              <div className="linkWebSekolah">
                <p>
                  <a href="">Terms of Use</a>
                </p>
                <p>
                  <a href="">Privacy Policy</a>
                </p>
              </div>
            </div>
            <div className="kontak flex flex-col gap-5">
              <h2 className="text-3xl font-bold">Kontak</h2>
              <div className="dataKontak">
                <p>
                  <a href="tel:+0895384238691">No HP : 0895384238691</a>
                </p>
                <p>
                  <a href="mailto:aditcareer12370@gmail.com">
                    Email : aditcareer12370@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="pembuatAlamat flex flex-col gap-10  w-[20%]">
            <div className="pembuat flex flex-col gap-5">
              <h2 className="text-3xl font-bold">Quick Links</h2>
              <div className="quickLinks">
                <p>
                  <a href="#home">Home</a>
                </p>
                <p>
                  <a href="/about">About</a>
                </p>
                <p>
                  <a href="/contact">Contact</a>
                </p>
              </div>
            </div>
            <div className="Alamat flex flex-col gap-5">
              <h2 className="text-3xl font-bold">Alamat</h2>
              <p>
                Jl. Soekarno‑Hatta Km. 10, Jatisari, Kec. Buahbatu, Kota
                Bandung, Jawa Barat 40286 – Indonesia
              </p>
            </div>
          </div>
        </div>
        <h2 className="text-black">
          &copy; 2025 Lumotrip. All Rights Reserved.
        </h2>
      </footer>
    </>
  );
}
