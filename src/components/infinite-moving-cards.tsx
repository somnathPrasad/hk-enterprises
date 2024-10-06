"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export interface CartItem {
  quote: string;
  name: string;
  title: string;
  type: "image" | "video";
  src: string;
  socialUrl?: string;
  socialIcon?: React.ReactNode;
}

interface InfiniteMovingCards {
  items: CartItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: InfiniteMovingCards) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap items-center",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) =>
          item.type === "image" ? (
            <ImageCard key={idx} item={item} />
          ) : (
            <VideoCard key={idx} item={item} />
          )
        )}
      </ul>
    </div>
  );
};

const ImageCard = ({ item }: { item: CartItem }) => {
  return (
    <li className="w-[350px] max-w-full relative flex-shrink-0 md:w-[450px]">
      <div className="w-full flex items-center justify-center absolute -top-5 md:-top-8 z-50">
        <Image src={item.src} alt={item.name} width={220} height={220} />
      </div>
      <blockquote
        className="border border-b-0 border-slate-700 px-8 pb-6 pt-14 mt-32 rounded-2xl"
        style={{
          background:
            "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
        }}
      >
        <div
          aria-hidden="true"
          className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
        ></div>
        <span className=" relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
          {item.quote}
        </span>
        <div className="relative z-20 mt-6 flex flex-row items-center justify-between">
          <span className="flex flex-col gap-1">
            <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
              {item.name}
            </span>
            <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
              {item.title}
            </span>
          </span>
          {item?.socialUrl && (
            <Link target="_blank" href={item.socialUrl}>
              {item.socialIcon}
            </Link>
          )}
        </div>
      </blockquote>
    </li>
  );
};

const VideoCard = ({ item }: { item: CartItem }) => {
  let temp = item.src.split(".");
  const videoExtension = temp[temp.length - 1];

  return (
    <li className="w-[350px] max-w-full relative flex-shrink-0 md:w-[450px]">
      <blockquote className="relative">
        <div className="w-full flex items-center justify-center">
          <video
            controls
            className="rounded-xl w-[280px] md:w-[250px] -top-5 md:bottom-40 z-50"
          >
            <source src={item.src} type={`video/${videoExtension}`} />
          </video>
        </div>
        <div
          aria-hidden="true"
          className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
        ></div>
        <div
          style={{
            background:
              "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
          }}
          className="absolute w-full -bottom-20 z-20 pt-10 pb-5 px-5 rounded-2xl flex flex-row items-center justify-between"
        >
          <span className="flex flex-col gap-1">
            <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
              {item.name}
            </span>
            <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
              {item.title}
            </span>
          </span>
          {item?.socialUrl && (
            <Link target="_blank" href={item.socialUrl}>
              {item.socialIcon}
            </Link>
          )}
        </div>
      </blockquote>
    </li>
  );
};
