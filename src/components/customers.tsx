import { FC } from "react";
import BlurFade from "./ui/blur-fade";
import Image from "next/image";
import image1 from "@/../public/customers/1.jpg";
import image2 from "@/../public/customers/2.jpg";
import image3 from "@/../public/customers/3.jpg";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import act from "@/../public/logos/act.png";

const Customers: FC = () => {
  const customers = [
    {
      name: "How we helped Aceternity scale their blockchain network",
      bg: image1,
      logo: act,
      link: "https://aceternity.com",
    },
    {
      name: "Navigating the crypto market with Crypto.com",
      bg: image2,
      logo: act,
      link: "https://crypto.com",
    },
    {
      name: "Regulating compliance with Binance and its ecosystem",
      bg: image3,
      logo: act,
      link: "https://binance.com",
    },
  ];

  return (
    <section id="customers" className="">
      <div className="z-20 grid gap-4 pt-24">
        <p className="max-w-max rounded-lg border px-2 py-1 text-sm">
          CUSTOMERS
        </p>
        <div className="flex items-start justify-between">
          <h1 className={`font-heading text-5xl font-medium`}>
            Case studies from two decades of experience
          </h1>
          <p className="max-w-lg text-right text-gray-600">
            We&apos;ve partnered with leaders to navigate their most critical
            legal and compliance challenges—delivering solutions that drive
            growth, ensure resilience, and build trust. Read our case studies to
            learn more.
          </p>
        </div>
      </div>
      <div className="mt-10 flex flex-wrap gap-4">
        {customers.map(({ name, bg, link, logo }, index) => {
          return (
            <BlurFade key={index} inView delay={index / 10} direction="right">
              <Link href={link}>
                <div className="group relative h-84 w-64 rounded-lg shadow-md">
                  <div className="absolute z-20 flex flex-col gap-4 p-4">
                    <Image
                      src={logo}
                      className="h-6 w-14 object-contain opacity-60 brightness-0"
                      alt={name}
                    />
                    <h1 className="text-lg font-medium text-neutral-700">
                      {name}
                    </h1>
                  </div>
                  <div className="absolute z-10 h-full w-full rounded-lg bg-neutral-200 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
                  <div className="absolute z-10 h-full w-full rounded-lg bg-neutral-200 [mask-image:linear-gradient(to_right,black,transparent)]" />

                  <Image
                    src={bg}
                    alt={name}
                    className="absolute h-full w-full rounded-lg object-cover"
                  />
                  <div className="absolute right-4 bottom-4 rounded-full bg-black/20 p-2 backdrop-blur-sm">
                    <ArrowRight className="text-white duration-300 group-hover:-rotate-45" />
                  </div>
                </div>
              </Link>
            </BlurFade>
          );
        })}
      </div>
    </section>
  );
};

export default Customers;
