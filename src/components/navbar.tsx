import { FC } from "react";
// import BlurFade from "./ui/blur-fade";
import Link from "next/link";
import ComesInGoesOutUnderline from "./ui/underline";
import { ArrowUpRight } from "lucide-react";

const navLinks = [
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
    <div className="fixed top-2 z-30 flex w-full max-w-6xl items-center justify-between rounded-md border bg-white/25 px-4 py-3 ring-1 shadow-xs ring-black/5 backdrop-blur-sm">
      <h1 className="text-lg font-bold">vs-associates</h1>
      <div className="flex items-center gap-1">
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
            <ArrowUpRight className="mr-1 hidden h-4 w-4 rotate-45 opacity-0 duration-300 group-hover:ml-1 group-hover:rotate-0 group-hover:opacity-100 sm:block" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
