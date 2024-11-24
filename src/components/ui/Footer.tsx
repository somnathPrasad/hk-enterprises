import Image from "next/image";
import Link from "next/link";
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import Map from "./Map";
import ContactUsModal from "@/components/ContactUsModal";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="text-[#080853]">
      <div className="grid grid-row-4 md:grid-cols-5 gap-5 mt-40 border-t border-gray-400 pt-10 px-10">
        <div>
          <Image
            src={"/logo.png"}
            width={140}
            height={140}
            alt="HK"
            className="pb-5"
          />
          <span>
            Young minds with new age ideas to give yourself an amazing digital
            experience.
          </span>
        </div>
        <div>
          <h1 className="font-bold text-xl pb-5">Navigation</h1>
          <ul className="font-medium text-lg cursor-pointer grid grid-row-5 gap-2 pl-1">
            <Link href={"#hero"}>Home</Link>
            <Link href={"#about_us"}>About us</Link>
            <Link href={"#services"}>Services</Link>
            <Link rel="noopener noreferrer" target={"_blank"} href={"https://drive.google.com/drive/folders/1D7JleVb-PVBhFom8b2x8oHuP7x0HICcE?usp=sharing"}>Our Work</Link>
            <ContactUsModal isFrom={"footer"}/>
          </ul>
        </div>
        <div className="px-auto">
          <Map />
        </div>
        <div className="hidden md:block col-span-2">
          <h1 className="font-bold text-xl pb-5">Get in touch</h1>
          <div className="flex items-center">
            <IoIosCall size={25} />
            <div className="flex flex-col pl-4">
              <span className="text-lg font-bold">Call</span>
              <span>+919523230486</span>
            </div>
          </div>
          <div className="flex items-center mt-3">
            <IoIosMail size={25} />
            <div className="flex flex-col pl-4">
              <span className="text-lg font-bold">Email</span>
              <span>hkmotionmedia@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center mt-3">
            <div>
              <FaMapLocationDot size={25} />
            </div>
            <div className="flex flex-col pl-4">
              <span className="text-lg font-bold">Registered Office</span>
              <span>
                A-302, Birsa Munda Market complex, Phase - 3, Kalinga Vihar
                Chowk, Chhend, Rourkela -15, Odisha
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden px-10 mt-5">
        <h1 className="font-bold text-xl pb-5">Get in touch</h1>
        <div className="flex items-center">
          <IoIosCall size={25} />
          <div className="flex flex-col pl-4">
            <span className="text-lg font-bold">Call</span>
            <span>+917352646691</span>
          </div>
        </div>
        <div className="flex items-center mt-3">
          <IoIosMail size={25} />
          <div className="flex flex-col pl-4">
            <span className="text-lg font-bold">Email</span>
            <span>hkmotionmedia@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center mt-3">
          <div>
            <FaMapLocationDot size={25} />
          </div>
          <div className="flex flex-col pl-4">
            <span className="text-lg font-bold">Registered Office</span>
            <span>
              A-302, Birsa Munda Market complex, Phase - 3, Kalinga Vihar Chowk,
              Chhend, Rourkela -15, Odisha
            </span>
          </div>
        </div>
      </div>
      <span className="flex items-center justify-center pt-10 pb-5">
        Copyright © {year} HK Motion Media
      </span>
    </div>
  );
}
