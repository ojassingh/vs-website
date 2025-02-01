import {
  Briefcase,
  Eye,
  Handshake,
  Landmark,
  Lightbulb,
  Speech,
  TrendingUp,
  Users,
  Wind,
} from "lucide-react";
import { FC } from "react";
import BlurFade from "./ui/blur-fade";

const Services: FC = () => {
  const services = [
    {
      title: "Mergers and Acquisitions",
      description: [
        "Support through M&A transactions",
        "Comprehensive due diligence support",
        "Facilitation from initiation to completion",
      ],
      icon: <Handshake size={20} />,
    },
    {
      title: "Startup Registration",
      description: [
        "Expert registration guidance",
        "Compliance with Indian regulations",
        "Accelerating startup journeys",
      ],
      icon: <Lightbulb size={20} />,
    },
    {
      title: "FEMA and RBI Compliance",
      description: [
        "Compliance with FEMA and RBI regulations",
        "Expertise in foreign exchange and banking",
        "Navigational support in regulations",
      ],
      icon: <Landmark size={20} />,
    },
    {
      title: "Corporate Advisory",
      description: [
        "Guidance on corporate laws",
        "Expertise in Companies Act, SEBI, FEMA, FDI",
        "Navigating complex legal frameworks",
      ],
      icon: <Speech size={20} />,
    },
    {
      title: "Winding Up",
      description: [
        "Professional dissolution services",
        "Compliance with liquidation requirements",
        "Voluntary and compulsory liquidation",
      ],
      icon: <Wind size={20} />,
    },
    {
      title: "Secretarial Auditing & Due Diligence",
      description: [
        "Corporate governance enhancement",
        "Detailed audits and due diligence",
        "Adherence to Companies Act, 2013",
      ],
      icon: <Eye size={20} />,
    },
    {
      title: "Strategic Manpower Planning & Hiring",
      description: [
        "Align workforce strategies with business goals",
        "Onboard talent that drives innovation",
        "Build agile teams to adapt to market demands",
      ],
      icon: <Users size={20}/>,
    }, 
    {
      title: "Talent Acquisition & Management",
      description: [
        "Source high-impact candidates for critical roles",
        "Create structured career paths for team growth",
        "Align employee goals with organizational vision",
      ],
      icon: <Briefcase size={20} />,
    },
    {
      title: "Training Analysis & Team Engagement",
      description: [
        "Identify skill gaps to deliver targeted learning",
        "Foster a culture of continuous improvement",
        "Enhance workplace performance and morale",
      ],
      icon: <TrendingUp size={20} />,
    },
  ];

  return (
    <section id="services" className="relative px-4 sm:px-0">
      <div className="grid gap-4">
        <p className="max-w-max rounded-lg border px-2 py-1 text-sm">
          SERVICES
        </p>
        <div className="items-start justify-between sm:flex">
          <h1 className={`font-heading text-3xl font-medium sm:text-5xl`}>
            Leading teams with legal <br /> expertise globally
          </h1>
          <p className="mt-2 max-w-lg text-left text-gray-600 sm:mt-0 sm:text-right">
            We guide founders and corporate leaders through the complexities of
            mergers, governance, compliance, and disputes—crafting strategies
            that align with their vision and scale with their ambitions.
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-20 sm:grid-cols-3">
        {services.map(({ title, description, icon }, index) => {
          return (
            <BlurFade key={index} inView delay={index / 10}>
              <div className="z-10 flex flex-col gap-4 rounded-md border bg-white/40 px-8 py-4 ring-1 shadow-md ring-black/5 backdrop-blur-md sm:px-8 sm:py-8">
                <h3 className="flex items-center gap-2">
                  <span className="">{icon}</span>
                  {title}
                </h3>
                <ul className="flex list-disc flex-col gap-1">
                  {description.map((point, index) => {
                    return (
                      <li key={index} className="text-sm text-gray-600">
                        {point}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </BlurFade>
          );
        })}
      </div>
      <div className="absolute top-0 right-0 -z-10 size-80 translate-x-1/2 rounded-full bg-radial-[at_25%_25%] from-transparent to-[#438AFF] blur-lg"></div>
    </section>
  );
};

export default Services;
