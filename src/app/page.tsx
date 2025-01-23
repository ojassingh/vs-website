import Hero from "@/components/hero";
import Logos from "@/components/logos";
import Navbar from "@/components/navbar";
import grain from "@/../public/grain.jpg";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl">
      {/* <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{
          backgroundImage: `url(${grain.src})`,
        }}
      ></div> */}
      <Navbar />
      <Hero />
      {/* <Logos /> */}
    </div>
  );
}
