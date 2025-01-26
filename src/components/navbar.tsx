import { FC } from "react";
// import BlurFade from "./ui/blur-fade";
import Link from "next/link";
import ComesInGoesOutUnderline from "./ui/underline";
import { ArrowDown, Ham } from "lucide-react";
import HamburgerMenu from "./ui/hamburger-menu";

export const navLinks = [
  {
    label: "Services",
    href: "/#services",
  },
  {
    label: "Team",
    href: "/#team",
  },
  {
    label: "Case studies",
    href: "/#customers",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/#contact",
  },
];

const Navbar: FC = () => {
  return (
    <div className="fixed top-2 left-1/2 z-30 flex w-full max-w-[calc(100%-1rem)] -translate-x-1/2 transform items-center justify-between rounded-md border bg-white/25 px-4 sm:py-3 py-1 ring-1 shadow-xs ring-black/5 backdrop-blur-sm sm:max-w-6xl">
      <h1 className="font-heading font-medium sm:text-lg">
        Vandana Singh & Associates
      </h1>
      <div className="hidden items-center gap-1 sm:flex">
        {navLinks.map(({ label, href }, index) => (
          <Link
            key={index}
            href={href}
            className="group flex max-w-max items-center text-sm"
          >
            <ComesInGoesOutUnderline
              label={label}
              className="hidden sm:block"
            />
            <span className="block sm:hidden">{label}</span>
            <ArrowDown className="mr-1 hidden h-4 w-4 rotate-45 opacity-0 duration-300 group-hover:ml-1 group-hover:rotate-0 group-hover:opacity-100 sm:block" />
          </Link>
        ))}
      </div>
      <HamburgerMenu />
      {/* <Ham /> */}
    </div>
  );
};

export default Navbar;
