import { FC } from "react";
import BlurFade from "./ui/blur-fade";
import Link from "next/link";
import ComesInGoesOutUnderline from "./ui/underline";
import { ArrowUpRight } from "lucide-react";

const navLinks = [
  {
    label: "services",
    href: "/#services",
  },
  {
    label: "case studies",
    href: "/case-studies",
  },
  {
    label: "blog",
    href: "blog",
  },
  {
    label: "contact",
    href: "/#contact",
  },
];

const Navbar: FC = () => {
  return (
    <div className="max-w-6xl absolute top-2 flex w-full items-center justify-between rounded-md border bg-white bg-opacity-25 px-4 py-3 shadow-sm backdrop-blur-md backdrop-filter">
      <h1 className="font-bold text-lg">vs-associates</h1>
      <div className="flex items-center gap-1">
        {navLinks.map(({ label, href }, index) => (
          <Link
            key={index}
            target="_blank"
            href={href}
            className="group flex max-w-max items-center"
          >
            <ComesInGoesOutUnderline
              label={label}
              className="hidden sm:block"
            />
            <span className="block sm:hidden">{label}</span>
            <ArrowUpRight className="mr-1 hidden h-4 w-4 rotate-45 opacity-0 duration-300 group-hover:ml-1 group-hover:rotate-0 group-hover:opacity-100 sm:block" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
