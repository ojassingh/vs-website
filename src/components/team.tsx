import Image from "next/image";
import { FC } from "react";
import headshot from "@/../public/headshot.jpeg";
import Link from "next/link";
import BlurFade from "./ui/blur-fade";

const Team: FC = () => {
  const team = [
    {
      name: "Vandana Singh",
      role: "Founder and Corporate Advisor",
      description:
        "Trusted advisor with 20+ years in corporate law. Has guided 200+ multinational companies through compliance, company formation, and strategic advisory. Expert in corporate law, she excels in drafting, due diligence, and strategic advisory, making her a cornerstone of India's legal landscape.",
      image: headshot,
      linkedin: "https://www.linkedin.com/in/vandanacs/",
    },
    {
      name: "Sweta Dutta",
      role: "Partner and HR Specialist",
      description:
        "With 8+ years in HR, Sweta specializes in talent management, employee engagement, and strategic HR initiatives. She has been instrumental in building high-performance teams and fostering a culture of continuous improvement.",
      image: headshot,
      linkedin: "https://www.linkedin.com/in/sweta-dutta-47765a55/",
    },
  ];

  return (
    <section id="team" className="relative pt-24">
      <div className="grid gap-4">
        <p className="max-w-max rounded-lg border px-2 py-1 text-sm">TEAM</p>
        <div className="flex items-start justify-between">
          <h1 className={`font-heading text-5xl font-medium`}>
            Advisors redifining <br /> compliance excellence
          </h1>
          <p className="max-w-lg text-right text-gray-600">
            We are a team of seasoned legal professionals, united by <br /> a
            shared commitment to delivering innovative solutions <br /> and
            unparalleled client success.
          </p>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-2 items-center gap-4">
        {team.map(({ name, role, description, image, linkedin }, index) => {
          return (
            <BlurFade key={index} inView delay={index / 10}>
              <div className="flex rounded-md ring-1 ring-black/5">
                <Image
                  alt="Vandana Singh & associates founder - Vandana Singh"
                  src={image}
                  className="w-48 rounded-l-md object-cover"
                />

                <div className="rounded-r-md bg-white/50 px-4 py-2 shadow-sm backdrop-blur-sm">
                  <div className="flex justify-between">
                    <h3>{name}</h3>{" "}
                    <Link href={linkedin} target="_blank" className="">
                      <Linkedin />
                    </Link>
                  </div>
                  <p className="text-gray-800">{role}</p>
                  <p className="mt-2 text-sm text-gray-600">{description}</p>
                </div>
              </div>
            </BlurFade>
          );
        })}
      </div>

      <div className="absolute top-40 left-0 -z-10 size-70 -translate-x-1/2 rotate-z-115 rounded-md bg-radial-[at_25%_25%] from-transparent to-[#438AFF] blur-lg"></div>
    </section>
  );
};

const Linkedin = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export default Team;
