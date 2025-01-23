import React from "react";
import BlurFade from "./ui/blur-fade";
import Logos from "./logos";
import { AnimatedShinyText } from "./ui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ThreeD from "./threeD";
import { Bricolage_Grotesque } from "next/font/google";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400"],
});

export default function Hero() {
  return (
    <div className="grid h-screen place-content-center">
      {/* <ThreeD className="absolute inset-0 -z-10" /> */}
      <video
        className="absolute inset-0 -z-10 hidden h-screen w-screen sm:block"
        autoPlay
        muted
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      <BlurFade inView className="">
        <div className="grid place-content-center">
          <div
            className={cn(
              "group mx-auto max-w-max rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <Link href="/#services" className="flex items-center space-x-2">
                <span>✨ Discover our story</span>
              </Link>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
          <h1
            className={`mt-8 text-center text-6xl font-medium ${bricolageGrotesque.className}`}
          >
            Architecting <span>compliance</span> for <br /> tomorrow&apos;s
            innovators
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-center text-xl">
            Building intelligent compliance frameworks while the world&apos;s
            most ambitious companies focus on what they do best
          </p>
          <div className="mt-8 flex place-content-center items-center gap-4">
            <button className="rounded-full bg-black px-4 py-2 text-white">
              Get in touch
            </button>
            <button className="rounded-full border-black">Learn more</button>
          </div>
        </div>
        <Logos />
      </BlurFade>
    </div>
  );
}
