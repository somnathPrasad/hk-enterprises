"use client";
import { AuroraBackground } from "@/components/aurora-background";
import { BackgroundGradient } from "@/components/background-gradient";
import { BentoGrid, BentoGridItem } from "@/components/bento-grid";
import Header from "@/components/ui/Header";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <AuroraBackground className="bg-black">
        <Header />
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold text-white text-center">
            Need help in content creation?
          </div>
          <div className="font-extralight text-base md:text-2xl text-neutral-200 py-4 text-center">
            Your social media management team that can help you with Ideation,
            Scripting, Video presenters, Editing, Promotions and Advertisements.
            We offer services of 5 experts in the salary of 1.
          </div>
          <button className="bg-white rounded-full w-fit text-black px-4 py-2">
            Connect with us
          </button>
        </motion.div>
      </AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <h1 className="text-center pb-5 text-2xl font-bold">Our Services</h1>
        <BentoGrid className="max-w-5xl mx-auto">
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
      </motion.div>

      <div className="h-20"></div>
    </div>
  );
}
