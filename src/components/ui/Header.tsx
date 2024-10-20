import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="z-50">
      <div
        onClick={() => setMobileMenuOpen(true)}
        className="md:hidden absolute top-0 right-0"
      >
        <RxHamburgerMenu size={30} />
      </div>
      {mobileMenuOpen && (
        <div className="w-1/2 h-full bg-slate-300 backdrop-blur-md bg-opacity-50 md:hidden absolute top-0 right-0 z-10 shadow-lg shadow-black">
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-end"
          >
            <IoCloseOutline size={40} />
          </div>
          <div className="flex flex-col px-3 items-center justify-center">
            <Link href={"/"} className="mt-4 font-normal">
              Home
            </Link>
            <Link href={"/"} className="mt-4 font-normal">
              About us
            </Link>
            <Link href={"#services"} className="mt-4 font-normal">
              Services
            </Link>
            <Link href={"/"} className="mt-4 font-normal">
              Our Work
            </Link>
            <Link href={"/"} className="mt-4">
              Contact Us
            </Link>
          </div>
        </div>
      )}
      <nav className="hidden md:flex justify-between w-full px-10 py-5 items-center text-center absolute top-0 left-0 z-50">
        <div className="text-black">
          <Image src={"/logo.png"} width={100} height={100} alt="HK" />
        </div>
        <div className="flex text-center items-center text-white">
          <Link href={"/"} className="mr-7 font-normal">
            Home
          </Link>
          <Link href={"/"} className="mr-7 font-normal">
            About us
          </Link>
          <Link href={"#services"} className="mr-7 font-normal">
            Services
          </Link>
          <Link href={"/"} className="mr-7 font-normal">
            Our Work
          </Link>
          <Link
            href={"/"}
            className="bg-[#080853] text-white font-normal text-base px-5 py-1 rounded-3xl"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </div>
  );
}
