"use client";
import { AuroraBackground } from "@/components/aurora-background";
import { BackgroundGradient } from "@/components/background-gradient";
import { BentoGrid, BentoGridItem } from "@/components/bento-grid";
import { InfiniteMovingCards } from "@/components/infinite-moving-cards";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import { motion } from "framer-motion";
import Link from "next/link";

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
          <div className="text-5xl md:text-7xl font-extrabold md:font-bold text-[#080853] text-center md:px-40">
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
      <div>
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
        <div className="flex items-center justify-center mt-10">
          <Link
            href={"/services"}
            className="inline-flex h-12 bg-[#080853] items-center justify-center rounded-full border border-slate-800 px-6 font-medium text-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:bg-opacity-90 hover:shadow-md hover:shadow-slate-600"
          >
            View more
          </Link>
        </div>
      </div>
      <div className="mt-20 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <h1 className="text-center pb-5 text-4xl font-black text-[#080853]">
          Check out what our clients say about us
        </h1>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
      <Footer />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
