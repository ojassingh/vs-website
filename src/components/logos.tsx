import { FC } from "react";
import Image from "next/image";
import act from "@/../public/logos/act.png";
import censhare from "@/../public/logos/censhare.png";
import cpr from "@/../public/logos/cpr.png";
import design from "@/../public/logos/design.png";
import egelhof from "@/../public/logos/egelhof.png";
import itochu from "@/../public/logos/itochu.png";
import unicharm from "@/../public/logos/unicharm.png";
import homelane from "@/../public/logos/homelane.png";
import curebay from "@/../public/logos/curebay.png";
import newspace from "@/../public/logos/new_space.png";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

const logos = [
  act,
  censhare,
  design,
  egelhof,
  itochu,
  unicharm,
  cpr,
  homelane,
  curebay,
  newspace,
];

const Logos: FC = () => {
  return (
    <div className="mt-20 grid place-content-center gap-8">
      <h3 className="text-center">Trusted by 200+ founders and companies</h3>
      <div className="group relative">
        <div className="z-10 flex max-w-3xl flex-wrap items-center justify-center gap-4 duration-200 group-hover:blur-sm">
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt="logo"
              className="h-6 w-28 object-contain opacity-50 brightness-0 sm:h-10 sm:w-32"
            />
          ))}
        </div>
        <div className="absolute top-1/2 left-1/2 z-30 hidden -translate-x-1/2 -translate-y-1/2 group-hover:block">
          <Link
            href="/#services"
            className="flex items-center gap-1 rounded-full border bg-white/50 px-3 py-1 shadow-sm"
          >
            See services
            <ChevronRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Logos;
