import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import ContactUsModal from "@/components/ContactUsModal";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById('hero');
    const observer = new IntersectionObserver(
        ([entry]) => {
          setIsScrolled(!entry.isIntersecting);
        },
        { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (heroSection) observer.observe(heroSection);

    return () => {
      if (heroSection) observer.unobserve(heroSection);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [mobileMenuOpen]);

  return (
    <div className="z-50 w-full fixed">
      {!mobileMenuOpen &&
          <div
              className={`md:hidden w-full flex items-center justify-between bg-white px-2`}
          >
            <div aria-expanded={mobileMenuOpen}
                 aria-label="Open Menu" onClick={() => setMobileMenuOpen(true)} className={"flex"}>
              <RxHamburgerMenu size={30}/>
              <span className={"text-xl pl-3"}>Menu</span>
            </div>

            <div className={"ml-7"}>
                <video width={100} height={100} loop muted autoPlay playsInline>
                  <source
                      src={"/yt_upper.mp4"}
                      type={`video/mp4`}
                  />
                </video>
            </div>

              <ContactUsModal isFrom={"mobile_nav_not_open"}/>
          </div>}
      {mobileMenuOpen && (
          <motion.div
              initial={{opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-100%" }}
              className="w-full h-screen bg-black text-white md:hidden z-50 items-center justify-center">
            <div onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-end">
            <IoCloseOutline size={40} />
            </div>
          <div className="flex h-96 flex-col px-3 items-center justify-center gap-4">
            <Link onClick={() => setMobileMenuOpen(false)} href={"#hero"} className="mt-4 font-normal">
              Home
            </Link>
            <Link onClick={() => setMobileMenuOpen(false)} href={"#about_us"} className="mt-4 font-normal">
              About us
            </Link>
            <Link onClick={() => setMobileMenuOpen(false)} href={"#services"} className="mt-4 font-normal">
              Services
            </Link>
            <Link rel="noopener noreferrer" target={"_blank"} href={"https://drive.google.com/drive/folders/1D7JleVb-PVBhFom8b2x8oHuP7x0HICcE?usp=sharing"} className="mt-4 font-normal">
              Our Work
            </Link>
            <ContactUsModal isFrom={"mobile_nav"}/>
          </div>
        </motion.div>
      )}
      <nav className={`hidden md:flex justify-between w-full px-10 ${isScrolled ? "bg-white shadow-md shadow-slate-300": "py-5"} transition-colors items-center text-center absolute top-0 left-0 z-50`}>
        <div className="text-white">
          <Image src={"/logo.png"} width={100} height={100} alt="HK"/>
        </div>

        {isScrolled &&
        <video width={150} height={150} loop muted autoPlay playsInline className={"ml-56"}>
          <source
              src={"/yt_upper.mp4"}
              type={`video/mp4`}
          />
        </video>
        }
        <div className={`flex text-center items-center ${isScrolled ? "text-black" : "text-white"}`}>
          <Link href={"#hero"} className="mr-7 font-normal">
            Home
          </Link>
          <Link href={"#about_us"} className="mr-7 font-normal">
            About us
          </Link>
          <Link href={"#services"} className="mr-7 font-normal">
            Services
          </Link>
          <Link rel="noopener noreferrer" href={"https://drive.google.com/drive/folders/1D7JleVb-PVBhFom8b2x8oHuP7x0HICcE?usp=sharing"} target={"_blank"}
                className="mr-7 font-normal">
            Our Work
          </Link>
          <ContactUsModal isFrom={"nav"}/>
        </div>
      </nav>
    </div>
  );
}
