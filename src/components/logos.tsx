import { FC } from "react";
import Image from "next/image";
import act from "@/../public/logos/act.png";
import censhare from "@/../public/logos/censhare.png";
// import cpr from "@/../public/logos/cpr.png";
import design from "@/../public/logos/design.png";
import egelhof from "@/../public/logos/egelhof.png";
import itochu from "@/../public/logos/itochu.png";
import unicharm from "@/../public/logos/unicharm.png";

const logos = [act, censhare, design, egelhof, itochu, unicharm];

const Logos: FC = () => {
  return (
    <div className="mt-20 grid place-content-center gap-8">
      <h3 className="text-center">Trusted by 200+ founders and companies</h3>
      <div className="flex flex-wrap items-center justify-center gap-0">
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt="logo"
            className="h-10 w-32 object-contain opacity-80 brightness-0"
          />
        ))}
      </div>
    </div>
  );
};

export default Logos;
