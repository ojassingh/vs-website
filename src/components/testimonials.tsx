"use client";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    content:
      '"Vandana is a consummate professional with deep expertise in secretarial practices. Her team delivers high-quality, timely results, ensuring positive interactions regardless of complexity."',
    author: "Venkatesh Bhat, Managing Partner @ AstraVise LLP",
    imgAlt: "Venkatesh Bhat",
  },
  {
    content:
      '"We\'ve worked with Vandana & Associates for years. Their expertise in routine filings and strategic advice consistently exceeds our expectations. Highly commendable service!"',
    author: "Divyani Kaushik, Company Secretary @ Unicharm",
    imgAlt: "Divyani Kaushik",
  },
  {
    content:
      '"Vandana is a thorough professional with vast knowledge in company law. She brings innovative solutions, is proactive, and highly dependable. Highly recommended!"',
    author: "Madhavan, President @ Institute for Policy Research",
    imgAlt: "Madhavan",
  },
  {
    content:
      '"Vandana and her team guided us seamlessly through our startup journey. Their professionalism and expertise in compliance have been invaluable to our success."',
    author: "Gopi V, Founder @ Rodeo Digital",
    imgAlt: "Gopi V",
  },
  {
    content:
      '"Vandana is an expert in company law, always updated with the latest changes. She offers pragmatic, holistic solutions, making collaborations enlightening."',
    author: "Deepak Gupta, Founding Partner @ AstraVise LLP",
    imgAlt: "Deepak Gupta",
  },
  {
    content:
      '"Vandana Singh & Associates is a reliable firm for secretarial matters. Vandana is professional, solution-oriented, and has in-depth subject knowledge."',
    author: "Anjali Grover, Country Legal Head @ Itochu India Pvt. Ltd.",
    imgAlt: "Anjali Grover",
  },
];

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleNextSlide() {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  }

  function handlePreviousSlide() {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  }

  return (
    <div className="w-full pt-20">
      <p className="max-w-max rounded-lg border px-2 py-1 text-sm">
        TESTIMONIALS
      </p>
      <div className="mt-4 grid w-full grid-cols-1 overflow-hidden rounded-2xl bg-neutral-200/60 p-8 dark:bg-neutral-900 shadow-md">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-heading text-4xl font-medium text-neutral-950 dark:text-neutral-50">
              Because what they say matters.
            </h2>
            <p className="mt-2 text-neutral-500">
              Why people love come to us to get more done.
            </p>
          </div>
          <div className="flex justify-end gap-2">
            <button
              className="group inline-flex size-7 items-center justify-center rounded-full bg-white p-1.5 dark:bg-neutral-950"
              disabled={currentSlide === 0}
              onClick={handlePreviousSlide}
              type="button"
            >
              <ArrowLeftIcon className="transform-gpu stroke-blue-500 transition-colors group-disabled:stroke-neutral-500/40" />
            </button>
            <button
              className="group inline-flex size-7 items-center justify-center rounded-full bg-white p-1.5 dark:bg-neutral-950"
              disabled={currentSlide === testimonials.length - 1}
              onClick={handleNextSlide}
              type="button"
            >
              <ArrowRightIcon className="transform-gpu stroke-blue-500 transition-colors group-disabled:stroke-neutral-500/40" />
            </button>
          </div>
        </div>
        <section className="mt-6 flex w-full gap-2 *:shrink-0">
          {testimonials.map((testimonial, index) => {
            return (
              <AnimatePresence key={testimonial.content} mode="popLayout">
                {index >= currentSlide && (
                  <motion.div
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    className="flex h-60 w-[24rem] flex-col justify-between rounded-lg bg-white p-4 shadow-sm dark:bg-neutral-800"
                    exit={{ opacity: 0, x: 0, scale: 0.8, rotate: 3 }}
                    initial={{ opacity: 0, x: 0, scale: 0.8 }}
                    layout={true}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    <div className="size-7 rounded-full bg-neutral-500/10" />
                    <p className="leading-5 font-medium tracking-tight text-neutral-600 dark:text-neutral-400">
                      {testimonial.content}
                    </p>
                    <p className="text-xs text-neutral-400 dark:text-neutral-500">
                      {testimonial.author}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default Testimonials;
