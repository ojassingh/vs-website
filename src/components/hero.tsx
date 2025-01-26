import React from "react";
import BlurFade from "./ui/blur-fade";
import Logos from "./logos";
import { AnimatedShinyText } from "./ui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
// import ThreeD from "./threeD";

export default function Hero() {
  return (
    <div className="grid h-screen place-content-center pt-14 sm:pt-10">
      {/* <ThreeD className="absolute inset-0 -z-10" /> */}
      <div className="absolute inset-0 -z-10 hidden h-full w-full sm:block">
        <video className="" autoPlay muted>
          <source src="/bg.mp4" type="video/mp4" />
        </video>
      </div>
      <BlurFade inView className="" direction="up">
        <div className="grid place-content-center">
          <div
            className={cn(
              "group mx-auto max-w-max rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 dark:hover:text-neutral-400">
              <Link href="/#services" className="flex items-center space-x-2">
                <span>✨ Discover our story</span>
              </Link>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
          <h1
            className={`font-heading mt-8 px-2 text-center text-4xl font-medium sm:px-0 sm:text-6xl`}
          >
            Architecting <span>compliance</span> for <br /> tomorrow&apos;s
            innovators
          </h1>
          <p className="mx-auto mt-8 max-w-xs text-center text-base text-gray-800 sm:max-w-xl sm:text-xl">
            Building intelligent compliance frameworks while the world&apos;s
            most ambitious companies focus on what they do best
          </p>
          <div className="mt-8 flex place-content-center items-center gap-4">
            <Link
              href="/#contact"
              className="rounded-md bg-black px-4 py-2 text-white"
            >
              Get in touch
            </Link>
            <Link href="/#services">Learn more</Link>
          </div>
        </div>
        <Logos />
      </BlurFade>
    </div>
  );
}
