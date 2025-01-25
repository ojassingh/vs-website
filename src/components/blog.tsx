import { FC } from "react";
import Link from "next/link";
import act from "@/../public/logos/act.png";
import image1 from "@/../public/customers/4.jpg";
import BlurFade from "./ui/blur-fade";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Blog: FC = () => {
  const blogItems = [
    {
      name: "How we helped Aceternity scale their blockchain network",
      bg: image1,
      logo: act,
      link: "https://aceternity.com",
    },
  ];

  return (
    <div className="relative pt-20">
      <div className="absolute -top-10 right-10 -z-10 translate-x-1/2 -rotate-15 blur-sm">
        <div
          className="h-0 w-0"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            background: "radial-gradient(at 25% 25%, transparent, #438AFF)",
            width: "300px",
            height: "250px",
          }}
        ></div>
      </div>

      <p className="max-w-max rounded-lg border px-2 py-1 text-sm">BLOG</p>
      <h1 className="font-heading mt-4 text-4xl font-medium">
        Keep up with our latest insights
      </h1>

      <div className="mt-10 flex flex-wrap gap-4">
        {blogItems.map(({ name, bg, link, logo }, index) => {
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
    </div>
  );
};

export default Blog;
