import Image from "next/image";
import Link from "next/link";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import Map from "./Map";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="text-[#080853]">
      <div className="grid grid-row-5 md:grid-cols-5 gap-10 mt-40 border-t border-gray-400 pt-10 px-10">
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
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>About us</Link>
            <Link href={"/"}>Services</Link>
            <Link href={"/"}>Our Work</Link>
            <Link href={"/"}>Contact us</Link>
          </ul>
        </div>
        <div className="col-span-2">
          <Map />
        </div>
        <div>
          <h1 className="font-bold text-xl pb-5">Get in touch</h1>
          <div className="flex items-center">
            <IoIosCall size={25} />
            <div className="flex flex-col pl-4">
              <span className="text-lg font-bold">Call</span>
              <span>7735661657</span>
            </div>
          </div>
          <div className="flex items-center mt-3">
            <MdEmail size={25} />
            <div className="flex flex-col pl-4">
              <span className="text-lg font-bold">Email</span>
              <span>7735661657</span>
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
      <span className="flex items-center justify-center pt-10 pb-5">
        Copyright © {year} HK Motion Media
      </span>
    </div>
  );
}
