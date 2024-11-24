"use client";
import { AuroraBackground } from "@/components/aurora-background";
import { BackgroundGradient } from "@/components/background-gradient";
import { BentoGrid, BentoGridItem } from "@/components/bento-grid";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import { motion } from "framer-motion";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { FaVideo } from "react-icons/fa";
import { SiAdobeindesign } from "react-icons/si";
import { MdSubtitles } from "react-icons/md";
import { SlSocialInstagram } from "react-icons/sl";
import { MdOutlineDescription } from "react-icons/md";
import { InfiniteMovingCards } from "@/components/infinite-moving-cards";
import { testimonials } from "@/testimonials";
import ContactUsModal from "@/components/ContactUsModal";

export default function Home() {
  return (
    <div>
      <div id={"hero"} className="relative border-0">
        <div className="h-1/2 w-full absolute bg-gradient-to-b from-slate-600 to-transparent border-0 md:block hidden"></div>
        <Header />
        <video className="z-0 border-0 md:object-cover w-full md:pt-0 pt-14" loop muted autoPlay playsInline>
          <source
            src={"/hero.mp4"}
            type={`video/mp4`}
          />
        </video>
        <div className="h-full w-full absolute bg-gradient-to-t from-transparent via-slate-300 to-transparent -bottom-1/2 z-10 left-0"></div>
      </div>
      <AuroraBackground className="bg-white">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 -mt-44 md:-mt-0"
        >
          <div className="text-5xl md:text-7xl font-extrabold md:font-bold text-[#080853] text-center md:px-40">
            Need help in content creation?
          </div>
          <div className="font-extralight text-base md:text-2xl text-[#080853] py-4 text-center px-1 md:px-52">
            Your social media management team that can help you with Ideation,
            Scripting, Video presenters, Editing, Promotions and Advertisements.
            We offer services of 5 experts in the salary of 1.
          </div>
         <ContactUsModal isFrom={"main"}/>
        </motion.div>
      </AuroraBackground>
      <div>
        <h1
          className="text-center pb-5 text-4xl font-black text-[#080853] scroll-smooth"
          id="services"
        >
          Our Services
        </h1>
        <BentoGrid className="max-w-5xl mx-auto px-5 md:px-0">
          <BackgroundGradient
            containerClassName="md:col-span-2"
            className="rounded-xl h-full"
          >
            <BentoGridItem
              title={"Video Editing"}
              description={
                "Transform your raw footage into a captivating story with our professional video editing services. Whether it’s a short promotional clip or a full-length feature, we bring your vision to life with precision and creativity."
              }
              detail="We handle everything from color correction, transitions, sound design, to final rendering, ensuring your video stands out."
              className={"md:col-span-2 h-full"}
              icon={<FaVideo color="white" size={25} />}
            />
          </BackgroundGradient>
          <BackgroundGradient className="rounded-xl h-full">
            <BentoGridItem
              title={"Graphic Designing"}
              // description={"lorem ipsum"}
              detail="Our team blends creativity with the latest design trends to deliver eye-catching visuals that communicate your brand’s message effectively."
              className="h-full"
              icon={<SiAdobeindesign color="white" size={25} />}
            />
          </BackgroundGradient>
          <BackgroundGradient
            containerClassName="md:col-span-1"
            className="rounded-xl h-full"
          >
            <BentoGridItem
              title={"Influencer Marketing"}
              detail="We handle influencer selection, campaign strategy, content creation, and performance analysis to ensure maximum impact."
              // description={"lorem ipsum"}
              className="md:col-span-1 h-full"
            />
          </BackgroundGradient>
          <BackgroundGradient className="rounded-xl h-full">
            <BentoGridItem
              title={"Subtitle writing"}
              // description={"lorem ipsum"}
              detail="Our services cover multiple languages, ensuring your message reaches a wider audience without losing its essence."
              className="h-full"
              icon={<MdSubtitles color="white" size={25} />}
            />
          </BackgroundGradient>
          <BackgroundGradient
            containerClassName="md:col-span-2"
            className="rounded-xl h-full"
          >
            <BentoGridItem
              title={"Social Handle Management"}
              description={
                " Keep your social media presence active and engaging with our expert social media management services. We create, schedule, and monitor posts to ensure your brand stays relevant and connected with your audience."
              }
              detail="Our services include content creation, community management, analytics reporting, and strategic growth planning."
              className="md:col-span-2 h-full"
              icon={<SlSocialInstagram color="white" size={25} />}
            />
          </BackgroundGradient>
          <BackgroundGradient className="rounded-xl h-full">
            <BentoGridItem
              title={"Script writing"}
              // description={"lorem ipsum"}
              detail="We collaborate closely with you to ensure the script aligns with your vision and delivers your message effectively."
              className="h-full"
              icon={<MdOutlineDescription color="white" size={25} />}
            />
          </BackgroundGradient>
        </BentoGrid>
        {/*<div className="flex items-center justify-center mt-10">*/}
        {/*  <Link*/}
        {/*    href={"/services"}*/}
        {/*    className="inline-flex h-12 bg-[#080853] items-center justify-center rounded-full border border-slate-800 px-6 font-medium text-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:bg-opacity-90 hover:shadow-md hover:shadow-slate-600"*/}
        {/*  >*/}
        {/*    View more*/}
        {/*  </Link>*/}
        {/*</div>*/}
      </div>

        {/* ===============About Us SECTION============================= */}
        <div id={"about_us"} className="mt-20 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <h1 className="text-center pb-5 text-4xl font-black text-[#080853] px-5 md:px-0">
                Who We Are
            </h1>
            <p className={"md:mx-40 mx-10 text-center text-xl"}>
                At HK Enterprises, we are passionate about empowering businesses and creators through exceptional digital solutions. With expertise in video editing, graphic design, influencer marketing, and social media management, we transform your ideas into impactful content.
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Our team prides itself on delivering innovative strategies and captivating visuals to help you connect with your audience. Whether you're a startup or an established brand, we provide tailored services designed to elevate your online presence and drive results.
                Let’s build something extraordinary together.
            </p>
        </div>

      {/* ===============TESTIMONIAL SECTION============================= */}
      <div className="mt-20 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <h1 className="text-center pb-5 text-4xl font-black text-[#080853] px-5 md:px-0">
          Check out what our clients say about us
        </h1>
      </div>
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>

      <div className="flex items-center justify-center">
        <video width={700} height={700} loop muted autoPlay>
          <source src={"/gifs/gif1.mp4"} type={`video/mp4`} />
        </video>
      </div>

      <Footer />
    </div>
  );
}
