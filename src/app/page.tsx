"use client";
import { AuroraBackground } from "@/components/aurora-background";
import { BackgroundGradient } from "@/components/background-gradient";
import { BentoGrid, BentoGridItem } from "@/components/bento-grid";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <AuroraBackground className="bg-white">
        <Header />
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
          <div className="text-3xl md:text-7xl font-bold text-[#080853] text-center md:px-40">
            Need help in content creation?
          </div>
          <div className="font-extralight text-base md:text-2xl text-[#080853] py-4 text-center px-1 md:px-52">
            Your social media management team that can help you with Ideation,
            Scripting, Video presenters, Editing, Promotions and Advertisements.
            We offer services of 5 experts in the salary of 1.
          </div>
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#080853,45%,#1e3631,55%,#080853)] bg-[length:200%_100%] px-6 font-medium text-white transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:scale-110 ease-in-out">
            Connect with us
          </button>
        </motion.div>
      </AuroraBackground>
      <div
      // initial={{ opacity: 0.0, y: 50 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // transition={{
      //   delay: 0.3,
      //   duration: 0.8,
      //   ease: "easeInOut",
      // }}
      >
        <h1
          className="text-center pb-5 text-4xl font-black text-[#080853]"
          id="services"
        >
          Our Services
        </h1>
        <BentoGrid className="max-w-5xl mx-auto px-10 md:px-0">
          <BackgroundGradient
            containerClassName="md:col-span-2"
            className="rounded-xl h-full"
          >
            <BentoGridItem
              title={"Video Editing"}
              description={
                "Just give us your raw video and we will handle the rest"
              }
              className={"md:col-span-2 h-full"}
            />
          </BackgroundGradient>
          <BackgroundGradient className="rounded-xl h-full">
            <BentoGridItem
              title={"Graphic Designing"}
              description={"lorem ipsum"}
              className="h-full"
            />
          </BackgroundGradient>
          <BackgroundGradient
            containerClassName="md:col-span-1"
            className="rounded-xl h-full"
          >
            <BentoGridItem
              title={"Influencer Marketing"}
              description={"lorem ipsum"}
              className="md:col-span-1 h-full"
            />
          </BackgroundGradient>
          <BackgroundGradient className="rounded-xl h-full">
            <BentoGridItem
              title={"Subtitle writing"}
              description={"lorem ipsum"}
              className="h-full"
            />
          </BackgroundGradient>
          <BackgroundGradient
            containerClassName="md:col-span-2"
            className="rounded-xl h-full"
          >
            <BentoGridItem
              title={"Social Handle Management"}
              description={"lorem ipsum"}
              className="md:col-span-2 h-full"
            />
          </BackgroundGradient>
          <BackgroundGradient className="rounded-xl h-full">
            <BentoGridItem
              title={"Script writing"}
              description={"lorem ipsum"}
              className="h-full"
            />
          </BackgroundGradient>
        </BentoGrid>
      </div>

      <Footer />
    </div>
  );
}
